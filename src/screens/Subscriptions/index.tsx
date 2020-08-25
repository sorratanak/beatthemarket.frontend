import React, { useContext, useMemo, useCallback, useState } from 'react';
import { View, Text } from 'react-native';
import {
  requestSubscription,
  getProducts,
  getSubscriptions,
  initConnection,
} from 'react-native-iap';

import {
  SettingsNestedScreenWrapper,
  SubscriptionsList,
  DefaultButton,
  DefaultModal,
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

  const [isModalVisible, setIsModalVisible] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsModalVisible(false);
  }, [setIsModalVisible]);

  const onSubscriptionPurchase = useCallback(() => {
    // getProducts(['additional_balance_100k']).then((result) =>
    //   console.log('getProducts', result),
    // );
    // requestSubscription(activeSubscription.id);
    setIsModalVisible(true);
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

      <DefaultModal isVisible={isModalVisible}>
        <View style={themedStyles.modalContainer}>
          <Text>Some text</Text>
          <DefaultButton
            onPress={onCloseModal}
            style={{
              container: themedStyles.buttonContainer,
              text: themedStyles.buttonText,
            }}>
            Purchase
          </DefaultButton>
        </View>
      </DefaultModal>
    </SettingsNestedScreenWrapper>
  );
}
