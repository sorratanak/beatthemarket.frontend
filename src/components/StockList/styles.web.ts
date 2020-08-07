import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';
import { COMMON_STYLES } from '../../themes/commonStyles';

export const getThemedStyles = (theme: ITheme) => {
  return StyleSheet.create({
    container: {},
    contentContainer: {
      paddingHorizontal: 10,
      paddingVertical: 20,
    },
    listItemContainer: {
      backgroundColor: theme.GAME_SCREEN.LIST_VIEW_COLOR,
      height: 125,
      width: 250,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
      ...COMMON_STYLES.SHADOW_BOX,
    },
    activeListItemContainer: {
      backgroundColor: theme.GAME_SCREEN.LIST_VIEW_ACTIVE_COLOR,
    },
    listItemTitle: {},
  });
};
