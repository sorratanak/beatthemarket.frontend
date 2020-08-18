import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';
import { LIGHT_THEME } from '../../themes';
import { COMMON_STYLES } from '../../themes/commonStyles';

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
      paddingVertical: 40,
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
    socialMediaContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 115,
      marginBottom: 40,
    },
    socialMediaButton: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      overflow: 'hidden',
      borderRadius: 7,
      height: 40,
    },
    socialButtonTextContainer: {
      flex: 1,
      alignItems: 'center',
    },
    socialMediaButtonText: {
      fontSize: 15,
      fontWeight: '500',
      color: theme.SIGNIN_SCREEN.SOCIAL_MEDIA_BUTTON_TEXT_COLOR,
    },
    socialMediaIconContainer: {
      display: 'flex',
      justifyContent: 'center',
      borderRadius: 7,
      height: 40,
      paddingHorizontal: 10,
      ...COMMON_STYLES.SHADOW_BOX,
    },
    socialMediaIcon: {
      width: 30,
      height: 30,
    },
    googleButtonContainer: {
      flex: 1,
      marginRight: 20,
      backgroundColor: theme.SIGNIN_SCREEN.GOOGLE_BUTTON_CONTAINER_COLOR,
    },
    googleIconContainer: {
      backgroundColor: theme.SIGNIN_SCREEN.GOOGLE_ICON_CONTAINER_COLOR,
    },
    facebookButtonContainer: {
      flex: 1,
      marginRight: 20,
      backgroundColor: theme.SIGNIN_SCREEN.FACEBOOK_BUTTON_CONTAINER_COLOR,
    },
    facebookIconContainer: {
      backgroundColor: theme.SIGNIN_SCREEN.FACEBOOK_ICON_CONTAINER_COLOR,
    },
    appleButtonContainer: {
      flex: 1.5,
      backgroundColor: theme.SIGNIN_SCREEN.APPLE_BUTTON_CONTAINER_COLOR,
      borderWidth: theme === LIGHT_THEME ? 1 : 0,
    },
    appleButtonText: {
      fontSize: 15,
      fontWeight: '500',
      color: theme.SIGNIN_SCREEN.APPLE_BUTTON_TEXT_COLOR,
    },
  });
