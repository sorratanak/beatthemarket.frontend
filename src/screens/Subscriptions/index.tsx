import React, { useContext, useMemo } from 'react';
import { Text, View } from 'react-native';

import {
  SettingsNestedScreenWrapper,
  SubscriptionsList,
} from '../../components';
import { getThemedStyles } from './styles';
import { ThemeContext } from '../../contexts';
import { IMAGES } from '../../assets';
import { SUBSCRIPTIONS } from './subscriptions';

export function Subscriptions() {
  const { theme } = useContext(ThemeContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <SettingsNestedScreenWrapper
      imageSource={IMAGES.FLAG}
      style={themedStyles.container}>
      <View style={themedStyles.flexContainer}>
        <SubscriptionsList
          subscriptions={SUBSCRIPTIONS}
          onSubscriptionPress={() => {}}
        />
      </View>
    </SettingsNestedScreenWrapper>
  );
}
