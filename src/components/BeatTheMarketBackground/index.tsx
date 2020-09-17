import React, { useContext, useMemo } from 'react';
import { View, Image } from 'react-native';

import { getThemedStyles } from './styles';
import { IMAGES } from '../../assets';
import { ThemeContext } from '../../contexts';
import { THEME_KEYS } from '../../constants';

export function BeatTheMarketBackground() {
  const { theme, themeKey } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <View style={themedStyles.container}>
      <Image
        source={
          themeKey === THEME_KEYS.LIGHT_THEME
            ? IMAGES.BACKGROUND_BEATTHEMARKET_LIGHT
            : IMAGES.BACKGROUND_BEATTHEMARKET_DARK
        }
        style={themedStyles.backgroundImage}
      />
    </View>
  );
}
