import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    tilesContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
      borderRadius: 7,
      margin: 10,
      paddingHorizontal: 40,
      paddingVertical: 80,
    },
    numberImg: {
      position: 'absolute',
      left: 20,
      top: 20,
      width: 70,
      height: 70,
    },
    mainImg: {
      width: '100%',
      height: '100%',
    },
    mainImgContainer: { flex: 1, height: 140, marginHorizontal: 50 },
    descriptionRules: {
      flex: 2,
      fontWeight: '300',
      fontSize: 20,
      lineHeight: 24,
    },
  });
