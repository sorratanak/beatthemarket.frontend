import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.DEFAULT.PRIMARY_BACKGROUND_COLOR,
      paddingHorizontal: 16,
    },
    title: {
      fontSize: 34,
      lineHeight: 41,
      letterSpacing: 0.41,
      fontWeight: 'bold',
      color: theme.DEFAULT.TEXT_COLOR,
      marginVertical: 46,
    },
  });
