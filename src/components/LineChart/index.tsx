import React from 'react';

import {
  VictoryChart,
  VictoryScatter,
  VictoryLine,
  VictoryZoomContainer,
  style as chartStyle,
} from './helper';
import { COLORS } from '../../themes/colors';
import { IPoint } from '../../types';
import { ANIMATION_OPTIONS } from './config';

interface Props {
  data: IPoint[];
}
export function LineChart({ data }: Props) {
  return (
    <VictoryChart
      style={chartStyle}
      domain={{ y: [0, 100] }}
      containerComponent={
        <VictoryZoomContainer
          allowPan={false}
          allowZoom={false}
          ouiaSafe
          zoomDomain={{ x: [data.length - 8, data.length + 2], y: [0, 100] }}
        />
      }>
      <VictoryLine
        data={data}
        style={{ data: { stroke: COLORS.CORNFLOWER_BLUE } }}
        interpolation="cardinal"
        animate={ANIMATION_OPTIONS}
      />
      <VictoryScatter
        data={data}
        style={{ data: { fill: COLORS.CORNFLOWER_BLUE } }}
        size={3}
        animate={ANIMATION_OPTIONS}
      />
    </VictoryChart>
  );
}
