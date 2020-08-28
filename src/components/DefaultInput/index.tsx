import React, { useContext, useMemo } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { ThemeContext } from '../../contexts';
import { getThemedStyles } from './styles';

interface Props extends TextInputProps {}

export function DefaultInput(props: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return <TextInput {...props} style={[themedStyles.textInput, props.style]} />;
}
