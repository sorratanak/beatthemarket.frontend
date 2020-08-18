import React, { useContext } from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';
import { ThemeContext } from '../../contexts';
import { getThemedStyles } from './styles';

interface Props {
  children: string;
  onPress: () => void;
  style?: {
    button?: ViewStyle;
    text?: TextStyle;
  };
}

export function DefaultButton({
  children,
  style: propsStyle,
  ...props
}: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = getThemedStyles(theme);

  return (
    <TouchableOpacity
      {...props}
      style={[themedStyles.button, propsStyle.button]}>
      <Text style={[themedStyles.buttonText, propsStyle.text]}>{children}</Text>
    </TouchableOpacity>
  );
}

DefaultButton.defaultProps = {
  style: {
    button: {},
    text: {},
  },
};
