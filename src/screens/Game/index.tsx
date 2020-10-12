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
  GameHeader,
  DefaultModal,
  EndGameModal,
} from '../../components';
import { IPoint, IGameEventScore } from '../../types';
import { GameContext, ThemeContext, PortfolioContext } from '../../contexts';
import { getThemedStyles } from './styles';
import {
  MAX_WINS_COUNT,
  LEVEL_WIN_STEP,
  GAME_EVENT_NAMES,
} from '../../constants';

export function Game() {
  const { theme } = useContext(ThemeContext);
  const {
    gameId,
    activeStock,
    onAddStockTicks,
    onSetGameEvents,
    onSetGameScore,
    gameScore,
    wins,
    setWins,
    onRestartGame,
    resetState: gameContextResetState,
  } = useContext(GameContext);
  const {
    onPortfolioUpdate,
    resetState: portfolioContextResetState,
  } = useContext(PortfolioContext);

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
          <GameEventsSubscriber
            gameId={gameId}
            levelTimerCallback={onSetGameEvents}
            // TODO its temporary solution
            levelStatusCallback={(newGameScore: IGameEventScore) => {
              if (
                newGameScore.event === GAME_EVENT_NAMES.WIN &&
                wins !== MAX_WINS_COUNT
              ) {
                setWins(wins + LEVEL_WIN_STEP);
              } else {
                onSetGameScore(newGameScore);
              }
            }}
          />
        </>
      )}

      <DefaultModal isVisible={isEndGameModalVisible}>
        <EndGameModal
          isVisible={isEndGameModalVisible}
          headerType={endGameModalType}
          onFinishPress={() => {
            setIsEndGameModalVisible(false);
            gameContextResetState();
            portfolioContextResetState();
          }}
          onAdditionalPurchase={() => {
            setIsEndGameModalVisible(false);
            onRestartGame();
          }}
        />
      </DefaultModal>
    </Container>
  );
}
