import React, { useState, useCallback } from 'react';
import _ from 'lodash';
import { ISubscriptionPlan } from '../types';

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

  const onRequestSubscription = useCallback(() => {}, [setIsProcessing]);

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
