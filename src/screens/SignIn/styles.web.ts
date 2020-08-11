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
      backgroundColor: theme.SIGNIN_SCREEN.BACKGROUND_TEXT_INPUT,
      width: 270,
      height: 50,
      paddingLeft: 30,
      marginBottom: 30,
      borderWidth: theme === LIGHT_THEME ? 1 : 0,
      borderRadius: 7,
      borderColor: 'rgba(126, 126, 126, 0.2)',
    },
    forgotPasswordContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 20,
    },
    restorePassword: {
      color: 'red',
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    loginButton: {
      borderWidth: 1,
      borderRadius: 7,
      paddingVertical: 15,
      paddingHorizontal: 25,
    },
    signupButton: {
      borderWidth: 1,
      borderRadius: 7,
      paddingVertical: 15,
      paddingHorizontal: 25,
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
