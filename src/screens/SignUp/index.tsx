import React, { useContext, useMemo, useState } from 'react';
import { Platform, View } from 'react-native';
import {
  BeatTheMarketBackground,
  Container,
  DefaultButton,
  DefaultInput,
} from '../../components';
import { ThemeContext } from '../../contexts';
import { UserContext } from '../../contexts/userContext';
import { getThemedStyles } from './styles';

export function SignUp() {
  // const { navigate } = useNavigation<NavigationProps>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { theme } = useContext(ThemeContext);
  const { signUp } = useContext(UserContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <Container style={themedStyles.container}>
      {Platform.OS === 'web' && <BeatTheMarketBackground />}

      <View style={themedStyles.subcontainer}>
        <View style={themedStyles.inputsContainer}>
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
              onPress={() => signUp(email, password)}
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
