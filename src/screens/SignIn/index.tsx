import React, { useContext, useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StackParams } from '../../navigation';
import { Container } from '../../components';
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
            <Text style={themedStyles.forgotPassword}>Forgot password?</Text>
            <TouchableOpacity>
              <Text style={themedStyles.restorePassword}> Click here</Text>
            </TouchableOpacity>
          </View>
          <View style={themedStyles.buttonContainer}>
            <TouchableOpacity
              style={themedStyles.button}
              onPress={signInWithGoogle}>
              <Text
                style={[themedStyles.buttonText, themedStyles.loginButtonText]}>
                Log in
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[themedStyles.signupButton, themedStyles.button]}
              onPress={() => navigate('SignUp')}>
              <Text style={themedStyles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
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
            <Text style={themedStyles.socialMediaButtonText}>Google</Text>
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
            <Text style={themedStyles.socialMediaButtonText}>Facebook</Text>
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
            <Text style={themedStyles.appleButtonText}>Sign in with Apple</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}
