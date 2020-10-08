import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';
import { COMMON_STYLES } from '../../themes/commonStyles';
import { COLORS } from '../../themes/colors';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      marginBottom: 16,
    },
    title: {
      color: theme.DEFAULT.TEXT_COLOR,
      marginBottom: 16,
      marginHorizontal: 16,
    },

    /* Offer item */
    offerListContentContainer: {},
    offerItemContainer: {
      marginHorizontal: 8,
      padding: 8,
      borderRadius: 7,
      borderWidth: 1,
      borderColor: COLORS.GRAY,
      backgroundColor: theme.DEFAULT.PRIMARY_BACKGROUND_COLOR,
      ...COMMON_STYLES.SHADOW_BOX,
    },
    offerItemTitle: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontSize: 16,
      lineHeight: 20,
    },
  });

export const MODAL_CONTAINER_STYLE: any = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
