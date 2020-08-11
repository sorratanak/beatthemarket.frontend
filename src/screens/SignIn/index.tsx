import React, { useContext, useState } from 'react';
import { Text, Button, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StackParams } from '../../navigation';
import { Container } from '../../components';
import { UserContext } from '../../contexts/userContext';
import { styles } from './styles';

type NavigationProps = StackNavigationProp<StackParams, 'SignIn'>;

export function SignIn() {
  const { navigate } = useNavigation<NavigationProps>();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const { signInWithGoogle } = useContext(UserContext);

  return (
    <Container>
      <Text>Google sign In</Text>
      {/* <TextInput
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
      /> */}
      <Button title="Sign in" onPress={signInWithGoogle} />
      <Text>Don't have an account?</Text>
      <Button title="Go To Sign Up" onPress={() => navigate('SignUp')} />
    </Container>
  );
}
