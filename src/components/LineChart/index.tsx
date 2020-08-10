import React, { useMemo, useState, useEffect, useContext } from 'react';
import { Dimensions } from 'react-native';
import _ from 'lodash';
import pickRandom from 'pick-random';

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
import { GameContext } from '../../contexts';

const WINDOW = Dimensions.get('window');
const CHART_HEIGHT = WINDOW.height * 0.6;
const CHART_WIDTH = WINDOW.width * 0.75;

interface Props {
  data: IPoint[];
}
export function LineChart({ data }: Props) {
  const { activeStock } = useContext(GameContext);

  const [dynamicYDomainMin, dynamicYDomainMax] = useMemo(() => {
    return [
      _.minBy(data, (el) => el.y)?.y - 0.5,
      _.maxBy(data, (el) => el.y)?.y + 0.5,
    ];
  }, [data]);

  const [chartColor, setChartColor] = useState(null);

  useEffect(() => {
    setChartColor(
      pickRandom([
        COLORS.BILBAO,
        COLORS.VIKING,
        COLORS.EBONY_CLAY,
        COLORS.CORNFLOWER_BLUE,
        COLORS.VALENCIA,
        COLORS.MACARONI_AND_CHEESE,
      ])[0],
    );
  }, [activeStock, setChartColor]);

  return (
    <VictoryChart
      // TODO add dynamic chart width/height
      width={CHART_WIDTH}
      height={CHART_HEIGHT}
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
      {/* TODO VictoryAxis */}
      <VictoryLine
        // TODO dynamic getData by zoom domain
        data={data}
        style={{ data: { stroke: chartColor } }}
        interpolation="cardinal"
        animate={ANIMATION_OPTIONS}
      />
      <VictoryScatter
        data={data}
        style={{ data: { fill: chartColor } }}
        size={3}
        animate={ANIMATION_OPTIONS}
      />
    </VictoryChart>
  );
}
