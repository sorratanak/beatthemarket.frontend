import React, { useState, useContext } from 'react';
import moment from 'moment';

import { StockTicksSubscriber } from '../../graphql/subscribers/stockTicks';
import { Container, GameChartBoard } from '../../components';
import { IPoint, IStockTick } from '../../types';
import { UserContext } from '../../contexts/userContext';
import { GameContext } from '../../contexts/gameContext';
import { getThemedStyles } from './styles';

export function Game() {
  const { theme } = useContext(UserContext);
  const { gameId, stocks, onAddStockTicks } = useContext(GameContext);

  console.log('stocks is', stocks);

  const themedStyles = getThemedStyles(theme);

  const [data, setData] = useState<IPoint[]>([]);

  const addNewData = (stockTicks: IStockTick[]) => {
    onAddStockTicks(stockTicks);

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
