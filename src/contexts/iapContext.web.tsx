import React, { useState, useCallback, useContext, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useMutation } from '@apollo/client';
import _ from 'lodash';

import iapGraphql from '../graphql/iap';
import { IPurchase, IStripeUserInfo, PurchaseType } from '../types';
import { UserContext } from './userContext';
import { getVerifyPaymentRequest } from '../utils/parsing';
import { getIapProvider } from '../utils';
import { PURCHASE_TYPE } from '../constants';

interface ContextProps {
  isProcessing: boolean;
  selectedPurchase: IPurchase;
  selectedSubscription: IPurchase;
  onSelectPurchase: (purchase: IPurchase) => void;
  onSelectSubscription: (subscription: IPurchase) => void;
  onRequestPurchase: (userInfo: IStripeUserInfo) => void;
  onRequestSubscription: (userInfo: IStripeUserInfo) => void;
}

const DEFAULT_IAP_CONTEXT: ContextProps = {
  isProcessing: false,
  selectedPurchase: null,
  selectedSubscription: null,
  onSelectPurchase: _.noop,
  onSelectSubscription: _.noop,
  onRequestSubscription: _.noop,
  onRequestPurchase: _.noop,
};

export const IapContext = React.createContext(DEFAULT_IAP_CONTEXT);

const ContextProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const { user } = useContext(UserContext);

  /* ------ State ------ */
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [lastRequestType, setLastRequestType] = useState<PurchaseType>(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [selectedPurchase, setSelectedPurchase] = useState<IPurchase>(null);
  const [selectedSubscription, setSelectedSubscription] = useState<IPurchase>(
    null,
  );

  /* ------ Reset states when logout ------ */
  useEffect(() => {
    if (!user) {
      setIsProcessing(false);
      setPaymentMethod(null);
      setLastRequestType(null);
      setSelectedPurchase(null);
      setSelectedSubscription(null);
    }
  }, [user]);

  /* ------ Queries ------ */
  const [verifyPayment, { data: verifyPaymentResponse }] = useMutation(
    iapGraphql.queries.VERIFY_PAYMENT,
  );

  const [
    createStripeCustomer,
    { data: stripeCustomer, error: stripeCustomerError },
  ] = useMutation(iapGraphql.queries.CREATE_STRIPE_CUSTOMER);
  useEffect(() => {
    const selectedPurchaseItem: IPurchase =
      lastRequestType === PURCHASE_TYPE.ONE_TIME_PURCHASE
        ? selectedPurchase
        : selectedSubscription;

    const currentProductId = selectedPurchaseItem?.STRIPE_PRODUCT_ID;

    if (
      currentProductId &&
      paymentMethod &&
      stripeCustomer?.createStripeCustomer
    ) {
      const {
        createStripeCustomer: [currentStripeCustomer],
      } = stripeCustomer;

      // console.log(
      //   JSON.stringify(
      //     getVerifyPaymentRequest(currentProductId, getIapProvider(), {
      //       customerId: currentStripeCustomer?.id,
      //       paymentMethodId: paymentMethod.id,
      //       priceId: currentProductId,
      //     }),
      //   ),
      // );

      verifyPayment(
        getVerifyPaymentRequest(currentProductId, getIapProvider(), {
          customerId: currentStripeCustomer?.id,
          paymentMethodId: paymentMethod.id,
          priceId: currentProductId,
        }),
      );
    }
  }, [stripeCustomer]);

  console.log('stripeCustomer', stripeCustomer);

  const stripe = useStripe();
  const elements = useElements();

  const onRequestPurchase = useCallback(
    async (userInfo: IStripeUserInfo) => {
      console.log(
        'onRequestPurchase, selectedPurchase:',
        selectedPurchase,
        'userInfo:',
        userInfo,
      );

      setLastRequestType(PURCHASE_TYPE.ONE_TIME_PURCHASE);

      if (!stripe || !elements) {
        return;
      }

      const cardElement = elements.getElement(CardElement);

      const {
        error,
        paymentMethod: newPaymentMethod,
      } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        console.log('[error]', error);
      } else {
        console.log('email is', user?.userEmail);
        setPaymentMethod(newPaymentMethod);
        createStripeCustomer({ variables: { email: user?.userEmail } });
      }
    },
    [stripe, elements, selectedPurchase, setLastRequestType],
  );

  const onRequestSubscription = useCallback(
    async (userInfo: IStripeUserInfo) => {
      setLastRequestType(PURCHASE_TYPE.SUBSCRIPTION);
      console.log('onRequestSubscription', selectedSubscription, userInfo);

      if (!stripe || !elements) {
        return;
      }

      const cardElement = elements.getElement(CardElement);

      const {
        error,
        paymentMethod: newPaymentMethod,
      } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        console.log('[error]', error);
      } else {
        console.log('email is', user?.userEmail);
        setPaymentMethod(newPaymentMethod);
        createStripeCustomer({ variables: { email: user?.userEmail } });
      }
    },
    [stripe, elements, selectedSubscription, setLastRequestType],
  );

  const onSelectPurchase = useCallback(
    (newPurchase: IPurchase) => {
      console.log('newPurchase', newPurchase);
      setSelectedPurchase(newPurchase);
    },
    [setSelectedPurchase],
  );

  const onSelectSubscription = useCallback(
    (newSubscription: IPurchase) => {
      setSelectedSubscription(newSubscription);
    },
    [setSelectedSubscription],
  );

  return (
    <IapContext.Provider
      value={{
        isProcessing,
        selectedPurchase,
        selectedSubscription,
        onSelectPurchase,
        onSelectSubscription,
        onRequestPurchase,
        onRequestSubscription,
      }}>
      {children}
    </IapContext.Provider>
  );
};

export default ContextProvider;
