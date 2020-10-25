import React, { useContext, useState, useMemo, useCallback } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { StackParams } from '../../navigation/stacks/AuthStack';
import {
  Container,
  DefaultInput,
  DefaultButton,
  SocialButton,
  BeatTheMarketBackground,
} from '../../components';
import { ThemeContext, UserContext } from '../../contexts';
import { getThemedStyles } from './styles';
import { THEME_KEYS } from '../../constants';
import { IMAGES } from '../../assets';
import { isNotAndroid, isWeb } from '../../utils';

type NavigationProps = StackNavigationProp<StackParams, 'SignIn'>;

export function SignIn() {
  const { navigate } = useNavigation<NavigationProps>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { theme, themeKey } = useContext(ThemeContext);
  const {
    signIn,
    signInWithGoogle,
    signInWithFacebook,
    signInWithApple,
  } = useContext(UserContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const onForgotPasswordPress = useCallback(() => navigate('ForgotPassword'), [
    navigate,
  ]);

  function appleImageSource() {
    return (themeKey === THEME_KEYS.LIGHT_THEME) ? IMAGES.WHITE_APPLE : IMAGES.APPLE
  }

  return (
    <Container style={themedStyles.signinContainer}>
      {isWeb && <BeatTheMarketBackground />}

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
            onPress={signInWithFacebook}
            imageSource={IMAGES.FACEBOOK}
            style={{
              container: themedStyles.facebookIconContainer,
              image: themedStyles.facebookIcon,
            }}
          />
          {isNotAndroid && (
            <SocialButton
              onPress={signInWithApple}
              imageSource={appleImageSource()}
              style={{
                container: themedStyles.appleIconContainer,
                image: themedStyles.appleIcon,
              }}
            />
          )}
        </View>
        <View style={themedStyles.signinInputContainer}>
          <DefaultInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={themedStyles.inputContainer}
          />
          <DefaultInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={themedStyles.inputContainer}
          />
          <View style={themedStyles.buttonContainer}>
            <DefaultButton
              onPress={() => signIn(email, password)}
              style={{
                container: themedStyles.loginButtonContainer,
                text: themedStyles.loginButtonText,
              }}>
              Play
            </DefaultButton>
          </View>
          <View style={themedStyles.forgotPasswordContainer}>
            <Text style={themedStyles.forgotPassword}>Forgot password?</Text>
            <TouchableOpacity onPress={onForgotPasswordPress}>
              <Text style={themedStyles.restorePassword}> Click here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
}
