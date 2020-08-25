import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {},
    subContainer: {},
    titleContainer: {},
    titleText: {},
    titleImg: {},
    infoContainer: {},
    infoText: {},
    oneButtonContainer: {},
    twoButtonsContainer: {},
    firstButton: {},
    secondButton: {},
    buttonText: {},
    firstButtonAccent: {},
    secondButtonAccent: {},
  });
