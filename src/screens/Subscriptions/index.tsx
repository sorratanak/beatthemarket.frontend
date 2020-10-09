import React, { useContext, useMemo, useCallback } from 'react';
import { View } from 'react-native';
import {
  getProducts,
  getSubscriptions,
  requestPurchase,
  requestSubscription,
} from 'react-native-iap';

import {
  SettingsNestedScreenWrapper,
  SubscriptionsList,
} from '../../components';
import { getThemedStyles } from './styles';
import { ThemeContext } from '../../contexts';
import { IMAGES } from '../../assets';
import {
  ONE_TIME_PURCHASE_TYPE,
  PURCHASE_TYPE,
  SUBSCRIPTION_TYPE,
} from '../../constants';
import { IPurchase } from '../../types';

export function Subscriptions() {
  const { theme } = useContext(ThemeContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const onItemPress = useCallback((purchase: IPurchase) => {
    switch (purchase.TYPE) {
      case PURCHASE_TYPE.ONE_TIME_PURCHASE:
        getProducts([purchase?.RNIAP_PRODUCT_ID]).then((result) => {
          const [currentPurchase] = result;
          requestPurchase(currentPurchase?.productId);
        });
        break;
      case PURCHASE_TYPE.SUBSCRIPTION:
        getSubscriptions([purchase?.RNIAP_PRODUCT_ID]).then((result) => {
          const [subscription] = result;
          requestSubscription(subscription?.productId);
        });
        break;
      default:
        break;
    }
  }, []);

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
    </SettingsNestedScreenWrapper>
  );
}
