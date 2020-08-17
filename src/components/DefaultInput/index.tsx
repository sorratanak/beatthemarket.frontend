import React, { useContext } from 'react';
import { TextInput } from 'react-native';
import { ThemeContext } from '../../contexts';
import { getThemedStyles } from './styles';

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (string) => void;
  secureTextEntry?: boolean;
}

export function DefaultInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = getThemedStyles(theme);

  return (
    <TextInput
      style={themedStyles.textInputStyle}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
}
