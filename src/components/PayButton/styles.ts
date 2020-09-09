import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.SUBSCRIPTIONS_SCREEN.PAY_BUTTONS_BACKGROUND_COLOR,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingVertical: 18,
      borderRadius: 7,
    },
    image: {
      height: 20,
      width: 20,
      marginRight: 7,
    },
    title: {
      color: theme.SUBSCRIPTIONS_SCREEN.PAY_BUTTONS_TEXT_COLOR,
      fontSize: 20,
      lineHeight: 24,
      fontWeight: '500',
    },
  });
