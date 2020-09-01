import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';
import { COMMON_STYLES } from '../../themes/commonStyles';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.DEFAULT.PRIMARY_BACKGROUND_COLOR,
    },
    switchTitle: {
      textAlign: 'center',
      fontSize: 28,
      color: theme.DEFAULT.TEXT_COLOR,
      marginVertical: 90,
    },
    tileImage: {
      width: 50,
      height: 50,
    },
    tileContainer: {
      alignItems: 'center',
    },
    tileContentContainer: {
      justifyContent: 'flex-start',
    },
    tileTitle: {},
    settingsContainer: {},
    title: {
      paddingHorizontal: 16,
      ...COMMON_STYLES.SCREEN_TITLE(theme),
    },
  });
