import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';
import { COMMON_STYLES } from '../../themes/commonStyles';

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
      backgroundColor: theme.GAME_SCREEN.VIEW_COLOR,
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
    chartHeaderStockChangeValue: {
      color: theme.GAME_SCREEN.TEXT_COLOR,
      lineHeight: 28,
      fontSize: 20,
      fontWeight: '500',
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
  });
