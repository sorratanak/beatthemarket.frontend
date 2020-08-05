import React, { useState, useEffect, useContext } from 'react';
// import _ from 'lodash';
import moment from 'moment';

import { StockTicksSubscriber } from '../../graphql/subscribers/stockTicks';
import { ScreenProps } from './props';
import { Container, GameChartBoard } from '../../components';
import { IPoint, IStockTick } from '../../types';
import { UserContext } from '../../userContext';
import { getThemedStyles } from './styles';

export function Game({ route }: ScreenProps) {
  const { theme } = useContext(UserContext);

  const themedStyles = getThemedStyles(theme);

  const [gameId, setGameId] = useState<string>(null);
  const [data, setData] = useState<IPoint[]>([]);

  console.log('gameId is', gameId);
  useEffect(() => {
    setGameId(route?.params?.gameId);
  }, [route?.params?.gameId]);

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
