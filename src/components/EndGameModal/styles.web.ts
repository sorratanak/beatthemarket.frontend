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
      backgroundColor: theme.DEFAULT.PRIMARY_BACKGROUND_COLOR,
    },
    title: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontWeight: '600',
      fontSize: 50,
      lineHeight: 61,
      marginTop: 50,
      marginBottom: 40,
      paddingHorizontal: 40,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    titleIcon: {
      width: 60,
      height: 60,
    },
    contentContainer: { flex: 2, flexDirection: 'row' },
    rankInfo: { flex: 1, marginLeft: '10%' },
    resultInfo: { flex: 1, marginLeft: '10%' },
    subTitle: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontWeight: '600',
      fontSize: 30,
      lineHeight: 37,
    },
    scoreBoardContainer: {
      width: 670,
      height: 350,
      overflow: 'scroll',
    },
  });
