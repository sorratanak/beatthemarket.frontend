import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';
import { COLORS } from '../../themes/colors';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {},
    contentContainer: {
      paddingVertical: 16,
    },
    hugeFlexContainer: {
      flex: 3,
      flexDirection: 'row',
    },
    listItemContainer: {
      backgroundColor: theme.DEFAULT.SECONDARY_BACKGROUND_COLOR,
      borderRadius: 10,
      paddingHorizontal: 8,
      paddingVertical: 3,
      marginTop: 8,
    },
    activeListItemContainer: {
      backgroundColor: theme.GAME_SCREEN.LIST_VIEW_ACTIVE_COLOR,
    },
    listItemTitle: {
      flex: 1,
      color: theme.DEFAULT.TEXT_COLOR,
      fontSize: 10,
      lineHeight: 13,
    },
    rowContainer: {
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      paddingVertical: 9,
    },
    listItemStockChangeContainer: {
      borderRadius: 100,
      paddingHorizontal: 10,
      paddingVertical: 3,
    },
    listItemStockChangeDifference: {
      color: COLORS.BLACK,
      fontSize: 12,
      lineHeight: 13,
    },
    listItemStockAgoTime: {},
    listItemDifferenceLine: {},
    positiveDifferenceLine: {
      marginRight: 14,
      color: theme.GAME_SCREEN.POSITIVE_DIFFERENCE_LINE_COLOR,
    },
    negativeDifferenceLine: {
      marginRight: 8,
      color: theme.GAME_SCREEN.NEGATIVE_DIFFERENCE_LINE_COLOR,
    },
    positiveStockChange: {
      backgroundColor: theme.GAME_SCREEN.POSITIVE_STOCK_CHANGE_BACKGROUND_COLOR,
    },
    negativeStockChange: {
      backgroundColor: theme.GAME_SCREEN.NEGATIVE_STOCK_CHANGE_BACKGROUND_COLOR,
    },
  });
