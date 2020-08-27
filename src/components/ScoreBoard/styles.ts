import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 0,
    },
    tabsRow: {
      flexDirection: 'row',
      width: '100%',
    },
    tabContainer: {
      flex: 1,
      borderTopLeftRadius: 14,
      borderTopRightRadius: 14,
      padding: 20,
    },
    tabActiveContainer: {
      backgroundColor: theme.DEFAULT.SECONDARY_BACKGROUND_COLOR,
    },
    tabTitle: {
      color: theme.DEFAULT.TEXT_COLOR,
      textAlign: 'center',
      fontSize: 18,
    },
  });
