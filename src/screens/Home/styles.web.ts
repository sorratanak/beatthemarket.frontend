import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.DEFAULT.PRIMARY_BACKGROUND_COLOR,
    },
    scoreBoardContainer: { width: '100%' },
    headerContainer: {
      flexShrink: 1,
      flexDirection: 'row',
      width: '100%',
      marginBottom: 25,
    },
    greetContainer: { flex: 1 },
    greetUserName: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontWeight: '500',
      fontSize: 40,
      lineHeight: 49,
    },
    greetText: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontSize: 15,
      lineHeight: 18,
    },
    profileInfoContainer: { flex: 2, marginLeft: 200 },
    profileTitleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 23,
    },
    profileTitle: {
      fontWeight: '500',
      fontSize: 40,
      lineHeight: 49,
      paddingRight: 33,
    },
    profileLvl: { fontWeight: '300', fontSize: 15, lineHeight: 18 },
  });
