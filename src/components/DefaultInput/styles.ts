import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';
import { LIGHT_THEME } from '../../themes';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    textInput: {
      backgroundColor: theme.SIGNIN_SCREEN.TEXT_INPUT_BACKGROUND,
      color: theme.SIGNIN_SCREEN.TEXT_INPUT_COLOR,
      fontSize: 12,
      lineHeight: 14,
      fontWeight: '200',
      width: '100%',
      paddingVertical: 15,
      borderWidth: theme === LIGHT_THEME ? 1 : 0,
      borderRadius: 7,
      borderColor: 'rgba(126, 126, 126, 0.2)',
      paddingLeft: 15,
      marginBottom: 15,
    },
  });
