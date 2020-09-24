import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {},
    subcontainer: {
      backgroundColor: theme.DEFAULT.PRIMARY_BACKGROUND_COLOR,
      borderRadius: 7,
      width: 800,
    },
    inputsContainer: {
      paddingHorizontal: 140,
      paddingBottom: 40,
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    signUpButtonText: {
      fontSize: 20,
    },
    signUpButtonContainer: {
      flex: 1,
      height: 40,
      backgroundColor: theme.SIGNIN_SCREEN.SIGNUP_BUTTON_BACKGROUND_COLOR,
    },

    inputContainer: {
      paddingLeft: 16,
      paddingVertical: 8,
      fontSize: 18,
      marginBottom: 16,
    },
  });
