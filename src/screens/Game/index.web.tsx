import React, { useState, useContext, useEffect, useMemo } from 'react';
import _ from 'lodash';
import moment from 'moment';

import {
  PortfolioSubscriber,
  StockTicksSubscriber,
  GameEventsSubscriber,
} from '../../graphql/subscribers';
import {
  Container,
  GameChartBoard,
  DefaultModal,
  EndGameModal,
} from '../../components';
import { IPoint } from '../../types';
import { GameContext, ThemeContext, PortfolioContext } from '../../contexts';
import { getThemedStyles } from './styles';

export function Game() {
  const { theme } = useContext(ThemeContext);
  const {
    gameId,
    activeStock,
    onAddStockTicks,
    onSetGameEvents,
    onSetGameScore,
    gameScore,
  } = useContext(GameContext);
  const { onPortfolioUpdate } = useContext(PortfolioContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const [data, setData] = useState<IPoint[]>([]);
  const [endGameModalType, setEndGameModalType] = useState<'lose' | 'win'>(
    null,
  );
  const [isEndGameModalVisible, setIsEndGameModalVisible] = useState<boolean>(
    false,
  );

  useEffect(() => {
    if (gameScore) {
      setEndGameModalType(gameScore.event);
      setIsEndGameModalVisible(true);
    }
  }, [gameScore]);

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
      {gameId && (
        <>
          <StockTicksSubscriber gameId={gameId} callback={onAddStockTicks} />
          <PortfolioSubscriber gameId={gameId} callback={onPortfolioUpdate} />
          <GameEventsSubscriber
            gameId={gameId}
            levelTimerCallback={onSetGameEvents}
            levelStatusCallback={onSetGameScore}
          />
        </>
      )}

      <DefaultModal isVisible={isEndGameModalVisible}>
        <EndGameModal
          headerType={endGameModalType}
          onFinishPress={() => {
            setIsEndGameModalVisible(false);
            onSetGameScore(null);
          }}
        />
      </DefaultModal>
    </Container>
  );
}
