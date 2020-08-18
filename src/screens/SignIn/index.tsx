import React, { useContext, useState, useMemo } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StackParams } from '../../navigation/stacks/AuthStack';
import { Container } from '../../components';
import { ThemeContext, UserContext } from '../../contexts';
import { getThemedStyles } from './styles';
import { IMAGES } from '../../assets';
import { DefaultInput } from '../../components/DefaultInput';
import { DefaultButton } from '../../components/DefaultButton';

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
        <View style={themedStyles.signinInputContainer}>
          <DefaultInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <DefaultInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <View style={themedStyles.forgotPasswordContainer}>
            <Text style={themedStyles.forgotPassword}>Forgot password?</Text>
            <TouchableOpacity>
              <Text style={themedStyles.restorePassword}> Click here</Text>
            </TouchableOpacity>
          </View>
          <View style={themedStyles.buttonContainer}>
            <DefaultButton
              onPress={signInWithGoogle}
              style={{
                button: { marginRight: 11 },
                text: { color: theme.SIGNIN_SCREEN.LOGIN_BUTTON_TEXT_COLOR },
              }}>
              Log In
            </DefaultButton>
            <DefaultButton
              onPress={() => navigate('SignUp')}
              style={{
                button: {
                  backgroundColor:
                    theme.SIGNIN_SCREEN.SIGNUP_BUTTON_BACKGROUND_COLOR,
                },
              }}>
              Sign Up
            </DefaultButton>
          </View>
        </View>
        <View style={themedStyles.socialMediaContainer}>
          <TouchableOpacity
            style={[
              themedStyles.socialMediaButton,
              themedStyles.googleButtonContainer,
            ]}>
            <View
              style={[
                themedStyles.socialMediaIconContainer,
                themedStyles.googleIconContainer,
              ]}>
              <Image
                source={IMAGES.GOOGLE}
                style={themedStyles.socialMediaIcon}
              />
            </View>
            <View style={themedStyles.socialButtonTextContainer}>
              <Text style={themedStyles.socialMediaButtonText}>Google</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              themedStyles.socialMediaButton,
              themedStyles.facebookButtonContainer,
            ]}>
            <View
              style={[
                themedStyles.socialMediaIconContainer,
                themedStyles.facebookIconContainer,
              ]}>
              <Image
                source={IMAGES.FACEBOOK}
                style={themedStyles.socialMediaIcon}
              />
            </View>
            <View style={themedStyles.socialButtonTextContainer}>
              <Text style={themedStyles.socialMediaButtonText}>Facebook</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              themedStyles.socialMediaButton,
              themedStyles.appleButtonContainer,
            ]}>
            <View style={themedStyles.socialMediaIconContainer}>
              <Image
                source={IMAGES.APPLE}
                style={themedStyles.socialMediaIcon}
              />
            </View>
            <View style={themedStyles.socialButtonTextContainer}>
              <Text style={themedStyles.appleButtonText}>
                Sign in with Apple
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}
