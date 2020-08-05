import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';
import { COLORS } from '../../themes/colors';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.MENU.BACKGROUND_COLOR,
      shadowOpacity: 0.15,
      shadowRadius: 10,
      shadowColor: COLORS.GRAY,
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
