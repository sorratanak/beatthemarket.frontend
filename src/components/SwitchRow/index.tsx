import React, { useContext, useMemo } from 'react';
import { View, Text, TextStyle, ViewStyle, Switch } from 'react-native';

import { getThemedStyles } from './styles';
import { COLORS } from '../../themes/colors';
import { ThemeContext } from '../../contexts';
import { THEME_KEYS } from '../../constants';

interface Props {
  title: string;
  switchValue: boolean;
  onSwitchValueChange: () => void;
  style?: {
    container?: ViewStyle;
    title?: TextStyle;
  };
}

export function SwitchRow({
  title,
  switchValue,
  onSwitchValueChange,
  style: propStyle = {},
}: Props) {
  const { theme, themeKey } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const isLightTheme = themeKey === THEME_KEYS.LIGHT_THEME;

  return (
    <View style={[themedStyles.container, propStyle.container]}>
      <Text style={[themedStyles.title, propStyle.title]}>{title}</Text>
      <Switch
        trackColor={{ false: COLORS.GRAY, true: COLORS.VIKING }}
        thumbColor={isLightTheme ? COLORS.SILVER : COLORS.GRAY}
        onValueChange={onSwitchValueChange}
        value={switchValue}
      />
    </View>
  );
}
