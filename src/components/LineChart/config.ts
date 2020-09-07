import { Platform } from 'react-native';
import { ITheme } from '../../themes/interface';

export const CONTAINER_ANIMATION_OPTIONS = {
  duration: 200,
};

export const LINE_ANIMATION_OPTIONS = {
  duration: 500,
  onLoad: {
    duration: 500,
  },
};

export const getThemedAxises = (theme: ITheme) => ({
  container: {
    axis: { stroke: theme.DEFAULT.TEXT_COLOR },
    tickLabels: {
      fill: theme.DEFAULT.TEXT_COLOR,
      fontSize: Platform.OS === 'web' ? 16 : 13,
    },
  },
});
