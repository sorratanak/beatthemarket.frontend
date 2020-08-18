import React, { useContext, useCallback, useMemo } from 'react';
import { Switch, Text, Image } from 'react-native';

import { Container, TilesList } from '../../components';
import { LIGHT_THEME, DARK_THEME } from '../../themes';
import { COLORS } from '../../themes/colors';
import { getThemedStyles } from './styles';
import { ThemeContext } from '../../contexts';
import { ScreenProps } from './props';
import { SETTINGS_TILES } from './tiles';

export function Settings({ navigation }: ScreenProps) {
  const { theme, switchTheme } = useContext(ThemeContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const isLightTheme = theme === LIGHT_THEME;

  const onNavigateTile = useCallback((item: any) => {
    const { nav } = item;
    if (nav) {
      navigation.navigate(nav);
    }
  }, []);

  const onSwitchTheme = useCallback(() => {
    switchTheme(theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME);
  }, [theme]);

  return (
    <Container style={themedStyles.container}>
      <TilesList
        onTilePress={onNavigateTile}
        tileStyle={themedStyles.tileContainer}
        data={SETTINGS_TILES}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <Image source={item.source} style={themedStyles.tileImage} />
        )}
      />
      <Text style={themedStyles.title}>
        {isLightTheme ? 'Light' : 'Dark'} theme
      </Text>
      <Switch
        trackColor={{ false: COLORS.GRAY, true: COLORS.VIKING }}
        thumbColor={isLightTheme ? COLORS.SILVER : COLORS.GRAY}
        onValueChange={onSwitchTheme}
        value={isLightTheme}
      />
    </Container>
  );
}
