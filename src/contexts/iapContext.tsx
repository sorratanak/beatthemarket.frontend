import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useContext,
} from 'react';
import { Platform } from 'react-native';
import {
  requestPurchase,
  requestSubscription,
  InAppPurchase,
  SubscriptionPurchase,
  PurchaseError,
  finishTransactionIOS,
  purchaseUpdatedListener,
  purchaseErrorListener,
  finishTransaction,
  consumeAllItemsAndroid,
  initConnection as iapInitConnection,
} from 'react-native-iap';
import { useMutation } from '@apollo/client';
import _ from 'lodash';
import { IPurchase, IStripeUserInfo } from '../types';
import iapGraphql from '../graphql/iap';
import { getIapProvider } from '../utils';
import { getVerifyPaymentRequest } from '../utils/parsing';
import { UserContext } from './userContext';

interface ContextProps {
  isProcessing: boolean;
  selectedPurchase: IPurchase;
  selectedSubscription: IPurchase;
  onSelectPurchase: (purchase: IPurchase) => void;
  onSelectSubscription: (subscription: IPurchase) => void;
  onRequestPurchase: (userInfo?: IStripeUserInfo) => void;
  onRequestSubscription: (userInfo?: IStripeUserInfo) => void;
}

const DEFAULT_IAP_CONTEXT: ContextProps = {
  isProcessing: false,
  selectedPurchase: null,
  selectedSubscription: null,
  onSelectPurchase: _.noop,
  onSelectSubscription: _.noop,
  onRequestPurchase: _.noop,
  onRequestSubscription: _.noop,
};

iapInitConnection();
// TODO remove temporary
if (Platform.OS === 'android') {
  consumeAllItemsAndroid();
}

export const IapContext = React.createContext(DEFAULT_IAP_CONTEXT);

const ContextProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const { user } = useContext(UserContext);

  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [selectedPurchase, setSelectedPurchase] = useState<IPurchase>(null);
  const [selectedSubscription, setSelectedSubscription] = useState<IPurchase>(
    null,
  );

  /* ------ Reset states when logout ------ */
  useEffect(() => {
    if (!user) {
      setIsProcessing(false);
      setSelectedPurchase(null);
      setSelectedSubscription(null);
    }
  }, [user]);

  /* ------ Queries ------ */
  const [verifyPayment, { data: verifyPaymentResponse }] = useMutation(
    iapGraphql.queries.VERIFY_PAYMENT,
  );

  /* ------ Listeners ------ */
  const purchaseUpdatedListenerRef = useRef(null);
  const purchaseErrorListenerRef = useRef(null);

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

            console.log(
              'verifyPaymentRequest',
              JSON.stringify(
                getVerifyPaymentRequest(
                  purchase.productId,
                  getIapProvider(),
                  purchase,
                ).variables,
              ),
            );
            verifyPayment(
              getVerifyPaymentRequest(
                purchase.productId,
                getIapProvider(),
                purchase,
              ),
            );
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

  const onRequestPurchase = useCallback(async () => {
    try {
      setIsProcessing(true);
      await requestPurchase(selectedPurchase?.RNIAP_PRODUCT_ID, false);
      setIsProcessing(false);
    } catch (err) {
      setIsProcessing(false);
    }
  }, [selectedPurchase, setIsProcessing]);

  const onRequestSubscription = useCallback(async () => {
    try {
      setIsProcessing(true);
      await requestSubscription(selectedSubscription?.RNIAP_PRODUCT_ID, false);
      setIsProcessing(false);
    } catch (err) {
      setIsProcessing(false);
    }
  }, [selectedSubscription, setIsProcessing]);

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
