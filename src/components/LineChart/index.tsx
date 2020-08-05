import React, { useMemo } from 'react';
import _ from 'lodash';

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
  const [dynamicYDomainMin, dynamicYDomainMax] = useMemo(() => {
    return [
      _.minBy(data, (el) => el.y)?.y - 0.5,
      _.maxBy(data, (el) => el.y)?.y + 0.5,
    ];
  }, [data]);

  return (
    <VictoryChart
      style={chartStyle}
      containerComponent={
        <VictoryZoomContainer
          allowPan={false}
          allowZoom={false}
          ouiaSafe
          zoomDomain={{
            x: [data.length > 8 ? data.length - 8 : 1, data.length + 1],
            y:
              dynamicYDomainMin && dynamicYDomainMax
                ? [dynamicYDomainMin, dynamicYDomainMax]
                : undefined,
          }}
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
