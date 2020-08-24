import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: theme.DEFAULT.PRIMARY_BACKGROUND_COLOR,
      padding: 40,
    },
    title: {
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
      alignItems: 'flex-start',
      backgroundColor: theme.DEFAULT.PRIMARY_BACKGROUND_COLOR,
    },
    tileContentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    tileTitle: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontWeight: '600',
      fontSize: 20,
      lineHeight: 24,
      paddingLeft: 20,
    },
    settingsContainer: {
      flex: 2.5,
    },
  });
