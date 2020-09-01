import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    tilesContainer: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      marginBottom: 20,
    },
    numberImg: {
      marginRight: 8,
    },
    mainImg: {},
    mainImgContainer: {},
    descriptionRules: {
      flex: 1,
      fontWeight: '200',
      fontSize: 14,
      lineHeight: 17,
      color: theme.DEFAULT.TEXT_COLOR,
    },
  });
