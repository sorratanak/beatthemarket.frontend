import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';
import { COMMON_STYLES } from '../../themes/commonStyles';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.DEFAULT.SECONDARY_BACKGROUND_COLOR,
      borderRadius: 50,
      padding: 16,
      marginHorizontal: 8,
      ...COMMON_STYLES.SHADOW_BOX,
    },
    image: {
      width: 32,
      height: 32,
    },
  });
