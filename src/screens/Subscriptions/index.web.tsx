import React, { useContext, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import Modal from 'modal-react-native-web';
import {
  SettingsNestedScreenWrapper,
  SubscriptionsList,
  DefaultButton,
} from '../../components';
import { getThemedStyles } from './styles';
import { ThemeContext, IapContext } from '../../contexts';
import { IMAGES } from '../../assets';
import { SUBSCRIPTIONS } from './subscriptions';
import { EndGameModal } from '../../components/EndGameModal';

export function Subscriptions() {
  const { theme } = useContext(ThemeContext);
  const { onSetActiveSubscription } = useContext(IapContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const [isModalVisible, setIsModalVisible] = useState(false);

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
      <Text style={themedStyles.description}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo nam
        cumque, dolore magnam recusandae maiores enim laborum suscipit nisi
        facere quaerat beatae corrupti modi magni ipsum quia alias laudantium
        asperiores!
      </Text>
      <DefaultButton
        onPress={() => {
          setIsModalVisible(true);
        }}
        style={{
          container: themedStyles.buttonContainer,
        }}>
        Buy
      </DefaultButton>
      <Modal
        animationType="slide"
        presentationStyle="FormSheet"
        transparent
        visible={isModalVisible}>
        <EndGameModal setIsModalVisible={setIsModalVisible} />
      </Modal>
    </SettingsNestedScreenWrapper>
  );
}
