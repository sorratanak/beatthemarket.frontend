import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    tilesContainer: {},
    numberImg: {},
    mainImg: {},
    mainImgContainer: {},
    descriptionRules: {},
  });
