import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      paddingTop: 30,
      flexDirection: 'row',
      width: '100%',
      paddingVertical: 20,
      backgroundColor: theme.DEFAULT.SECONDARY_BACKGROUND_COLOR,
      borderRadius: 14,
    },
    scoreLabelContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    title: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center',
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
      fontSize: 16,
      textAlign: 'center',
    },
  });
