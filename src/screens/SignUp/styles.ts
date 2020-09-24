import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.DEFAULT.PRIMARY_BACKGROUND_COLOR,
      justifyContent: 'center',
      alignItems: 'center',
    },
    subcontainer: {
      width: '90%',
      paddingTop: 16,
      backgroundColor: theme.DEFAULT.SECONDARY_BACKGROUND_COLOR,
      borderRadius: 7,
      marginHorizontal: 16,
    },
    inputsContainer: {
      paddingHorizontal: 24,
      paddingBottom: 20,
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
      backgroundColor: theme.SIGNIN_SCREEN.SIGNUP_BUTTON_BACKGROUND_COLOR,
    },

    inputContainer: {},
  });
