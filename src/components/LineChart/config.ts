import { Platform } from 'react-native';
import random from 'random';
import _ from 'lodash';

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

export const SHAPES_ANIMATION_CONFIG: Object = {
  duration: 300,
  easing: 'bounce',
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

export const getShapesData = (domain: { x: number[]; y: number[] }) => {
  const colors = [
    'violet',
    'cornflowerblue',
    'gold',
    'orange',
    'turquoise',
    'tomato',
    'greenyellow',
  ];
  const symbols = [
    'circle',
    'star',
    'square',
    'triangleUp',
    'triangleDown',
    'diamond',
    'plus',
  ];

  return _.times(15, _.constant(null)).map((index) => {
    const scaledIndex = Math.floor(index % 7);
    return {
      x: random.float(domain.x[0] || 0, domain.x[1] + 1 || 10),
      y: random.float(domain.y[0] || 0, domain.y[1] + 1 || 10),
      size: random.int(0, 8) + 3,
      symbol: symbols[scaledIndex],
      fill: colors[random.int(0, 6)],
      opacity: 0.3,
    };
  });
};
