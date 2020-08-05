import React, { useContext, useCallback } from 'react';
import { Switch, Text } from 'react-native';

import { Container } from '../../components';
import { UserContext } from '../../userContext';
import { LIGHT_THEME } from '../../themes/index.web';
import { DARK_THEME } from '../../themes';
import { COLORS } from '../../themes/colors';
import { getThemedStyles } from './styles';

export function Settings() {
  const { theme, switchTheme } = useContext(UserContext);

  const themedStyles = getThemedStyles(theme);

  const onSwitchTheme = useCallback(() => {
    switchTheme(theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME);
  }, [theme]);

  const isLightTheme = theme === LIGHT_THEME;

  return (
    <Container style={themedStyles.container}>
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