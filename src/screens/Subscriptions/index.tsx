import React, { useContext, useCallback, useMemo } from 'react';
import { Text, View } from 'react-native';

import {
  Container,
  TilesList,
  SettingsNestedScreenWrapper,
} from '../../components';
import { getThemedStyles } from './styles';
import { ThemeContext } from '../../contexts';
import { ScreenProps } from './props';
import { IMAGES } from '../../assets';

export function Subscriptions({ navigation }: ScreenProps) {
  const { theme } = useContext(ThemeContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <SettingsNestedScreenWrapper
      imageSource={IMAGES.FLAG}
      style={themedStyles.container}>
      <Text>Subscriptions</Text>
      <View style={{ flex: 1 }}></View>
      {/* <TilesList
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <Image source={item.source} style={themedStyles.tileImage} />
        )}
      /> */}
    </SettingsNestedScreenWrapper>
  );
}
