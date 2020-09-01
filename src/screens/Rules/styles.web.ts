import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';
import { COMMON_STYLES } from '../../themes/commonStyles';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.DEFAULT.PRIMARY_BACKGROUND_COLOR,
    },
    title: {
      ...COMMON_STYLES.SCREEN_TITLE(theme),
    },
  });
