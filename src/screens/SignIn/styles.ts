import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';
import { LIGHT_THEME } from '../../themes';
import { COMMON_STYLES } from '../../themes/commonStyles';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    signinContainer: {},
    signinSubcontainer: {
      backgroundColor: theme.SIGNIN_SCREEN.BACKGROUND_COLOR,
      borderRadius: 7,
      marginHorizontal: 16,
    },
    signinInputContainer: {
      paddingHorizontal: 24,
      paddingTop: 35,
      paddingBottom: 20,
    },
    forgotPasswordContainer: {
      flex: 1,
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
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    socialMediaContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      paddingHorizontal: 24,
      marginBottom: 32,
    },
    socialMediaButton: {
      flexDirection: 'row',
      alignItems: 'center',
      overflow: 'hidden',
      borderRadius: 7,
    },
    socialButtonTextContainer: {
      flex: 1,
      alignItems: 'center',
    },
    socialMediaButtonText: {
      fontSize: 13,
      lineHeight: 16,
      fontWeight: 'normal',
      color: theme.SIGNIN_SCREEN.SOCIAL_MEDIA_BUTTON_TEXT_COLOR,
    },
    socialMediaIconContainer: {
      alignItems: 'center',
      borderRadius: 7,
      paddingVertical: 7,
      paddingHorizontal: 10,
      height: '100%',
      ...COMMON_STYLES.SHADOW_BOX,
    },
    socialMediaIcon: {
      width: 20,
      height: 20,
    },
    googleButtonContainer: {
      width: '47%',
      marginRight: 11,
      backgroundColor: theme.SIGNIN_SCREEN.GOOGLE_BUTTON_CONTAINER_COLOR,
    },
    googleIconContainer: {
      backgroundColor: theme.SIGNIN_SCREEN.GOOGLE_ICON_CONTAINER_COLOR,
    },
    facebookButtonContainer: {
      width: '47%',
      backgroundColor: theme.SIGNIN_SCREEN.FACEBOOK_BUTTON_CONTAINER_COLOR,
    },
    facebookIconContainer: {
      backgroundColor: theme.SIGNIN_SCREEN.FACEBOOK_ICON_CONTAINER_COLOR,
    },
    appleButtonContainer: {
      width: '70%',
      marginTop: 16,
      backgroundColor: theme.SIGNIN_SCREEN.APPLE_BUTTON_CONTAINER_COLOR,
      borderWidth: theme === LIGHT_THEME ? 1 : 0,
    },
    appleButtonText: {
      fontSize: 13,
      lineHeight: 16,
      fontWeight: 'normal',
      color: theme.SIGNIN_SCREEN.APPLE_BUTTON_TEXT_COLOR,
    },
  });
