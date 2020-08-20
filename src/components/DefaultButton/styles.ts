import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 11,
      borderWidth: 1,
      borderRadius: 7,
      borderColor: theme.SIGNIN_SCREEN.BUTTON_BORDER_COLOR,
    },
    buttonText: {
      fontSize: 17,
      lineHeight: 20,
    },
  });
