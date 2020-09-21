import React, { useContext, useMemo, useState, useCallback } from 'react';
import { Text, View } from 'react-native';
import {
  SettingsNestedScreenWrapper,
  SubscriptionsList,
  DefaultButton,
  DefaultModal,
  BuySubscriptionModal,
} from '../../components';
import { getThemedStyles, MODAL_CONTAINER_STYLE } from './styles.web';
import { ThemeContext, IapContext } from '../../contexts';
import { IMAGES } from '../../assets';
import { SUBSCRIPTION_TYPE, PURCHASE_TYPE } from '../../constants';

export function Subscriptions() {
  const { theme } = useContext(ThemeContext);
  const { onSelectSubscription } = useContext(IapContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsModalVisible(false);
  }, [setIsModalVisible]);

  return (
    <SettingsNestedScreenWrapper
      imageSource={IMAGES.FLAG}
      style={themedStyles.container}>
      <View style={themedStyles.flexContainer}>
        <SubscriptionsList
          subscriptions={Object.values(SUBSCRIPTION_TYPE).slice(1)}
          onSubscriptionPress={onSelectSubscription}
        />
      </View>
      <Text style={themedStyles.description}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo nam
        cumque, dolore magnam recusandae maiores enim laborum suscipit nisi
        facere quaerat beatae corrupti modi magni ipsum quia alias laudantium
        asperiores!
      </Text>
      <DefaultButton
        onPress={() => setIsModalVisible(true)}
        style={{
          container: themedStyles.buttonContainer,
        }}>
        Buy
      </DefaultButton>

      <DefaultModal
        style={MODAL_CONTAINER_STYLE}
        isVisible={isModalVisible}
        isBackdrop
        onBackdropPress={onCloseModal}>
        <BuySubscriptionModal purchaseType={PURCHASE_TYPE.SUBSCRIPTION} />
      </DefaultModal>
    </SettingsNestedScreenWrapper>
  );
}
