import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
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
    buttonTextColor: {
      color: theme.SIGNIN_SCREEN.LOGIN_BUTTON_TEXT_COLOR,
    },
    buttonBg: {
      backgroundColor: theme.SIGNIN_SCREEN.SIGNUP_BUTTON_BACKGROUND_COLOR,
    },
  });
