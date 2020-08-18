import React, { useContext, useMemo } from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import { ThemeContext } from '../../contexts';
import { getThemedStyles } from './styles';

interface Props {
  onPress: () => void;
  style?: ViewStyle;
  children: React.ReactNode;
}

export function TouchableTile({
  onPress,
  style: propContainerStyle,
  children,
}: Props) {
  const { theme } = useContext(ThemeContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[themedStyles.container, propContainerStyle]}>
      {children}
    </TouchableOpacity>
  );
}
