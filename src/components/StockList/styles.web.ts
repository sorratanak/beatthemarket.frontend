import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';
import { COLORS } from '../../themes/colors';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {},
    contentContainer: {},
    listItemContainer: {
      backgroundColor: COLORS.GRAY,
      height: 200,
      width: 200,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    listItemTitle: {},
  });
