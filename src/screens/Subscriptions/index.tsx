import React, { useContext, useMemo, useCallback } from 'react';
import { View } from 'react-native';
import { getSubscriptions, requestSubscription } from 'react-native-iap';

import {
  SettingsNestedScreenWrapper,
  SubscriptionsList,
  DefaultButton,
} from '../../components';
import { getThemedStyles } from './styles';
import { ThemeContext, IapContext } from '../../contexts';
import { IMAGES } from '../../assets';
import { SUBSCRIPTION_TYPE } from '../../constants';

export function Subscriptions() {
  const { theme } = useContext(ThemeContext);
  const { selectedSubscription, onSelectSubscription } = useContext(IapContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const onSubscriptionPurchase = useCallback(() => {
    if (selectedSubscription) {
      getSubscriptions([selectedSubscription?.RNIAP_PRODUCT_ID]).then(
        (result) => {
          console.log('getSubscriptions', result);

          const [subscription] = result;
          requestSubscription(subscription?.productId);
        },
      );
    }
  }, [selectedSubscription]);

  return (
    <SettingsNestedScreenWrapper
      imageSource={IMAGES.FLAG}
      style={themedStyles.container}>
      <View style={themedStyles.flexContainer}>
        <SubscriptionsList
          subscriptions={Object.values(SUBSCRIPTION_TYPE).slice(0, 1)}
          onSubscriptionPress={onSelectSubscription}
        />
      </View>
      <DefaultButton
        onPress={onSubscriptionPurchase}
        style={{
          container: themedStyles.buttonContainer,
          text: themedStyles.buttonText,
        }}>
        Purchase
      </DefaultButton>
    </SettingsNestedScreenWrapper>
  );
}
