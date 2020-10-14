import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    signinContainer: {},
    signinSubcontainer: {
      backgroundColor: theme.DEFAULT.PRIMARY_BACKGROUND_COLOR,
      borderRadius: 7,
      width: 800,
    },
    signinInputContainer: {
      paddingHorizontal: 140,
      paddingBottom: 40,
    },
    forgotPasswordContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 20,
    },
    forgotPassword: {
      fontWeight: '300',
      fontSize: 16,
      color: theme.SIGNIN_SCREEN.FORGOT_PASSWORD_COLOR,
    },
    restorePassword: {
      fontWeight: '500',
      fontSize: 16,
      color: theme.SIGNIN_SCREEN.RESTORE_PASSWORD_COLOR,
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    socialMediaContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingHorizontal: 50,
      marginVertical: 40,
    },
    loginButtonContainer: {
      flex: 1,
      marginBottom: 10,
      height: 40,
    },
    loginButtonText: {
      color: theme.SIGNIN_SCREEN.LOGIN_BUTTON_TEXT_COLOR,
      fontSize: 20,
    },
    signUpButtonText: {
      fontSize: 20,
    },
    signUpButtonContainer: {
      flex: 1,
      height: 40,
      backgroundColor: theme.SIGNIN_SCREEN.SIGNUP_BUTTON_BACKGROUND_COLOR,
    },

    googleIcon: {},
    googleIconContainer: {
      backgroundColor: theme.SIGNIN_SCREEN.GOOGLE_ICON_CONTAINER_COLOR,
    },
    appleIcon: {},
    appleIconContainer: {
      backgroundColor: theme.SIGNIN_SCREEN.APPLE_ICON_CONTAINER_COLOR,
    },
    facebookIcon: {},
    facebookIconContainer: {
      backgroundColor: theme.SIGNIN_SCREEN.FACEBOOK_ICON_CONTAINER_COLOR,
    },
    microsoftIcon: {},
    microsoftIconContainer: {
      backgroundColor: theme.SIGNIN_SCREEN.MICROSOFT_ICON_CONTAINER_COLOR,
    },

    inputContainer: {
      paddingLeft: 16,
      paddingVertical: 8,
      fontSize: 18,
      marginBottom: 16,
    },
  });
