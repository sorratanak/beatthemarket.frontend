import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    signinContainer: {},
    signinSubcontainer: {},
    signinInputContainer: {},
    forgotPasswordContainer: {},
    forgotPassword: {},
    restorePassword: {},
    buttonContainer: {},
    socialMediaContainer: {},
    socialMediaButton: {},
    socialMediaButtonText: {},
    socialMediaIconContainer: {},
    socialMediaIcon: {},
    googleButtonContainer: {},
    googleIconContainer: {},
    facebookButtonContainer: {},
    facebookIconContainer: {},
    appleButtonContainer: {},
    appleButtonText: {},
  });
