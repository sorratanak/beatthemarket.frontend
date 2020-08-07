import React, { useState, useEffect, useContext } from 'react';
// import _ from 'lodash';
import moment from 'moment';

import { StockTicksSubscriber } from '../../graphql/subscribers/stockTicks';
import { ScreenProps } from './props';
import { Container, GameChartBoard } from '../../components';
import { IPoint, IStockTick } from '../../types';
import { UserContext } from '../../contexts/userContext';
import { GameContext } from '../../contexts/gameContext';
import { getThemedStyles } from './styles';

export function Game({ route }: ScreenProps) {
  const { theme } = useContext(UserContext);
  const { gameId, stocks } = useContext(GameContext);

  const themedStyles = getThemedStyles(theme);

  const [data, setData] = useState<IPoint[]>([]);

  const addNewData = (stockTicks: IStockTick[]) => {
    const newData: IPoint[] = [];

    newData.push({
      x: moment(Number(stockTicks[0].stockTickTime)).format('mm:ss'),
      y: stockTicks[0].stockTickClose,
    });

    setData([...data, ...newData]);
  };

  return (
    <Container style={themedStyles.container}>
      <GameChartBoard chartData={data} />
      {gameId && <StockTicksSubscriber gameId={gameId} callback={addNewData} />}
    </Container>
  );
}
