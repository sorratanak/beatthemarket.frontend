import React, { useState, useCallback, useContext, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useMutation } from '@apollo/client';
import _ from 'lodash';

import iapGraphql from '../graphql/iap';
import { ISubscriptionPlan, IStripeUserInfo } from '../types';
import { UserContext } from './userContext';

interface ContextProps {
  activeSubscription: ISubscriptionPlan;
  isProcessing: boolean;
  onRequestSubscription: (
    subscriptionId: string,
    userInfo: IStripeUserInfo,
  ) => void;
  onSetActiveSubscription: (subscription: ISubscriptionPlan) => void;
}

const DEFAULT_IAP_CONTEXT: ContextProps = {
  activeSubscription: null,
  isProcessing: false,
  onRequestSubscription: _.noop,
  onSetActiveSubscription: _.noop,
};

export const IapContext = React.createContext(DEFAULT_IAP_CONTEXT);

const ContextProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const { user } = useContext(UserContext);

  /* State */
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [activeSubscription, setActiveSubscription] = useState<
    ISubscriptionPlan
  >(null);

  /* Queries */
  const [
    createStripeCustomer,
    { data: stripeCustomer, error: stripeCustomerError },
  ] = useMutation(iapGraphql.queries.CREATE_STRIPE_CUSTOMER);
  useEffect(() => {
    if (paymentMethod && stripeCustomer) {
      // TODO next step of stripe
      console.log('success!', paymentMethod, stripeCustomer);
    }
  }, [stripeCustomer]);

  console.log('stripeCustomer', stripeCustomer);

  const stripe = useStripe();
  const elements = useElements();

  const onRequestSubscription = useCallback(
    async (subscriptionId: string, userInfo: IStripeUserInfo) => {
      console.log('onRequestSubscription', subscriptionId, userInfo);

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

  const onSetActiveSubscription = useCallback(
    (subscription: ISubscriptionPlan) => {
      setActiveSubscription(subscription);
    },
    [setActiveSubscription],
  );

  return (
    <IapContext.Provider
      value={{
        isProcessing,
        activeSubscription,
        onSetActiveSubscription,
        onRequestSubscription,
      }}>
      {children}
    </IapContext.Provider>
  );
};

export default ContextProvider;
