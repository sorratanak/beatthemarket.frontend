import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Platform } from 'react-native';
import {
  // requestPurchase,
  requestSubscription,
  InAppPurchase,
  SubscriptionPurchase,
  PurchaseError,
  finishTransactionIOS,
  purchaseUpdatedListener,
  purchaseErrorListener,
  finishTransaction,
} from 'react-native-iap';
import { useMutation } from '@apollo/client';
import _ from 'lodash';
import { ISubscriptionPlan } from '../types';
import iapGraphql from '../graphql/iap';
import { getIapProvider } from '../utils';
import { getVerifyPaymentRequest } from '../utils/parsing';

interface ContextProps {
  activeSubscription: ISubscriptionPlan;
  isProcessing: boolean;
  onRequestSubscription: (subscriptionId: string) => void;
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
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [activeSubscription, setActiveSubscription] = useState<
    ISubscriptionPlan
  >(null);

  const purchaseUpdatedListenerRef = useRef(null);
  const purchaseErrorListenerRef = useRef(null);

  const [
    verifyPaymentSubscription,
    { data: verifyPaymentSubscriptionResponse },
  ] = useMutation(iapGraphql.queries.VERIFY_PAYMENT_SUBSCRIPTION);
  const [
    verifyPaymentPurchase,
    { data: verifyPaymenPurchaseResponse },
  ] = useMutation(iapGraphql.queries.VERIFY_PAYMENT_PURCHASE);

  useEffect(() => {
    purchaseUpdatedListenerRef.current = purchaseUpdatedListener(
      async (purchase: InAppPurchase | SubscriptionPurchase) => {
        const receipt = purchase.transactionReceipt;
        if (receipt) {
          try {
            if (Platform.OS === 'ios') {
              await finishTransactionIOS(purchase.transactionId);
            }

            await finishTransaction(purchase);

            verifyPaymentSubscription(
              getVerifyPaymentRequest(
                purchase.productId,
                getIapProvider(),
                receipt,
              ),
            );

            // await processNewPurchase(purchase); // TODO some sql mutation call to save purchase on server
          } catch (ackErr) {
            console.log('purchaseUpdateListener', ackErr);
          }
        }
      },
    );

    purchaseErrorListenerRef.current = purchaseErrorListener(
      (error: PurchaseError) => {
        console.log('purchaseErrorListener', error);
      },
    );

    return () => {
      if (purchaseUpdatedListenerRef.current) {
        purchaseUpdatedListenerRef.current.remove();
        purchaseUpdatedListenerRef.current = null;
      }

      if (purchaseErrorListenerRef.current) {
        purchaseErrorListenerRef.current.remove();
        purchaseErrorListenerRef.current = null;
      }
    };
  }, []);

  const onRequestSubscription = useCallback(
    async (subscriptionId: string) => {
      try {
        setIsProcessing(true);
        await requestSubscription(subscriptionId, false);
        setIsProcessing(false);
      } catch (err) {
        setIsProcessing(false);
      }
    },
    [setIsProcessing],
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
