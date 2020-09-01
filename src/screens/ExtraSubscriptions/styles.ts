import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';
import { COLORS } from '../../themes/colors';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.DEFAULT.PRIMARY_BACKGROUND_COLOR,
    },
    contentContainer: {
      paddingVertical: 16,
    },
    description: {
      marginTop: 24,
      color: theme.DEFAULT.TEXT_COLOR,
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0.41,
    },
    buttonContainer: {
      marginTop: 24,
      alignSelf: 'center',
      paddingHorizontal: 96,
      backgroundColor: theme.SUBSCRIPTIONS_SCREEN.BUTTON_BACKGROUND_COLOR,
    },
    selectedContainer: {
      paddingTop: 13,
      paddingBottom: 41,
      borderRadius: 7,
      backgroundColor: COLORS.MOON_RAKER,
    },
    selectedValue: {
      fontSize: 20,
      lineHeight: 24,
      textAlign: 'center',
      marginBottom: 18,
    },
    selectedDescription: {
      textAlign: 'center',
      fontSize: 13,
      lineHeight: 16,
      fontWeight: '300',
      color: COLORS.GRAY,
    },
  });
