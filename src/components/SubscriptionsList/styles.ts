import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    tileContainer: {
      paddingVertical: 0,
      overflow: 'hidden',
    },
    itemContainer: {
      paddingVertical: 16,
    },
    activeItemContainer: {
      backgroundColor: theme.SUBSCRIPTIONS_SCREEN.ACTIVE_SUBSCRIPTION_PLAN,
    },
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
