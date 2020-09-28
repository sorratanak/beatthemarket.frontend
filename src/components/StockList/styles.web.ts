import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';
import { COMMON_STYLES } from '../../themes/commonStyles';

export const getThemedStyles = (theme: ITheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainer: {
      paddingHorizontal: 10,
      paddingVertical: 20,
      justifyContent: 'space-around',
      flex: 1,
    },
    listItemContainer: {
      width: 200,
      backgroundColor: theme.GAME_SCREEN.LIST_VIEW_COLOR,
      borderRadius: 10,
      paddingHorizontal: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
      ...COMMON_STYLES.SHADOW_BOX,
    },
    activeListItemContainer: {
      backgroundColor: theme.GAME_SCREEN.LIST_VIEW_ACTIVE_COLOR,
    },
    listItemTitle: {
      color: theme.DEFAULT.TEXT_COLOR,
    },
    listItemShares: {
      marginTop: 16,
      fontSize: 24,
      color: theme.DEFAULT.TEXT_COLOR,
    },
  });
};
