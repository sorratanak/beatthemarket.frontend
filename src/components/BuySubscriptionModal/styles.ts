import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '40%',
      height: '70%',
      paddingVertical: '15%',
      paddingHorizontal: '7.5%',
      backgroundColor: theme.DEFAULT.PRIMARY_BACKGROUND_COLOR,
    },
  });
