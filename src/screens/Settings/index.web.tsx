import React, { useContext, useCallback, useMemo } from 'react';
import { Text, Image, View } from 'react-native';

import { TilesList, ContainerWithBurgerMenu } from '../../components';
import { getThemedStyles } from './styles';
import { ThemeContext } from '../../contexts';
import { ScreenProps } from './props';
import { SETTINGS_TILES } from './tiles';
import { Subscriptions } from '../Subscriptions';

export function Settings({ navigation }: ScreenProps) {
  const { theme } = useContext(ThemeContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const onNavigateTile = useCallback(
    (item: any) => {
      const { nav } = item;
      if (nav) {
        navigation.navigate(nav);
      }
    },
    [navigation],
  );

  return (
    <ContainerWithBurgerMenu style={themedStyles.container}>
      <TilesList
        onTilePress={onNavigateTile}
        numColumns={1}
        tileStyle={themedStyles.tileContainer}
        data={SETTINGS_TILES}
        keyExtractor={(item) => `navigate-${item.id}`}
        renderItem={({ item }) => (
          <View style={themedStyles.tileContentContainer}>
            <Image source={item.source} style={themedStyles.tileImage} />
            <Text style={themedStyles.tileTitle}>{item.title}</Text>
          </View>
        )}
      />
      <View style={themedStyles.settingsContainer}>
        <Subscriptions />
      </View>
    </ContainerWithBurgerMenu>
  );
}
