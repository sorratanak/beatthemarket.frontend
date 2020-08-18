import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.DEFAULT.PRIMARY_BACKGROUND_COLOR,
    },
    title: {
      textAlign: 'center',
      fontSize: 28,
      color: theme.DEFAULT.TEXT_COLOR,
      marginVertical: 90,
    },
    tileImage: {
      width: 50,
      height: 50,
    },
  });
