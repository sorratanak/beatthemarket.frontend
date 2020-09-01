import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: theme.DEFAULT.SECONDARY_BACKGROUND_COLOR,
      paddingHorizontal: 16,
      paddingVertical: 6,
    },
    title: {
      fontSize: 17,
      lineHeight: 22,
      letterSpacing: -0.41,
      color: theme.DEFAULT.TEXT_COLOR,
    },
  });
