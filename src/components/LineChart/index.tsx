import React, { useMemo, useState, useEffect, useContext } from 'react';
import { Dimensions, Platform } from 'react-native';
import _ from 'lodash';
import pickRandom from 'pick-random';

import {
  VictoryChart,
  VictoryScatter,
  VictoryLine,
  VictoryZoomContainer,
  VictoryAxis,
  style as chartStyle,
} from './helper';
import { COLORS } from '../../themes/colors';
import { IPoint } from '../../types';
import { ANIMATION_OPTIONS, getThemedAxises } from './config';
import { GameContext, ThemeContext } from '../../contexts';

// TODO dynamic CHART_HEIGHT & CHART_WIDTH

const HEIGHT_COEF = Platform.OS === 'web' ? 0.6 : 0.5;
const WIDTH_COEF = Platform.OS === 'web' ? 0.75 : 1;

const WINDOW = Dimensions.get('window');
const CHART_HEIGHT = WINDOW.height * HEIGHT_COEF;
const CHART_WIDTH = WINDOW.width * WIDTH_COEF;

interface Props {
  data: IPoint[];
}
export function LineChart({ data }: Props) {
  const { theme } = useContext(ThemeContext);
  const { activeStock } = useContext(GameContext);

  const themedAxises = getThemedAxises(theme);

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
      <VictoryAxis
        dependentAxis
        orientation="left"
        standalone={false}
        style={themedAxises.container}
      />
      <VictoryAxis standalone={false} style={themedAxises.container} />
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
