import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';
import { COMMON_STYLES } from '../../themes/commonStyles';
import { COLORS } from '../../themes/colors';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },

    /* Chart area */
    chartArea: {
      flex: 3,
      marginVertical: 20,
      width: '97%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.DEFAULT.SECONDARY_BACKGROUND_COLOR,
      borderRadius: 8,
      overflow: 'hidden',
    },

    /* Chart header */
    chartHeaderContainer: {
      flex: 1,
      width: '100%',
      paddingHorizontal: 30,
      paddingVertical: 16,
      flexDirection: 'row',
    },
    chartHeaderSubcontainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    chartHeaderImageContainer: {
      width: 110,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.WHITE,
      borderRadius: 10,
      ...COMMON_STYLES.SHADOW_BOX,
    },
    chartHeaderTitle: {
      fontWeight: '500',
      fontSize: 40,
      lineHeight: 35,
      color: theme.DEFAULT.TEXT_COLOR,
      marginLeft: 29,
    },
    chartHeaderTitleAbbr: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontSize: 26,
      lineHeight: 35,
      marginLeft: 10,
    },
    chartHeaderStockProfitLoss: {
      color: theme.DEFAULT.TEXT_COLOR,
      lineHeight: 28,
      fontSize: 20,
      fontWeight: '500',
    },
    chartHeaderCashBalance: {
      color: theme.DEFAULT.TEXT_COLOR,
      lineHeight: 20,
      fontSize: 14,
    },
    chartHeaderStockChangePositivePercent: {
      color: theme.GAME_SCREEN.NUMBER_INDICATOR_UP,
      marginLeft: 19,
    },
    chartHeaderStockChangeNegativePercent: {
      color: theme.GAME_SCREEN.NUMBER_INDICATOR_DOWN,
      marginLeft: 19,
    },
    userBalanceContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    expandedStocksContainer: {},
    expandedStocksSubcontainer: {},

    /* Chart */
    chartContainer: {
      flex: 7,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100hv',
    },

    /* Footer */
    infoArea: {
      flex: 1,
      width: '100%',
    },
    chartFooterContainer: {
      flex: 1,
      paddingHorizontal: 20,
      flexDirection: 'row',
      width: '100%',
    },
    chartFooterCell: {
      alignItems: 'center',
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      flex: 1,
    },
    chartFooterSliderButtonContainer: {
      width: 40,
      height: 30,
      borderRadius: 10,
      backgroundColor: theme.DEFAULT.SECONDARY_BACKGROUND_COLOR,
      justifyContent: 'center',
      alignItems: 'center',
    },
    chartFooterSliderButtonTitle: {
      fontSize: 20,
      color: theme.DEFAULT.TEXT_COLOR,
    },
    chartFooterSliderContainer: {
      flex: 1,
    },
    chartFooterButtonContainer: {
      flex: 1,
      paddingVertical: 16,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 20,
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
  });
