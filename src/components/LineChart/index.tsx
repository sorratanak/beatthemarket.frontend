import React, {
  useMemo,
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
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

const HEIGHT_COEF = Platform.OS === 'web' ? 0.75 : 0.5;
const WIDTH_COEF = Platform.OS === 'web' ? 0.75 : 1;

const WINDOW = Dimensions.get('window');
const CHART_HEIGHT = WINDOW.height * HEIGHT_COEF;
const CHART_WIDTH = WINDOW.width * WIDTH_COEF;

const MAX_POINTS_NUMBER = 8;

interface Props {
  data: IPoint[];
}
export function LineChart({ data }: Props) {
  const { theme } = useContext(ThemeContext);
  const { activeStock } = useContext(GameContext);

  const themedAxises = getThemedAxises(theme);

  const domainData = useMemo(() => {
    return data.slice(-10);
  }, [data]);

  const [currentYDomainMin, currentYDomainMax] = useMemo(() => {
    return [
      _.minBy(domainData, (el) => el.y)?.y - 0.5,
      _.maxBy(domainData, (el) => el.y)?.y + 0.5,
    ];
  }, [domainData]);

  const [currentXDomainMin, currentXDomainMax] = useMemo(() => {
    return [
      domainData.length > MAX_POINTS_NUMBER
        ? domainData.length - MAX_POINTS_NUMBER
        : 1,
      domainData.length + 1,
    ];
  }, [domainData]);

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
            x:
              currentXDomainMin && currentXDomainMax
                ? [currentXDomainMin, currentXDomainMax]
                : undefined,
            y:
              currentYDomainMin && currentYDomainMax
                ? [currentYDomainMin, currentYDomainMax]
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
        data={domainData}
        style={{ data: { stroke: chartColor } }}
        interpolation="cardinal"
        // animate={ANIMATION_OPTIONS}
      />
      <VictoryScatter
        data={domainData}
        style={{ data: { fill: chartColor } }}
        size={3}
        // animate={ANIMATION_OPTIONS}
      />
    </VictoryChart>
  );
}
