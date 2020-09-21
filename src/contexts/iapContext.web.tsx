import React, { useState, useCallback, useContext, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useMutation } from '@apollo/client';
import _ from 'lodash';

import iapGraphql from '../graphql/iap';
import { IPurchase, IStripeUserInfo } from '../types';
import { UserContext } from './userContext';
import { getVerifyPaymentRequest } from '../utils/parsing';
import { getIapProvider } from '../utils';

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
    const currentProductId = selectedSubscription?.STRIPE_PRODUCT_ID;

    if (
      currentProductId &&
      paymentMethod &&
      stripeCustomer?.createStripeCustomer
    ) {
      const {
        createStripeCustomer: [currentStripeCustomer],
      } = stripeCustomer;

      console.log('hah', currentProductId, {
        customerId: currentStripeCustomer?.id,
        paymentMethodId: paymentMethod.id,
        priceId: currentProductId,
      });

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
      // TODO
    },
    [stripe, elements],
  );

  const onRequestSubscription = useCallback(
    async (userInfo: IStripeUserInfo) => {
      console.log(
        'onRequestSubscription',
        selectedSubscription,
        selectedSubscription?.STRIPE_PRODUCT_ID,
        userInfo,
      );

      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }

      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const cardElement = elements.getElement(CardElement);

      // Use your card Element with other Stripe.js APIs
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
    [stripe, elements],
  );

  const onSelectPurchase = useCallback(
    (newPurchase: IPurchase) => {
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
