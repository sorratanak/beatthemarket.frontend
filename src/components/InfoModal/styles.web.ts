import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';
import { LIGHT_THEME } from '../../themes';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:
        theme === LIGHT_THEME
          ? 'rgba(19, 30, 37, 0.8);'
          : 'rgba(15, 22, 27, 0.9);',
      justifyContent: 'center',
      alignItems: 'center',
    },
    subContainer: {
      width: 810,
      backgroundColor: theme.DEFAULT.PRIMARY_BACKGROUND_COLOR,
      borderRadius: 7,
    },
    titleContainer: {
      alignItems: 'center',
      backgroundColor: theme.DEFAULT.SECONDARY_BACKGROUND_COLOR,
    },
    titleText: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontWeight: '500',
      fontSize: 40,
      lineHeight: 49,
      marginVertical: 15,
    },
    titleImg: {
      width: 60,
      height: 60,
      marginVertical: 10,
    },
    infoContainer: {
      alignItems: 'center',
      marginTop: 30,
      marginBottom: 45,
      paddingHorizontal: 225,
    },
    infoText: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontWeight: '300',
      fontSize: 20,
      lineHeight: 24,
      textAlign: 'center',
    },
    oneButtonContainer: { marginHorizontal: 200, marginBottom: 50 },
    twoButtonsContainer: {
      flexDirection: 'row',
      marginHorizontal: 140,
      marginBottom: 50,
    },
    firstButton: { flex: 1 },
    secondButton: { flex: 1, marginLeft: 20 },
    buttonText: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontSize: 20,
      lineHeight: 24,
    },
    firstButtonAccent: {
      flex: 1,
      borderColor: theme.INFO_MODAL.FIRST_BUTTON_ACCENT_BORDER_COLOR,
    },
    secondButtonAccent: {
      flex: 1,
      marginLeft: 20,
      backgroundColor: theme.INFO_MODAL.SECOND_BUTTON_ACCENT_BACKGROUND_COLOR,
    },
  });
