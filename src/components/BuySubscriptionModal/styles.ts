import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';
import { COLORS } from '../../themes/colors';
import { LIGHT_THEME } from '../../themes';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    formContainer: {
      width: '50%',
      height: '70%',
      paddingVertical: '15%',
      paddingHorizontal: '7.5%',
      justifyContent: 'center',
      backgroundColor: theme.DEFAULT.PRIMARY_BACKGROUND_COLOR,
      borderRadius: 7,
    },
    payButtonContainer: {
      backgroundColor: COLORS.PUNCH,
      borderWidth: 0,
      paddingVertical: 21,
    },
    payButtonTitle: {
      fontSize: 20,
      lineHeight: 24,
      color: COLORS.WHITE,
    },
    socialPayContainer: {
      marginTop: 20,
      width: '100%',
      flexDirection: 'row',
    },
    mr20: {
      marginRight: 20,
    },
    grayCreditCardBackground: {
      position: 'absolute',
      bottom: 26,
      left: 26,
      width: 382,
      height: 255,
      zIndex: -10,
    },
    yellowCreditCardBackground: {
      position: 'absolute',
      top: 12,
      right: 13,
      width: 382,
      height: 280,
      zIndex: -10,
    },
    w100: {
      width: '100%',
    },
    cardContainer: {
      backgroundColor: theme.SIGNIN_SCREEN.TEXT_INPUT_BACKGROUND,
      paddingVertical: 20,
      borderWidth: theme === LIGHT_THEME ? 1 : 0,
      borderRadius: 7,
      borderColor: 'rgba(126, 126, 126, 0.2)',
      paddingLeft: 15,
      marginBottom: 30,
    },
  });

export const CARD_ELEMENT_OPTIONS = (theme: ITheme) => ({
  style: {
    base: {
      backgroundColor: theme.SIGNIN_SCREEN.TEXT_INPUT_BACKGROUND,
      color: theme.SIGNIN_SCREEN.TEXT_INPUT_COLOR,
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
});
