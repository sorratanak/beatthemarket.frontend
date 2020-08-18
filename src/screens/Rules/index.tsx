import React, { useContext, useMemo } from 'react';
import { Text } from 'react-native';

import { Container } from '../../components';
import { getThemedStyles } from './styles';
import { ThemeContext } from '../../contexts';

export function Rules() {
  const { theme } = useContext(ThemeContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <Container style={themedStyles.container}>
      <Text style={themedStyles.title}>Rules</Text>
    </Container>
  );
}
