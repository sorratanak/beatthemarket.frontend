import React, { useContext } from 'react';
import { Text, Button } from 'react-native';
import { StackParams } from '../../navigation';
import { Container } from '../../components';
// import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { UserContext } from '../../userContext';

type NavigationProps = StackNavigationProp<StackParams, 'SignIn'>;

export function SignIn(props: NavigationProps) {
  // const { navigate } = useNavigation<NavigationProps>();

  const { signIn } = useContext(UserContext);

  return (
    <Container>
      <Text>Sign In</Text>
      <Button title="Sign in" onPress={() => signIn('test', 'password')} />
    </Container>
  );
}
