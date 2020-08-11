import React, { useContext, useState } from 'react';
import { Text, Button, TextInput, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StackParams } from '../../navigation';
import { Container } from '../../components';
import { ThemeContext, UserContext } from '../../contexts';
import { getThemedStyles } from './styles';

type NavigationProps = StackNavigationProp<StackParams, 'SignIn'>;

export function SignIn() {
  const { navigate } = useNavigation<NavigationProps>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { theme } = useContext(ThemeContext);
  const { signInWithGoogle } = useContext(UserContext);

  const themedStyles = getThemedStyles(theme);

  return (
    <Container>
      <View style={themedStyles.signinWindow}>
        <Text>Google sign In</Text>
        <TextInput
          style={themedStyles.textInputStyle}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={themedStyles.textInputStyle}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Sign in" onPress={signInWithGoogle} />
        <Text>Don't have an account?</Text>
        <Button title="Go To Sign Up" onPress={() => navigate('SignUp')} />
      </View>
    </Container>
  );
}
