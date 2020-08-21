import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {},
    subContainer: {},
    title: {},
    titleContainer: {},
    titleIcon: {},
    contentContainer: {},
    rankInfo: {},
    resultInfo: {},
    subTitle: {},
    scoreBoardContainer: {},
    userInfoContainer: {},
    userLvl: {},
    loseMessage: {},
    hidden: {},
    profitsContainer: {},
    profitsTitle: {},
    profitItem: {},
    balanceText: {},
    buttonContainer: {},
  });
