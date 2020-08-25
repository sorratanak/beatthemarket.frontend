import React, { useContext, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
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
import { InfoModal } from '../../components/InfoModal';

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
        onPress={() => setIsModalVisible(true)}
        style={{
          container: themedStyles.buttonContainer,
        }}>
        Buy
      </DefaultButton>
      <DefaultModal isVisible={isModalVisible}>
        <InfoModal
          onClosePress={() => setIsModalVisible(false)}
          title={{ text: 'Pause' }}
          infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          firstButton={{
            text: 'Lorem',
            onPress: () => console.log('all good'),
          }}
          secondButton={{
            text: 'Finish',
            onPress: () => console.log('all good!!!'),
          }}
        />
      </DefaultModal>
    </SettingsNestedScreenWrapper>
  );
}
