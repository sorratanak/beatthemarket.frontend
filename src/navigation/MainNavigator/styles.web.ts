import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';
import { COLORS } from '../../themes/colors';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.MENU.BACKGROUND_COLOR,
      borderRightWidth: undefined,
      shadowOpacity: 0.1,
      shadowRadius: 15,
      shadowColor: COLORS.BLACK,
      shadowOffset: { height: 0, width: 0 },
    },
    title: {
      textAlign: 'center',
      fontSize: 28,
      color: theme.MENU.TITLE_COLOR,
      marginVertical: 90,
    },
    itemContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    itemLabel: {
      fontSize: 20,
    },
  });
