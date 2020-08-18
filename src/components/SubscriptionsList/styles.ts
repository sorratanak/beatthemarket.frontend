import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';
import { COLORS } from '../../themes/colors';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    tileContainer: {
      // flex: 1,
      paddingVertical: undefined,
      // alignItems: 'center',
      // borderRadius: 7,
      // marginVertical: 8,
      // marginHorizontal: 8,
    },
    itemContainer: {},
    activeItemContainer: {},
    itemPriceText: {
      fontSize: 15,
      lineHeight: 18,
      color: theme.DEFAULT.TEXT_COLOR,
      textAlign: 'center',
      marginBottom: 22,
    },
    itemBalanceText: {
      fontSize: 11,
      lineHeight: 13,
      textAlign: 'center',
      color: theme.DEFAULT.TEXT_COLOR,
    },
  });
