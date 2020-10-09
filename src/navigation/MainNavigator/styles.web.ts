import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';
import { COMMON_STYLES } from '../../themes/commonStyles';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.DEFAULT.SECONDARY_BACKGROUND_COLOR,
      borderRightWidth: undefined,
      width: '20%',
      zIndex: 20,
      ...COMMON_STYLES.SHADOW_BOX,
    },
    containerMiniScreen: {
      width: 300,
    },
    flexContainer: {
      display: 'flex',
      flex: 1,
      flexGrow: 1,
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
    logoutContainer: {
      width: '100%',
      alignItems: 'center',
    },
    logout: {
      fontSize: 20,
      textAlign: 'center',
      color: theme.DEFAULT.TEXT_COLOR,
    },
    pauseButtonContainer: {
      position: 'absolute',
      bottom: 50,
      left: 0,
      right: 0,
      margin: 'auto',
      width: 150,
      height: 150,
      alignItems: 'center',
    },
    pauseButtonImage: {
      flex: 1,
      width: 150,
      height: 150,
    },
  });
