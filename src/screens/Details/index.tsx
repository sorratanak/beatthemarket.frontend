import React, { useState, useEffect, useCallback } from 'react';
import { Text } from 'react-native';

import {
  VictoryChart,
  VictoryScatter,
  VictoryLine,
  VictoryZoomContainer,
  style as chartStyle,
} from './charts/helper';

import { Container } from '../../components';
import { COLORS } from '../../themes/colors';

// type NavigationProps = StackNavigationProp<StackParams, 'Details'>;
// type RouteProps = RouteProp<StackParams, 'Details'>;

interface ChartRecord {
  x: number;
  y: number;
}

const VALUE_COEFFICIENT: number = 100;

const INITIAL_DATA: ChartRecord[] = [
  { x: 1, y: 20 },
  { x: 2, y: 40 },
  { x: 3, y: 50 },
  { x: 4, y: 40 },
  { x: 5, y: 60 },
  { x: 6, y: 40 },
  { x: 7, y: 20 },
  { x: 8, y: 20 },
  { x: 9, y: 70 },
];

export function Details() {
  const [data, setData] = useState(INITIAL_DATA);

  const addRandomItem = useCallback((): void => {
    const x = data[data.length - 1].x + 1;

    const y = Math.random() * VALUE_COEFFICIENT;

    const newItem = {
      x,
      y,
    };

    data.push(newItem);
    setData([...data]);
  }, [data, setData]);

  useEffect(() => {
    setInterval(() => {
      addRandomItem();
    }, 1000);
  }, []);

  return (
    <Container>
      <Text>Details Screen</Text>
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
          style={{ data: { stroke: COLORS.CORNFLOWER_BLUE } }}
          data={data}
          interpolation="cardinal"
          animate={{
            duration: 1000,
            onLoad: {
              duration: 1000,
            },
          }}
        />
        <VictoryScatter
          size={3}
          style={{ data: { backgroundColor: COLORS.CORNFLOWER_BLUE } }}
          data={data}
          animate={{
            duration: 1000,
            onLoad: {
              duration: 1000,
            },
          }}
        />
      </VictoryChart>
    </Container>
  );
}
