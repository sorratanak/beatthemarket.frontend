import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: -10,
      borderRadius: 14,
      backgroundColor: theme.DEFAULT.SECONDARY_BACKGROUND_COLOR,
      overflow: 'hidden',
    },
  });
