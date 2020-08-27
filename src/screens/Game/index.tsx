import React, { useState, useContext, useEffect, useMemo } from 'react';
import _ from 'lodash';
import pickRandom from 'pick-random';
import moment from 'moment';

import {
  PortfolioSubscriber,
  StockTicksSubscriber,
  GameEventsSubscriber,
} from '../../graphql/subscribers';
import {
  Container,
  GameChartBoard,
  GameHeader,
  DefaultModal,
  EndGameModal,
} from '../../components';
import { IPoint } from '../../types';
import { GameContext, ThemeContext, PortfolioContext } from '../../contexts';
import { getThemedStyles } from './styles';

export function Game() {
  const { theme } = useContext(ThemeContext);
  const { gameId, activeStock, onAddStockTicks, onSetGameEvents } = useContext(
    GameContext,
  );
  const { onPortfolioUpdate } = useContext(PortfolioContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const [data, setData] = useState<IPoint[]>([]);

  const [endGameModalType] = useState<'lose' | 'win'>(
    pickRandom(['lose', 'win'])[0],
  );

  const [isEndGameModalVisible, setIsEndGameModalVisible] = useState<boolean>(
    false,
  );

  // TODO win/lose logic [blocked by ui for now]
  // const { level } = gameEvents;

  useEffect(() => {
    if (gameId) {
      setTimeout(() => setIsEndGameModalVisible(true), 2000);
    }
  }, [gameId]);

  useEffect(() => {
    if (!gameId || !activeStock) {
      setData([]);
    } else {
      const { ticks } = activeStock;

      const newData: IPoint[] = _.map(ticks, (tick) => {
        return {
          x: moment(
            Number(tick.stockTickTime) - Number(ticks[0].stockTickTime),
          ).format('mm:ss'),
          y: tick.stockTickClose,
        };
      });

      setData(newData);
    }
  }, [gameId, activeStock, activeStock?.ticks?.length]);

  return (
    <Container style={themedStyles.container}>
      <GameHeader />
      <GameChartBoard chartData={data} />
      {gameId && (
        <>
          <StockTicksSubscriber gameId={gameId} callback={onAddStockTicks} />
          <PortfolioSubscriber gameId={gameId} callback={onPortfolioUpdate} />
          <GameEventsSubscriber gameId={gameId} callback={onSetGameEvents} />
        </>
      )}

      <DefaultModal isVisible={isEndGameModalVisible}>
        <EndGameModal
          headerType={endGameModalType}
          onFinishPress={() => setIsEndGameModalVisible(false)}
        />
      </DefaultModal>
    </Container>
  );
}
