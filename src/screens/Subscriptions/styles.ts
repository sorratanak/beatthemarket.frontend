import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.DEFAULT.PRIMARY_BACKGROUND_COLOR,
    },
    flexContainer: {
      flex: 1,
    },
    buttonContainer: {
      alignSelf: 'center',
      backgroundColor: theme.SUBSCRIPTIONS_SCREEN.BUTTON_BACKGROUND_COLOR,
    },
    buttonText: {
      fontWeight: 'bold',
      color: theme.SUBSCRIPTIONS_SCREEN.BUTTON_TEXT_COLOR,
    },
    description: {},
  });
