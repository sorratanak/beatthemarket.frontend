import React, { useContext } from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';
import { ThemeContext } from '../../contexts';
import { getThemedStyles } from './styles';

interface Props {
  children: string;
  backgroundColor?: string;
  textColor?: string;
  onPress: () => void;
  style?: {
    button?: ViewStyle;
    text?: TextStyle;
  };
}

export function DefaultButton({
  children,
  backgroundColor,
  textColor,
  style: propsStyle,
  ...props
}: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = getThemedStyles(theme);

  const buttonStyle = backgroundColor
    ? [themedStyles.button, { backgroundColor }]
    : themedStyles.button;

  const textStyle = textColor
    ? [themedStyles.buttonText, { color: textColor }]
    : themedStyles.buttonText;

  return (
    <TouchableOpacity {...props} style={[buttonStyle, propsStyle.button]}>
      <Text style={[textStyle, propsStyle.text]}>{children}</Text>
    </TouchableOpacity>
  );
}

DefaultButton.defaultProps = {
  style: {
    button: {},
    text: {},
  },
};
