import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 0,
      flexGrow: 0,
    },
    contentContainer: {
      paddingHorizontal: 16,
    },
    listItemContainer: {
      backgroundColor: theme.DEFAULT.SECONDARY_BACKGROUND_COLOR,
      borderRadius: 20,
      paddingHorizontal: 8,
      paddingVertical: 3,
      marginRight: 8,
      flexDirection: 'row',
    },
    activeListItemContainer: {
      backgroundColor: theme.GAME_SCREEN.LIST_VIEW_ACTIVE_COLOR,
    },
    listItemTitle: {
      color: theme.DEFAULT.TEXT_COLOR,
    },
    listItemShares: {
      fontSize: 24,
      color: theme.DEFAULT.TEXT_COLOR,
    },
  });
