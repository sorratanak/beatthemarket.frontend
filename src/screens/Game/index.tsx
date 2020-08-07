import React, { useState, useContext, useEffect } from 'react';
import _ from 'lodash';
import moment from 'moment';

import { StockTicksSubscriber } from '../../graphql/subscribers/stockTicks';
import { Container, GameChartBoard } from '../../components';
import { IPoint } from '../../types';
import { UserContext, GameContext } from '../../contexts';
import { getThemedStyles } from './styles';

export function Game() {
  const { theme } = useContext(UserContext);
  const { gameId, activeStock, stocks, onAddStockTicks } = useContext(
    GameContext,
  );

  const themedStyles = getThemedStyles(theme);

  const [data, setData] = useState<IPoint[]>([]);

  useEffect(() => {
    if (!gameId || !activeStock) {
      setData([]);
    } else {
      const { ticks } = activeStock;

      const newData: IPoint[] = _.map(ticks, (tick) => {
        return {
          x: moment(Number(tick.stockTickTime)).format('mm:ss'),
          y: tick.stockTickClose,
        };
      });

      setData(newData);
    }
  }, [gameId, activeStock?.ticks?.length]);

  return (
    <Container style={themedStyles.container}>
      <GameChartBoard
        activeStock={activeStock}
        stocks={stocks}
        chartData={data}
      />
      {gameId && (
        <StockTicksSubscriber gameId={gameId} callback={onAddStockTicks} />
      )}
    </Container>
  );
}
