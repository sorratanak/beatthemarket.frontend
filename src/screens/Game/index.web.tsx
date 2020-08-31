import React, { useState, useContext, useEffect, useMemo } from 'react';
import _ from 'lodash';
import moment from 'moment';

import {
  PortfolioSubscriber,
  StockTicksSubscriber,
  GameEventsSubscriber,
} from '../../graphql/subscribers';
import { Container, GameChartBoard } from '../../components';
import { IPoint } from '../../types';
import { GameContext, ThemeContext, PortfolioContext } from '../../contexts';
import { getThemedStyles } from './styles';
import { GameSideBar } from '../../components/GameSideBar';

export function Game() {
  const { theme } = useContext(ThemeContext);
  const { gameId, activeStock, onAddStockTicks, onSetGameEvents } = useContext(
    GameContext,
  );
  const { onPortfolioUpdate } = useContext(PortfolioContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const [data, setData] = useState<IPoint[]>([]);

  // TODO win/lose logic [blocked by ui for now]
  // const { level } = gameEvents;

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
  }, [gameId, activeStock, activeStock?.ticks?.length]);

  return (
    <Container style={themedStyles.container}>
      <GameChartBoard chartData={data} />
      <GameSideBar />
      {gameId && (
        <>
          <StockTicksSubscriber gameId={gameId} callback={onAddStockTicks} />
          <PortfolioSubscriber gameId={gameId} callback={onPortfolioUpdate} />
          <GameEventsSubscriber gameId={gameId} callback={onSetGameEvents} />
        </>
      )}
    </Container>
  );
}
