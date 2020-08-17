import { Platform } from 'react-native';
import { COLORS } from './colors';

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
};
