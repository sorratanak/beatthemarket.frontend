import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';
import { COLORS } from '../../themes/colors';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 24,
      marginVertical: 50,
      paddingVertical: 10,
      backgroundColor: theme.DEFAULT.PRIMARY_BACKGROUND_COLOR,
    },
    subContainer: {},
    titleContainer: {
      paddingHorizontal: 16,
      marginBottom: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 26,
      lineHeight: 31,
      color: theme.DEFAULT.TEXT_COLOR,
    },
    titleIcon: {
      width: 50,
      height: 50,
    },
    contentContainer: {
      padding: 16,
      backgroundColor: theme.DEFAULT.SECONDARY_BACKGROUND_COLOR,
    },
    rankInfo: {},
    resultInfo: {},
    subTitle: {
      fontSize: 22,
      lineHeight: 26,
      color: theme.DEFAULT.TEXT_COLOR,
    },
    scoreBoardContainer: {},
    userInfoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 16,
      borderBottomWidth: 0.5,
      borderBottomColor: 'rgba(126, 126, 126, 0.5)',
    },
    userLvlContainer: {
      backgroundColor: theme.END_GAME_MODAL.USER_LVL_TEXT_BACKGROUND,
      borderRadius: 10,
      paddingHorizontal: 19,
      paddingVertical: 4,
      marginRight: 16,
    },
    userLvl: {},
    loseMessage: {},
    hidden: {},
    profitsContainer: {
      marginTop: 16,
      paddingBottom: 16,
    },
    profitsTitle: {
      fontSize: 15,
      lineHeight: 18,
      color: theme.DEFAULT.TEXT_COLOR,
      marginBottom: 10,
    },
    profitItem: {
      fontSize: 12,
      lineHeight: 14,
      color: theme.DEFAULT.TEXT_COLOR,
      fontWeight: '200',
    },
    footerContainer: {
      flex: 1,
      justifyContent: 'space-between',
      marginHorizontal: 16,
    },
    balanceText: {
      marginTop: 25,
      color: theme.DEFAULT.TEXT_COLOR,
      fontSize: 20,
      lineHeight: 24,
    },
    buttonContainer: {
      backgroundColor: theme.END_GAME_MODAL.FINISH_BUTTON_BACKGROUND,
      marginTop: 24,
      marginHorizontal: 40,
    },
  });
