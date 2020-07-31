import React from 'react';
import { Text } from 'react-native';
import { VictoryChart, VictoryCandlestick } from './charts/helper';

import { Container } from '../../components';

// type NavigationProps = StackNavigationProp<StackParams, 'Details'>;
// type RouteProps = RouteProp<StackParams, 'Details'>;

const data = [
  { x: new Date(2016, 6, 1), open: 9, close: 30, high: 56, low: 7 },
  { x: new Date(2016, 6, 2), open: 80, close: 40, high: 120, low: 10 },
  { x: new Date(2016, 6, 3), open: 50, close: 80, high: 90, low: 20 },
  { x: new Date(2016, 6, 4), open: 70, close: 22, high: 70, low: 5 },
  { x: new Date(2016, 6, 5), open: 80, close: 40, high: 120, low: 10 },
  { x: new Date(2016, 6, 6), open: 50, close: 80, high: 90, low: 20 },
  { x: new Date(2016, 6, 7), open: 70, close: 22, high: 70, low: 5 },
];

const style: { [key: string]: React.CSSProperties } = {
  // parent: { border: '1px solid #ccc', margin: '2%', maxWidth: '40%' },
};

export function Details() {
  return (
    <Container>
      <Text>Details Screen</Text>
      <VictoryChart
        scale={{ x: 'time' }}
        style={style}
        domainPadding={{ x: [20, 50] }}>
        <VictoryCandlestick
          candleColors={{ positive: '#8BC34A', negative: '#C62828' }}
          data={data}
          style={{ data: { stroke: 'none' } }}
          size={8}
        />
      </VictoryChart>
    </Container>
  );
}
