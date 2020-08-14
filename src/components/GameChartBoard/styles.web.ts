import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';
import { COMMON_STYLES } from '../../themes/commonStyles';
import { COLORS } from '../../themes/colors';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
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
      backgroundColor: theme.GAME_SCREEN.VIEW_COLOR,
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
      color: theme.GAME_SCREEN.TEXT_COLOR,
      marginLeft: 29,
    },
    chartHeaderTitleAbbr: {
      color: theme.GAME_SCREEN.TEXT_COLOR,
      fontSize: 26,
      lineHeight: 35,
      marginLeft: 10,
    },
    chartHeaderStockProfitLoss: {
      color: theme.GAME_SCREEN.TEXT_COLOR,
      lineHeight: 28,
      fontSize: 20,
      fontWeight: '500',
    },
    chartHeaderCashBalance: {
      color: theme.GAME_SCREEN.TEXT_COLOR,
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
      backgroundColor: theme.GAME_SCREEN.VIEW_COLOR,
      justifyContent: 'center',
      alignItems: 'center',
    },
    chartFooterSliderButtonTitle: {
      fontSize: 20,
      color: theme.GAME_SCREEN.TEXT_COLOR,
    },
    chartFooterSliderContainer: {
      flex: 0,
      flexGrow: 0,
      width: 300,
      height: 20,
    },
    chartFooterButtonContainer: {
      width: 257,
      paddingVertical: 16,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
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
      color: theme.GAME_SCREEN.TEXT_COLOR,
    },
  });
