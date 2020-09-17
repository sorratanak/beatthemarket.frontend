import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flexShrink: 1,
      alignSelf: 'flex-start',
      paddingHorizontal: 27,
      paddingTop: 20,
      backgroundColor: theme.DEFAULT.SECONDARY_BACKGROUND_COLOR,
    },
    profileInfoContainer: {
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(126, 126, 126, 0.5);',
      paddingHorizontal: 30,
    },
    username: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontWeight: '500',
      fontSize: 30,
      lineHeight: 37,
      marginBottom: 20,
      marginHorizontal: 60,
      width: 170,
    },
    userInfoContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'rgba(200, 213, 246, 0.5)',
      borderRadius: 7,
      marginBottom: 30,
    },
    userLvlContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 70,
      height: 70,
      backgroundColor: theme.GAME_SCREEN.USER_LVL_CONTAINER_BACKGROUND_COLOR,
      borderRadius: 100,
      marginVertical: 15,
    },
    userLvl: {
      fontSize: 15,
      lineHeight: 18,
    },
    scoreContainer: { alignItems: 'flex-end' },
    totalScore: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontSize: 20,
      lineHeight: 20,
    },
    scorePlus: {
      color: theme.GAME_SCREEN.USER_SCORE_PLUS_COLOR,
      fontSize: 13,
      lineHeight: 12,
    },
    scoreMinus: {
      color: theme.GAME_SCREEN.USER_SCORE_MINUS_COLOR,
      fontSize: 13,
      lineHeight: 12,
    },
    timerContainer: { marginBottom: 30 },
    statisticContainer: { marginBottom: 25 },
    statisticItemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 5,
    },
    statisticItemText: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontWeight: '300',
      fontSize: 15,
      lineHeight: 18,
    },
    expandedStockListContainer: {
      flexShrink: 1,
    },
    mb20: {
      marginBottom: 20,
    },
  });
