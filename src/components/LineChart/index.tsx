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
import {
  getThemedAxises,
  LINE_ANIMATION_OPTIONS,
  CONTAINER_ANIMATION_OPTIONS,
  SHAPES_ANIMATION_CONFIG,
  getShapesData,
} from './config';
import { GameContext, ThemeContext } from '../../contexts';

// TODO dynamic CHART_HEIGHT & CHART_WIDTH

const HEIGHT_COEF = Platform.OS === 'web' ? 0.75 : 0.5;
const WIDTH_COEF = Platform.OS === 'web' ? 0.7 : 1;

const WINDOW = Dimensions.get('window');
const CHART_HEIGHT = WINDOW.height * HEIGHT_COEF;
const CHART_WIDTH = WINDOW.width * WIDTH_COEF;

const MAX_VISIBLE_POINTS = 8;
const Y_VALUE_PADDING = 0.5;
const MAX_CHART_SIZE = 150;

interface Props {
  data: IPoint[];
}
export function LineChart({ data }: Props) {
  const { theme } = useContext(ThemeContext);
  const { activeStock } = useContext(GameContext);

  const themedAxises = getThemedAxises(theme);

  const [domainData, setDomainData] = useState([]);
  // TODO optimize or remove
  const [shapesData, setShapesData] = useState([]);

  const [currentYDomainMin, currentYDomainMax] = useMemo(() => {
    return [
      _.minBy(domainData, (el) => el.y)?.y - Y_VALUE_PADDING,
      _.maxBy(domainData, (el) => el.y)?.y + Y_VALUE_PADDING,
    ];
  }, [domainData]);

  const [currentXDomainMin, currentXDomainMax] = useMemo(() => {
    return [
      domainData.length > MAX_VISIBLE_POINTS
        ? domainData.length - MAX_VISIBLE_POINTS
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

  useEffect(() => {
    const itemsToSlice = MAX_VISIBLE_POINTS + (data.length % MAX_CHART_SIZE);

    const newDomainData = data.slice(-itemsToSlice);

    setDomainData(newDomainData);
    // TODO !! optimize or remove
    setShapesData(
      getShapesData({
        x:
          currentXDomainMin && currentXDomainMax
            ? [currentXDomainMin, currentXDomainMax]
            : [0, 10],
        y:
          currentYDomainMin && currentYDomainMax
            ? [currentYDomainMin, currentYDomainMax]
            : [0, 100],
      }),
    );
    // --------
  }, [data]);

  return (
    <VictoryChart
      // TODO add dynamic chart width/height
      width={CHART_WIDTH}
      height={CHART_HEIGHT}
      animate={CONTAINER_ANIMATION_OPTIONS}
      style={chartStyle}
      containerComponent={
        <VictoryZoomContainer
          allowPan={false}
          allowZoom={false}
          ouiaSafe
          zoomDimension="x"
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
        data={domainData}
        style={{ data: { stroke: chartColor } }}
        animate={LINE_ANIMATION_OPTIONS}
      />
      <VictoryScatter
        data={domainData}
        style={{ data: { fill: chartColor } }}
        size={3}
        animate={LINE_ANIMATION_OPTIONS}
      />
      {/* TODO optimize or remove */}
      <VictoryScatter
        data={shapesData}
        animate={SHAPES_ANIMATION_CONFIG}
        style={{
          data: {
            fill: ({ datum }) => datum.fill,
            opacity: ({ datum }) => datum.opacity,
          },
        }}
      />
    </VictoryChart>
  );
}
