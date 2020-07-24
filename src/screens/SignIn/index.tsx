import React, { useContext, useState } from 'react';
import { Text, Button, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParams } from '../../navigation';
import { Container } from '../../components';
import { UserContext } from '../../userContext';
import { styles } from './styles';

type NavigationProps = StackNavigationProp<StackParams, 'SignIn'>;

export function SignIn(props: NavigationProps) {
  // const { navigate } = useNavigation<NavigationProps>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(UserContext);

  return (
    <Container>
      <Text>Sign In</Text>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.textInputStyle}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => signIn(email, password)} />
    </Container>
  );
}
