import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';

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
      backgroundColor: theme.GAME_SCREEN.VIEW_COLOR,
    },

    /* Chart header */
    chartHeaderContainer: {},
    chartHeaderSubcontainer: {},
    chartHeaderImageContainer: {},
    chartHeaderTitle: {},
    chartHeaderTitleAbbr: {},

    /* Chart */
    chartContainer: {},

    /* Footer */
    infoArea: {},
  });
