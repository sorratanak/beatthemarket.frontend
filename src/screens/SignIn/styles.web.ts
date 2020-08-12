import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';
import { LIGHT_THEME } from '../../themes';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    signinContainer: {},
    signinSubcontainer: {
      backgroundColor: theme.SIGNIN_SCREEN.BACKGROUND_COLOR,
      borderRadius: 7,
    },
    signinInputContainer: {
      paddingHorizontal: 140,
      paddingVertical: 40,
    },
    textInputStyle: {
      backgroundColor: theme.SIGNIN_SCREEN.TEXT_INPUT_BACKGROUND,
      color: theme.SIGNIN_SCREEN.TEXT_INPUT_COLOR,
      fontSize: 20,
      fontWeight: '300',
      width: 535,
      height: 70,
      borderWidth: theme === LIGHT_THEME ? 1 : 0,
      borderRadius: 7,
      borderColor: 'rgba(126, 126, 126, 0.2)',
      paddingLeft: 30,
      marginBottom: 30,
    },
    forgotPasswordContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 50,
    },
    forgotPassword: {
      fontWeight: '300',
      fontSize: 20,
      color: theme.SIGNIN_SCREEN.FORGOT_PASSWORD_COLOR,
    },
    restorePassword: {
      fontWeight: '500',
      fontSize: 20,
      color: theme.SIGNIN_SCREEN.RESTORE_PASSWORD_COLOR,
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 257,
      height: 60,
      borderWidth: 1,
      borderRadius: 7,
      borderColor: theme.SIGNIN_SCREEN.BUTTON_BORDER_COLOR,
    },
    buttonText: {
      fontWeight: '300',
      fontSize: 20,
    },
    loginButtonText: {
      color: theme.SIGNIN_SCREEN.LOGIN_BUTTON_TEXT_COLOR,
    },
    signupButton: {
      backgroundColor: theme.SIGNIN_SCREEN.SIGNUP_BUTTON_BACKGROUND_COLOR,
    },
    socialMediaContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 115,
      marginBottom: 40,
    },
    socialMediaButton: {
      borderWidth: 1,
      borderRadius: 7,
      paddingVertical: 5,
      paddingLeft: 30,
      paddingRight: 10,
    },
  });
