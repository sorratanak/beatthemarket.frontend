import React, { useContext, useMemo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  SettingsNestedScreenWrapper,
  DefaultButton,
  SwitchRow,
} from '../../components';
import { getThemedStyles } from './styles';
import { ThemeContext, UserContext } from '../../contexts';
import { IMAGES } from '../../assets';
import { THEME_KEYS } from '../../constants';

export function UserSettings() {
  const { theme, themeKey, switchTheme } = useContext(ThemeContext);
  const { logout } = useContext(UserContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const navigation = useNavigation();

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
      <DefaultButton
        onPress={() => logout(navigation)}
        style={{
          container: themedStyles.buttonContainer,
          text: themedStyles.buttonText,
        }}>
        Logout
      </DefaultButton>
    </SettingsNestedScreenWrapper>
  );
}
