import React, { useState, useEffect, useCallback } from 'react';
import { Text } from 'react-native';

import {
  VictoryChart,
  VictoryCandlestick,
  VictoryZoomContainer,
  style as chartStyle,
} from './charts/helper';

import { Container } from '../../components';

// type NavigationProps = StackNavigationProp<StackParams, 'Details'>;
// type RouteProps = RouteProp<StackParams, 'Details'>;

interface ChartRecord {
  x: number;
  open: number;
  close: number;
  high: number;
  low: number;
}

const OPEN_COEFFICIENT = 50;
const CLOSE_COEFFICIENT = 70;
const HIGH_COEFFICIENT = 25;

const INITIAL_DATA: ChartRecord[] = [
  { x: 1, open: 9, close: 30, high: 56, low: 7 },
  { x: 2, open: 80, close: 40, high: 120, low: 10 },
  { x: 3, open: 50, close: 80, high: 90, low: 20 },
  { x: 4, open: 70, close: 22, high: 70, low: 5 },
  { x: 5, open: 80, close: 40, high: 120, low: 10 },
  { x: 6, open: 50, close: 80, high: 90, low: 20 },
  { x: 7, open: 70, close: 22, high: 70, low: 5 },
  { x: 8, open: 70, close: 22, high: 70, low: 5 },
];

export function Details() {
  const [data, setData] = useState(INITIAL_DATA);

  const addRandomItem = useCallback((): void => {
    // const x = new Date(
    //   moment(data[data.length - 1].x)
    //     .add(1, 'day')
    //     .format(),
    // );
    const x = data[data.length - 1].x + 1;

    const open = Math.random() * OPEN_COEFFICIENT;
    const close = Math.random() * CLOSE_COEFFICIENT;
    const high = Math.random() * HIGH_COEFFICIENT + close;
    const low = Math.random() * open;

    const newItem = {
      x,
      open,
      close,
      high,
      low,
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
        scale={{ x: 'time' }}
        style={chartStyle}
        domain={{ y: [0, 100] }}
        containerComponent={
          <VictoryZoomContainer
            allowPan={false}
            allowZoom={false}
            ouiaSafe
            zoomDomain={{ x: [data.length - 8, data.length + 2], y: [0, 100] }}
          />
        }
        domainPadding={{ x: [20, 50] }}>
        <VictoryCandlestick
          candleColors={{ positive: '#8BC34A', negative: '#C62828' }}
          data={data}
          candleWidth={10}
          style={{ data: { stroke: 'none' } }}
          size={1}
        />
      </VictoryChart>
    </Container>
  );
}
