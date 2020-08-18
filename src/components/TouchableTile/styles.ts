import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 31,
      alignItems: 'center',
      backgroundColor: theme.DEFAULT.SECONDARY_BACKGROUND_COLOR,
      borderRadius: 7,
      marginVertical: 8,
      marginHorizontal: 8,
    },
  });
