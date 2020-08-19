import React, { useContext, useMemo } from 'react';
import { Text, View } from 'react-native';

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
  const { onSetActiveSubscription } = useContext(IapContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

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
        onPress={() => {}}
        style={{
          container: themedStyles.buttonContainer,
        }}>
        Buy
      </DefaultButton>
    </SettingsNestedScreenWrapper>
  );
}
