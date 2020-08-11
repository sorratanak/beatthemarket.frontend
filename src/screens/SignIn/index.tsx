import React, { useContext, useState } from 'react';
import { Text, Button, TextInput, View, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StackParams } from '../../navigation';
import { Container } from '../../components';
import { ThemeContext, UserContext } from '../../contexts';
import { getThemedStyles } from './styles';

type NavigationProps = StackNavigationProp<StackParams, 'SignIn'>;

export function SignIn() {
  const { navigate } = useNavigation<NavigationProps>();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const { theme } = useContext(ThemeContext);
  const { signInWithGoogle } = useContext(UserContext);

  const themedStyles = getThemedStyles(theme);

  return (
    <Container style={themedStyles.signinContainer}>
      <View style={themedStyles.signinSubcontainer}>
        <View style={themedStyles.signinInputContainer}>
          <TextInput
            style={themedStyles.textInputStyle}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={themedStyles.textInputStyle}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <View style={themedStyles.forgotPasswordContainer}>
            <Text>Forgot your password?</Text>
            <TouchableOpacity>
              <Text style={themedStyles.restorePassword}> Press here</Text>
            </TouchableOpacity>
          </View>
          <View style={themedStyles.buttonContainer}>
            <TouchableOpacity
              style={themedStyles.loginButton}
              onPress={signInWithGoogle}>
              <Text>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={themedStyles.signupButton}
              onPress={() => navigate('SignUp')}>
              <Text>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={themedStyles.socialMediaContainer}>
          <TouchableOpacity style={themedStyles.socialMediaButton}>
            <Text>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={themedStyles.socialMediaButton}>
            <Text>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={themedStyles.socialMediaButton}>
            <Text>Twitter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}
