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
    },
    chartHeaderImageContainer: {
      width: 110,
      height: '100hv',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.GAME_SCREEN.VIEW_COLOR,
      borderRadius: 10,
      ...COMMON_STYLES.SHADOW_BOX,
    },
    chartHeaderTitle: {
      color: theme.GAME_SCREEN.TEXT_COLOR,
    },
    chartHeaderTitleAbbr: {
      color: theme.GAME_SCREEN.TEXT_COLOR,
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
      backgroundColor: 'yellow',
      width: '100%',
    },
  });
