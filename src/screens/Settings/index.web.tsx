import React, { useContext, useCallback, useMemo } from 'react';
import { Text, Image, View, Switch } from 'react-native';

import { TilesList, ContainerWithBurgerMenu } from '../../components';
import { getThemedStyles } from './styles';
import { ThemeContext } from '../../contexts';
import { ScreenProps } from './props';
import { SETTINGS_TILES } from './tiles';
import { Subscriptions } from '../Subscriptions';
import { THEME_KEYS } from '../../constants';
import { COLORS } from '../../themes/colors';

export function Settings({ navigation }: ScreenProps) {
  const { theme, themeKey, switchTheme } = useContext(ThemeContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const onNavigateTile = useCallback((item: any) => {
    const { nav } = item;
    if (nav) {
      navigation.navigate(nav);
    }
  }, []);

  const isLightTheme = themeKey === THEME_KEYS.LIGHT_THEME;

  const onSwitchTheme = useCallback(() => {
    switchTheme(
      themeKey === THEME_KEYS.LIGHT_THEME
        ? THEME_KEYS.DARK_THEME
        : THEME_KEYS.LIGHT_THEME,
    );
  }, [themeKey]);

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
      <Text style={themedStyles.title}>
        {isLightTheme ? 'Light' : 'Dark'} theme
      </Text>
      <Switch
        trackColor={{ false: COLORS.GRAY, true: COLORS.VIKING }}
        thumbColor={isLightTheme ? COLORS.SILVER : COLORS.GRAY}
        onValueChange={onSwitchTheme}
        value={isLightTheme}
      />
    </ContainerWithBurgerMenu>
  );
}
