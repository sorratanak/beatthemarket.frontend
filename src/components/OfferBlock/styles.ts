import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';
import { COMMON_STYLES } from '../../themes/commonStyles';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {},
    title: {
      color: theme.DEFAULT.TEXT_COLOR,
      marginBottom: 16,
    },

    /* Offer item */
    offerListContentContainer: {
      paddingVertical: 16,
    },
    offerItemContainer: {
      marginHorizontal: 8,
      padding: 16,
      backgroundColor: theme.DEFAULT.PRIMARY_BACKGROUND_COLOR,
      ...COMMON_STYLES.SHADOW_BOX,
    },
    offerItemTitle: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontSize: 16,
      lineHeight: 20,
    },
  });
