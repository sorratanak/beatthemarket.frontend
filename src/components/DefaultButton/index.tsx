import React, { useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ThemeContext } from '../../contexts';
import { getThemedStyles } from './styles';

interface Props {
  children: string;
  withBg?: boolean;
  onPress: () => void;
}

export function DefaultButton({ children, withBg, onPress }: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = getThemedStyles(theme);
  const buttonStyle = withBg
    ? [themedStyles.buttonBg, themedStyles.button]
    : themedStyles.button;
  const textStyle = withBg
    ? themedStyles.buttonText
    : [themedStyles.buttonText, themedStyles.buttonTextColor];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
}
