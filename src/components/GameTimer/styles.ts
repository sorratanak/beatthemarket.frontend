import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    timerContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    numberCellContainer: {
      borderRadius: 2,
      width: 16,
      height: 20,
      paddingTop: 2,
      marginRight: 2,
      backgroundColor: theme.GAME_SCREEN.HEADER_TIMER_CELL_COLOR,
      justifyContent: 'center',
      alignItems: 'center',
    },
    numberCellValue: {
      fontSize: 15,
      lineHeight: 15,
    },
    colonValue: {
      fontWeight: 'bold',
      color: theme.GAME_SCREEN.HEADER_TIMER_COLON_COLOR,
      fontSize: 15,
      lineHeight: 15,
      marginRight: 2,
    },
  });
