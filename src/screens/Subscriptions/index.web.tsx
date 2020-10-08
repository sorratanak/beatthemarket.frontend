import React, { useContext, useMemo, useState, useCallback } from 'react';
import { View } from 'react-native';
import {
  SettingsNestedScreenWrapper,
  SubscriptionsList,
  DefaultModal,
  BuySubscriptionModal,
} from '../../components';
import { getThemedStyles, MODAL_CONTAINER_STYLE } from './styles.web';
import { ThemeContext, IapContext } from '../../contexts';
import { IMAGES } from '../../assets';
import {
  SUBSCRIPTION_TYPE,
  PURCHASE_TYPE,
  ONE_TIME_PURCHASE_TYPE,
} from '../../constants';
import { IPurchase, PurchaseType } from '../../types';

export function Subscriptions() {
  const { theme } = useContext(ThemeContext);
  const { onSelectPurchase, onSelectSubscription } = useContext(IapContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const [modalType, setModalType] = useState<PurchaseType>(
    PURCHASE_TYPE.ONE_TIME_PURCHASE,
  );
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onItemPress = useCallback(
    (purchase: IPurchase) => {
      switch (purchase.TYPE) {
        case PURCHASE_TYPE.ONE_TIME_PURCHASE:
          onSelectPurchase(purchase);
          break;
        case PURCHASE_TYPE.SUBSCRIPTION:
          onSelectSubscription(purchase);
          break;
        default:
          break;
      }

      setModalType(purchase.TYPE);
      setIsModalVisible(true);
    },
    [setIsModalVisible, onSelectSubscription, onSelectPurchase],
  );

  const onCloseModal = useCallback(() => {
    setIsModalVisible(false);
  }, [setIsModalVisible]);

  return (
    <SettingsNestedScreenWrapper
      imageSource={IMAGES.FLAG}
      style={themedStyles.container}>
      <View style={themedStyles.flexContainer}>
        <SubscriptionsList
          title="Subscriptions"
          subscriptions={Object.values(SUBSCRIPTION_TYPE)}
          onSubscriptionPress={onItemPress}
          style={{
            container: themedStyles.subscriptionsFlex,
          }}
        />
        <SubscriptionsList
          title="Purchases"
          subscriptions={Object.values(ONE_TIME_PURCHASE_TYPE)}
          onSubscriptionPress={onItemPress}
        />
      </View>

      <DefaultModal
        style={MODAL_CONTAINER_STYLE}
        isVisible={isModalVisible}
        isBackdrop
        onBackdropPress={onCloseModal}>
        <BuySubscriptionModal
          purchaseType={modalType}
          paymentCallback={onCloseModal}
        />
      </DefaultModal>
    </SettingsNestedScreenWrapper>
  );
}
