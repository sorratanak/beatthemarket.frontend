import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    tabsRow: {
      flexDirection: 'row',
      width: '100%',
    },
    tabContainer: {
      flex: 1,
      borderTopLeftRadius: 14,
      borderTopRightRadius: 14,
      borderColor: 'lightgray',
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderTopWidth: 1,
      padding: 20,
    },
    tabActiveContainer: {
      backgroundColor: 'lightgray',
    },
    tabTitle: {
      textAlign: 'center',
      fontSize: 18,
    },
  });
