import React, { useContext, useState, useMemo } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { StackParams } from '../../navigation/stacks/AuthStack';
import {
  Container,
  DefaultInput,
  DefaultButton,
  SocialButton,
} from '../../components';
import { ThemeContext, UserContext } from '../../contexts';
import { getThemedStyles } from './styles';
import { IMAGES } from '../../assets';

type NavigationProps = StackNavigationProp<StackParams, 'SignIn'>;

export function SignIn() {
  const { navigate } = useNavigation<NavigationProps>();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const { theme } = useContext(ThemeContext);
  const { signInWithGoogle } = useContext(UserContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <Container style={themedStyles.signinContainer}>
      <View style={themedStyles.signinSubcontainer}>
        <View style={themedStyles.socialMediaContainer}>
          <SocialButton
            onPress={signInWithGoogle}
            imageSource={IMAGES.GOOGLE}
            style={{
              container: themedStyles.googleIconContainer,
              image: themedStyles.googleIcon,
            }}
          />
          <SocialButton
            onPress={() => {}}
            imageSource={IMAGES.FACEBOOK}
            style={{
              container: themedStyles.facebookIconContainer,
              image: themedStyles.facebookIcon,
            }}
          />
          <SocialButton
            onPress={() => {}}
            imageSource={IMAGES.APPLE}
            style={{
              container: themedStyles.appleIconContainer,
              image: themedStyles.appleIcon,
            }}
          />
          <SocialButton
            onPress={() => {}}
            imageSource={IMAGES.MICROSOFT}
            style={{
              container: themedStyles.microsoftIconContainer,
              image: themedStyles.microsoftIcon,
            }}
          />
        </View>
        <View style={themedStyles.signinInputContainer}>
          <DefaultInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={themedStyles.inputContainer}
          />
          <DefaultInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={themedStyles.inputContainer}
          />
          <View style={themedStyles.forgotPasswordContainer}>
            <Text style={themedStyles.forgotPassword}>Forgot password?</Text>
            <TouchableOpacity>
              <Text style={themedStyles.restorePassword}> Click here</Text>
            </TouchableOpacity>
          </View>
          <View style={themedStyles.buttonContainer}>
            <DefaultButton
              onPress={() => {}}
              style={{
                container: themedStyles.loginButtonContainer,
                text: themedStyles.loginButtonText,
              }}>
              Log In
            </DefaultButton>
            <DefaultButton
              onPress={() => navigate('SignUp')}
              style={{
                container: themedStyles.signUpButtonContainer,
                text: themedStyles.signUpButtonText,
              }}>
              Sign Up
            </DefaultButton>
          </View>
        </View>
      </View>
    </Container>
  );
}
