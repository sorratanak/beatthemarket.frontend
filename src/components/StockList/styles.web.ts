import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';
import { COLORS } from '../../themes/colors';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {},
    contentContainer: {
      paddingHorizontal: 10,
      paddingVertical: 20,
    },
    listItemContainer: {
      backgroundColor: COLORS.GRAY,
      height: 125,
      width: 250,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
    },
    activeListItemContainer: {
      backgroundColor: COLORS.WHITE,
    },
    listItemTitle: {},
  });
