import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';
import { COLORS } from '../../themes/colors';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    flexContainer: {
      flex: 1,
    },
    flex2Container: {
      flex: 2,
    },
    flex3Container: {
      flex: 3,
    },
    listContentContainer: {
      padding: 20,
    },
    listItemContainer: {
      flex: 1,
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      marginTop: 20,
    },
    rowContainer: {
      flexDirection: 'row',
      width: '100%',
    },
    rankContainer: {
      width: 30,
      height: 30,
      borderRadius: 15,
      backgroundColor: COLORS.MOON_RAKER,
      alignSelf: 'center',
      justifyContent: 'center',
    },
    rankText: {
      fontSize: 14,
      textAlign: 'center',
      color: theme.HOME_SCREEN.SCORE_LIST_ITEM_RANK_COLOR,
    },
    title: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    text: {
      color: theme.HOME_SCREEN.SCORE_LIST_ITEM_TEXT_COLOR,
      fontSize: 14,
      textAlign: 'center',
    },
  });
