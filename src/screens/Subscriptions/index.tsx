import React, { useContext, useMemo, useCallback } from 'react';
import { View } from 'react-native';
import {
  requestSubscription,
  getProducts,
  getSubscriptions,
} from 'react-native-iap';

import {
  SettingsNestedScreenWrapper,
  SubscriptionsList,
  DefaultButton,
} from '../../components';
import { getThemedStyles } from './styles';
import { ThemeContext, IapContext } from '../../contexts';
import { IMAGES } from '../../assets';
import { SUBSCRIPTIONS } from './subscriptions';

export function Subscriptions() {
  const { theme } = useContext(ThemeContext);
  const { activeSubscription, onSetActiveSubscription } = useContext(
    IapContext,
  );

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const onSubscriptionPurchase = useCallback(() => {
    getProducts(['additional_balance_100k']).then((result) =>
      console.log('getProducts', result),
    );
    requestSubscription(activeSubscription.id);
  }, [activeSubscription]);

  return (
    <SettingsNestedScreenWrapper
      imageSource={IMAGES.FLAG}
      style={themedStyles.container}>
      <View style={themedStyles.flexContainer}>
        <SubscriptionsList
          subscriptions={SUBSCRIPTIONS}
          onSubscriptionPress={onSetActiveSubscription}
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
