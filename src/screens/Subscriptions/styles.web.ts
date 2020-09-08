import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.DEFAULT.PRIMARY_BACKGROUND_COLOR,
      borderRadius: 7,
    },
    flexContainer: {
      flex: 1,
    },
    description: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontSize: 15,
      lineHeight: 20,
      textAlign: 'justify',
      marginHorizontal: 18,
      marginTop: 20,
      marginBottom: 55,
    },
    buttonContainer: {
      alignSelf: 'center',
      backgroundColor: theme.SETTINGS_SCREEN.BUY_BUTTON_COLOR,
      width: 260,
    },
    buyModalContainer: {
      flex: 1,
      backgroundColor: theme.DEFAULT.BACKDROP_BACKGROUND_COLOR,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
