import { Platform, TextStyle } from 'react-native';
import { COLORS } from './colors';
import { ITheme } from './interface';

// ATTENTION Use it inside StyleSheet.create() only
export const COMMON_STYLES = {
  SHADOW_BOX: Platform.select({
    ios: {},
    android: {},
    web: {
      shadowOpacity: 0.1,
      shadowRadius: 15,
      shadowColor: COLORS.BLACK,
      shadowOffset: { height: 0, width: 0 },
    },
  }),
  SCREEN_TITLE: (theme: ITheme): TextStyle => ({
    fontSize: 34,
    lineHeight: 41,
    letterSpacing: 0.41,
    fontWeight: 'bold',
    color: theme.DEFAULT.TEXT_COLOR,
    marginVertical: 46,
  }),
};
