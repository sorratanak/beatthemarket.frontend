import React, { useContext, useCallback, useMemo } from 'react';
import { Text, View } from 'react-native';

import {
  Container,
  TilesList,
  SettingsNestedScreenWrapper,
} from '../../components';
import { getThemedStyles } from './styles';
import { ThemeContext } from '../../contexts';
import { IMAGES } from '../../assets';

export function Subscriptions() {
  const { theme } = useContext(ThemeContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <SettingsNestedScreenWrapper
      imageSource={IMAGES.FLAG}
      style={themedStyles.container}>
      <Text>Subscriptions</Text>
      <View style={themedStyles.flexContainer} />
      {/* <TilesList
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <Image source={item.source} style={themedStyles.tileImage} />
        )}
      /> */}
    </SettingsNestedScreenWrapper>
  );
}
