import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.DEFAULT.PRIMARY_BACKGROUND_COLOR,
      overflow: 'hidden',
      borderRadius: 7,
    },
    subContainer: {},
    titleContainer: {
      alignItems: 'center',
      backgroundColor: theme.DEFAULT.SECONDARY_BACKGROUND_COLOR,
    },
    titleText: {
      textAlign: 'center',
      color: theme.DEFAULT.TEXT_COLOR,
      fontWeight: '500',
      fontSize: 30,
      lineHeight: 49,
    },
    titleImg: {
      width: 50,
      height: 50,
      marginVertical: 10,
    },
    infoContainer: {
      marginTop: 16,
      marginHorizontal: 16,
    },
    infoText: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontWeight: '300',
      fontSize: 20,
      lineHeight: 24,
      textAlign: 'center',
      marginBottom: 20,
    },
    oneButtonContainer: {
      marginVertical: 20,
      marginHorizontal: 60,
    },
    twoButtonsContainer: {
      marginHorizontal: 20,
    },
    firstButton: {
      marginVertical: 10,
    },
    secondButton: {
      marginVertical: 10,
    },
    buttonText: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontSize: 20,
      lineHeight: 24,
    },
    firstButtonAccent: {},
    secondButtonAccent: {},
  });
