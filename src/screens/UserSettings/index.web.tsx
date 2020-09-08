import React, { useContext, useMemo, useCallback } from 'react';

import { SettingsNestedScreenWrapper, SwitchRow } from '../../components';
import { getThemedStyles } from './styles';
import { ThemeContext } from '../../contexts';
import { IMAGES } from '../../assets';
import { THEME_KEYS } from '../../constants';

export function UserSettings() {
  const { theme, themeKey, switchTheme } = useContext(ThemeContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const onSwitchTheme = useCallback(() => {
    switchTheme(
      themeKey === THEME_KEYS.LIGHT_THEME
        ? THEME_KEYS.DARK_THEME
        : THEME_KEYS.LIGHT_THEME,
    );
  }, [themeKey]);

  const isLightTheme = themeKey === THEME_KEYS.LIGHT_THEME;

  return (
    <SettingsNestedScreenWrapper
      imageSource={IMAGES.USER}
      style={themedStyles.container}>
      <SwitchRow
        title={isLightTheme ? 'Light theme' : 'Dark theme'}
        switchValue={isLightTheme}
        onSwitchValueChange={onSwitchTheme}
      />
    </SettingsNestedScreenWrapper>
  );
}
