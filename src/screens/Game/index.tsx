import React, { useState, useEffect, useCallback } from 'react';

import { Container, GameChartBoard } from '../../components';
import { IPoint } from '../../types';

// type NavigationProps = StackNavigationProp<StackParams, 'Details'>;
// type RouteProps = RouteProp<StackParams, 'Details'>;

const VALUE_COEFFICIENT: number = 100;
const TIMEOUT: number = 1000;

const INITIAL_DATA: IPoint[] = [
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

export function Game() {
  const [data, setData] = useState(INITIAL_DATA);

  const addRandomPoint = useCallback((): void => {
    const x = data[data.length - 1].x + 1;

    const y = Math.random() * VALUE_COEFFICIENT;

    const newPoint: IPoint = {
      x,
      y,
    };

    data.push(newPoint);
    setData([...data]);
  }, [data, setData]);

  useEffect(() => {
    setInterval(() => {
      addRandomPoint();
    }, TIMEOUT);
  }, []);

  return (
    <Container>
      <GameChartBoard chartData={data} />
    </Container>
  );
}
