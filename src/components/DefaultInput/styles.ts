import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';
import { LIGHT_THEME } from '../../themes';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    textInputStyle: {
      backgroundColor: theme.SIGNIN_SCREEN.TEXT_INPUT_BACKGROUND,
      color: theme.SIGNIN_SCREEN.TEXT_INPUT_COLOR,
      fontSize: 20,
      fontWeight: '300',
      width: 535,
      height: 70,
      borderWidth: theme === LIGHT_THEME ? 1 : 0,
      borderRadius: 7,
      borderColor: 'rgba(126, 126, 126, 0.2)',
      paddingLeft: 30,
      marginBottom: 30,
    },
  });
