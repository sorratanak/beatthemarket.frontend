import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    tileContainer: {
      // flex: 1,
      paddingVertical: 0,
      // alignItems: 'center',
      // borderRadius: 7,
      // marginVertical: 8,
      // marginHorizontal: 8,
    },
    itemContainer: {
      paddingVertical: 16,
    },
    activeItemContainer: {},
    itemPriceText: {},
    itemBalanceText: {},
  });
