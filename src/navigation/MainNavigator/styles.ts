import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.DEFAULT.PRIMARY_BACKGROUND_COLOR,
    },
    flexContainer: {},
    pauseButtonContainer: {},
    pauseButtonImage: {},
  });
