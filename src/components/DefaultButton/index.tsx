import React, { useContext } from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';
import { ThemeContext } from '../../contexts';
import { getThemedStyles } from './styles';

interface Props {
  children: string;
  onPress: () => void;
  style?: {
    container?: ViewStyle;
    text?: TextStyle;
  };
}

export function DefaultButton({
  children,
  style: propStyle = {},
  ...props
}: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = getThemedStyles(theme);

  return (
    <TouchableOpacity
      {...props}
      style={[themedStyles.container, propStyle.container]}>
      <Text style={[themedStyles.buttonText, propStyle.text]}>{children}</Text>
    </TouchableOpacity>
  );
}
