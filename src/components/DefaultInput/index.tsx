import React, { useContext } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { ThemeContext } from '../../contexts';
import { getThemedStyles } from './styles';

interface Props extends TextInputProps {}

export function DefaultInput(props: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = getThemedStyles(theme);

  return (
    <TextInput {...props} style={[themedStyles.textInputStyle, props.style]} />
  );
}
