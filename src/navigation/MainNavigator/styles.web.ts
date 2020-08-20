import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';
import { COMMON_STYLES } from '../../themes/commonStyles';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.DEFAULT.SECONDARY_BACKGROUND_COLOR,
      borderRightWidth: undefined,
      ...COMMON_STYLES.SHADOW_BOX,
    },
    title: {
      textAlign: 'center',
      fontSize: 28,
      color: theme.MENU.TITLE_COLOR,
      marginVertical: 90,
    },
    itemContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    itemLabel: {
      fontSize: 20,
    },
  });
