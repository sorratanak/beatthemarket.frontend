import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';
import { LIGHT_THEME } from '../../themes';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 16,
      paddingRight: 8,
      borderBottomWidth: 2,
      paddingBottom: 3,
      borderBottomColor:
        theme === LIGHT_THEME
          ? 'rgba(185,185,185,0.1)'
          : 'rgba(255, 255, 255, 0.1)',
    },
    cellContainer: {
      flex: 1,
    },
    username: {
      color: theme.GAME_SCREEN.HEADER_USERNAME_COLOR,
      fontSize: 14,
    },
  });
