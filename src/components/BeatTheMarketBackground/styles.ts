import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';
import { LIGHT_THEME } from '../../themes';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.SIGNIN_SCREEN.BACKGROUND_COLOR,
    },
    backgroundImage: {
      opacity: theme === LIGHT_THEME ? 0.5 : 1,
      height: 930,
      width: 1300,
    },
  });
