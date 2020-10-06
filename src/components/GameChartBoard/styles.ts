import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';
import { COLORS } from '../../themes/colors';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
    },

    /* Chart area */
    chartArea: {
      width: '100%',
      flex: 1,
    },

    /* Chart header */
    chartHeaderContainer: {
      marginVertical: 10,
      marginHorizontal: 16,
      paddingHorizontal: 16,
      paddingVertical: 9,
      borderRadius: 7,
      flexDirection: 'row',
      backgroundColor: theme.DEFAULT.SECONDARY_BACKGROUND_COLOR,
    },
    chartHeaderSubcontainer: {
      flex: 1,
      justifyContent: 'center',
    },
    chartHeaderTitleAbbr: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontSize: 26,
      marginRight: 16,
      justifyContent: 'center',
      textAlign: 'center',
    },
    chartHeaderStockProfitLoss: {
      color: theme.DEFAULT.TEXT_COLOR,
    },
    chartHeaderCashBalance: {
      color: theme.DEFAULT.TEXT_COLOR,
    },
    chartHeaderStockChangePositivePercent: {
      color: theme.GAME_SCREEN.NUMBER_INDICATOR_UP,
    },
    chartHeaderStockChangeNegativePercent: {
      color: theme.GAME_SCREEN.NUMBER_INDICATOR_DOWN,
    },
    userBalanceContainer: {},
    expandedStocksContainer: {
      margin: 0,
      justifyContent: 'flex-end',
    },
    expandedStocksSubcontainer: {
      height: '75%',
      paddingHorizontal: 16,
      backgroundColor: theme.DEFAULT.PRIMARY_BACKGROUND_COLOR,
    },
    cashBoost10xContainer: {},

    /* Chart */
    chartContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    chartView: {
      backgroundColor: theme.DEFAULT.SECONDARY_BACKGROUND_COLOR,
    },

    /* Footer */
    infoArea: {
      maxHeight: 150,
      flex: 1,
      backgroundColor: theme.DEFAULT.SECONDARY_BACKGROUND_COLOR,
      marginHorizontal: 16,
      marginVertical: 8,
      borderRadius: 7,
    },
    chartFooterContainer: {
      flex: 1,
    },
    chartFooterCell: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    chartFooterSliderButtonContainer: {
      paddingHorizontal: 12,
      borderRadius: 10,
      backgroundColor: theme.DEFAULT.PRIMARY_BACKGROUND_COLOR,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    chartFooterSliderButtonTitle: {
      fontSize: 25,
      color: theme.DEFAULT.TEXT_COLOR,
    },
    chartFooterSliderArea: {
      flex: 1,
      padding: 16,
    },
    chartFooterSliderContainer: {
      flex: 1,
    },
    chartFooterButtonContainer: {
      flex: 1,
      marginHorizontal: 8,
      paddingVertical: 13,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
    },
    chartFooterButtonRise: {
      backgroundColor: theme.GAME_SCREEN.BUTTON_UP_COLOR,
    },
    chartFooterButtonFall: {
      backgroundColor: theme.GAME_SCREEN.BUTTON_DOWN_COLOR,
    },
    chartFooterButtonText: {
      color: COLORS.WHITE,
    },
    chartFooterSharesTitle: {
      textAlign: 'center',
      marginBottom: 9,
      color: theme.DEFAULT.TEXT_COLOR,
    },
    ml16: {
      marginLeft: 16,
    },
    mr16: {
      marginRight: 16,
    },
  });
