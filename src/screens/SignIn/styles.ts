import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    signinContainer: {
      flex: 1,
      backgroundColor: theme.DEFAULT.PRIMARY_BACKGROUND_COLOR,
      justifyContent: 'center',
      alignItems: 'center',
    },
    signinSubcontainer: {
      width: '80%',
      backgroundColor: theme.DEFAULT.SECONDARY_BACKGROUND_COLOR,
      borderRadius: 7,
      marginHorizontal: 16,
    },
    signinInputContainer: {
      paddingHorizontal: 24,
      paddingBottom: 20,
    },
    forgotPasswordContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 30,
    },
    forgotPassword: {
      fontWeight: '200',
      fontSize: 13,
      lineHeight: 16,
      color: theme.SIGNIN_SCREEN.FORGOT_PASSWORD_COLOR,
    },
    restorePassword: {
      fontWeight: 'normal',
      fontSize: 13,
      lineHeight: 16,
      color: theme.SIGNIN_SCREEN.RESTORE_PASSWORD_COLOR,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    loginButtonContainer: {
      flex: 1,
    },
    loginButtonText: {
      color: theme.SIGNIN_SCREEN.LOGIN_BUTTON_TEXT_COLOR,
    },
    signUpButtonText: {},
    signUpButtonContainer: {
      flex: 1,
      backgroundColor: theme.SIGNIN_SCREEN.SIGNUP_BUTTON_BACKGROUND_COLOR,
    },
    socialMediaContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      paddingHorizontal: 24,
      marginVertical: 32,
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
    inputContainer: {},
  });
