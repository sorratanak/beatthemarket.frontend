import React, { useContext, useCallback, useMemo } from 'react';
import { Switch, Text } from 'react-native';

import { Container } from '../../components';
import { LIGHT_THEME } from '../../themes/index.web';
import { DARK_THEME } from '../../themes';
import { COLORS } from '../../themes/colors';
import { getThemedStyles } from './styles';
import { ThemeContext } from '../../contexts';

export function Settings() {
  const { theme, switchTheme } = useContext(ThemeContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

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
