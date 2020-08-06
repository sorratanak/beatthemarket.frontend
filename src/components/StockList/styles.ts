import { StyleSheet } from 'react-native';
import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {},
    contentContainer: {},
    listItemContainer: {},
    listItemTitle: {},
  });
