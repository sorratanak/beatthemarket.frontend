import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';
import { LIGHT_THEME } from '../../themes';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:
        theme === LIGHT_THEME
          ? 'rgba(19, 30, 37, 0.8);'
          : 'rgba(15, 22, 27, 0.9);',
      justifyContent: 'center',
      alignItems: 'center',
    },
    subContainer: {
      width: '90%',
      backgroundColor: theme.DEFAULT.PRIMARY_BACKGROUND_COLOR,
    },
    title: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontWeight: '600',
      fontSize: 50,
      lineHeight: 61,
      marginTop: 50,
      marginBottom: 40,
      paddingHorizontal: 40,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleIcon: {
      width: 60,
      height: 60,
    },
    contentContainer: { flex: 2, flexDirection: 'row', paddingBottom: 55 },
    rankInfo: { flex: 1, marginLeft: '10%' },
    resultInfo: { flex: 1, marginLeft: '10%' },
    subTitle: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontWeight: '600',
      fontSize: 30,
      lineHeight: 37,
      marginBottom: 30,
      marginRight: 55,
    },
    scoreBoardContainer: {
      flex: 1,
      height: 350,
    },
    userInfoContainer: { flexDirection: 'row', alignItems: 'baseline' },
    userLvl: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontSize: 20,
      lineHeight: 24,
      paddingHorizontal: 14,
      paddingVertical: 3,
      backgroundColor: theme.END_GAME_MODAL.USER_LVL_TEXT_BACKGROUND,
      borderRadius: 10,
    },
    loseMessage: {
      fontWeight: '500',
      fontSize: 20,
      lineHeight: 24,
      color: theme.END_GAME_MODAL.LOSE_MESSAGE_COLOR,
      marginBottom: 30,
    },
    profitsContainer: {
      marginBottom: 50,
    },
    profitsTitle: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontWeight: '500',
      fontSize: 20,
      lineHeight: 24,
      marginBottom: 15,
    },
    profitItem: {
      fontWeight: '300',
      fontSize: 15,
      lineHeight: 18,
      marginBottom: 10,
      color: theme.DEFAULT.TEXT_COLOR,
    },
    balanceText: {
      fontSize: 24,
      lineHeight: 29,
      color: theme.DEFAULT.TEXT_COLOR,
      marginBottom: 70,
    },
    buttonContainer: {
      marginHorizontal: 80,
      width: 330,
      backgroundColor: theme.END_GAME_MODAL.FINISH_BUTTON_BACKGROUND,
    },
  });
