import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    signinContainer: {},
    signinSubcontainer: {},
    signinInputContainer: {},
    textInputStyle: {},
    forgotPasswordContainer: {},
    forgotPassword: {},
    restorePassword: {},
    buttonContainer: {},
    button: {},
    buttonText: {},
    loginButtonText: {},
    signupButton: {},
    socialMediaContainer: {},
    socialMediaButton: {},
  });
