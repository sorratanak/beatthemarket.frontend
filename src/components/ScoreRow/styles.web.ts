import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingVertical: 20,
      backgroundColor: theme.HOME_SCREEN.SECONDARY_BACKGROUND_COLOR,
      borderRadius: 14,
      paddingHorizontal: 20,
    },
    scoreLabelContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    valueContainer: {
      borderRadius: 7,
      marginLeft: 20,
      paddingHorizontal: 10,
      paddingVertical: 8,
      backgroundColor: theme.HOME_SCREEN.SCORE_ROW_ITEM_BACKGROUND_COLOR,
    },
    title: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: 22,
    },
    percentContainer: {
      justifyContent: 'center',
    },
    percentLabel: {
      fontSize: 16,
      textAlign: 'center',
      color: theme.HOME_SCREEN.SCORE_ROW_PERCENT_COLOR,
    },
    label: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontSize: 15,
      lineHeight: 18,
    },
  });
