import React, { useCallback, useContext, useMemo, useState } from 'react';
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
import { ScreenProps } from './props';

export function ForgotPassword({ navigation }: ScreenProps) {
  const [email, setEmail] = useState('');

  const { theme } = useContext(ThemeContext);
  const { forgotPassword } = useContext(UserContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const onResetPasswordPress = useCallback(() => {
    forgotPassword(email);
    navigation.goBack();
  }, [email, navigation, forgotPassword]);

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
          <View style={themedStyles.buttonContainer}>
            <DefaultButton
              onPress={onResetPasswordPress}
              style={{
                container: themedStyles.resetPasswordButtonContainer,
                text: themedStyles.resetPasswordButtonText,
              }}>
              Reset password
            </DefaultButton>
          </View>
        </View>
      </View>
    </Container>
  );
}
