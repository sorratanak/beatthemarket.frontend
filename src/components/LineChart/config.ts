import { ITheme } from '../../themes/interface';

export const ANIMATION_OPTIONS = {
  duration: 500,
  onLoad: {
    duration: 500,
  },
};

export const getThemedAxises = (theme: ITheme) => ({
  container: {
    axis: { stroke: theme.GAME_SCREEN.TEXT_COLOR },
    tickLabels: {
      fill: theme.GAME_SCREEN.TEXT_COLOR,
      fontFamily: 'inherit',
      fontSize: 16,
    },
  },
});
