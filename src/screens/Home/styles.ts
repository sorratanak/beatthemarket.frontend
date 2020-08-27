import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.DEFAULT.PRIMARY_BACKGROUND_COLOR,
    },
    scoreBoardContainer: {
      margin: 20,
    },
    playButtonContainer: {
      width: 192,
      marginVertical: 28,
      backgroundColor: theme.HOME_SCREEN.PLAY_BUTTON_BACKGROUND_COLOR,
    },
  });
