import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    tileContainer: {
      paddingVertical: 0,
      overflow: 'hidden',
    },
    itemContainer: {
      paddingTop: 12,
      paddingBottom: 44,
    },
    activeItemContainer: {
      backgroundColor:
        theme.SUBSCRIPTIONS_SCREEN.ACTIVE_SUBSCRIPTION_PLAN_COLOR,
    },
    itemPriceText: {
      fontSize: 30,
      lineHeight: 36,
      color: theme.DEFAULT.TEXT_COLOR,
      textAlign: 'center',
      marginBottom: 22,
    },
    itemBalanceText: {
      fontSize: 15,
      lineHeight: 18,
      fontWeight: '300',
      textAlign: 'center',
      paddingHorizontal: '25%',
      color: theme.DEFAULT.TEXT_COLOR,
    },
  });
