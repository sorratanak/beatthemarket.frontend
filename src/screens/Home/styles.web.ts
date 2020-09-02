import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 160,
      paddingTop: 130,
      paddingBottom: 100,
      backgroundColor: theme.HOME_SCREEN.PRIMARY_BACKGROUND_COLOR,
    },
    scoreBoardContainer: { width: '100%' },
    headerContainer: {
      flexShrink: 1,
      flexDirection: 'row',
      width: '100%',
      marginBottom: 25,
    },
    playButtonContainer: {
      width: '30%',
      alignSelf: 'center',
      marginTop: 60,
      backgroundColor: theme.HOME_SCREEN.PLAY_BUTTON_BACKGROUND_COLOR,
    },
    greetContainer: { flex: 1 },
    greetUserName: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontWeight: '500',
      fontSize: 40,
      lineHeight: 49,
      marginBottom: 23,
    },
    greetText: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontSize: 15,
      lineHeight: 18,
    },
    profileInfoContainer: {
      flex: 2,
      marginLeft: 200,
    },
    profileTitleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 23,
    },
    profileTitle: {
      color: theme.DEFAULT.TEXT_COLOR,
      fontWeight: '500',
      fontSize: 40,
      lineHeight: 49,
      paddingRight: 33,
    },
    profileLvlContainer: {
      marginTop: 6,
      paddingHorizontal: 20,
      paddingVertical: 7,
      borderRadius: 7,
      backgroundColor: theme.HOME_SCREEN.PROFILE_LEVEL_BACKGROUND_COLOR,
    },
    profileLvl: {
      fontWeight: '300',
      fontSize: 15,
      lineHeight: 18,
    },
  });
