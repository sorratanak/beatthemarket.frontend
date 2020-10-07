import React, { useState, useCallback, useContext, useEffect } from 'react';
import { useMutation, useLazyQuery } from '@apollo/client';
import _ from 'lodash';

import { IStock, IStockTick, IGameEvent, IGameEventScore } from '../types';
import {
  getSellBuyStockRequest,
  getPauseResumeGameRequest,
  getUserProfitLossRequest,
} from '../utils/parsing';
import gameGraphql from '../graphql/game';
import { START_GAME_LEVEL, QUERY_WITH_ERRORS_OPTIONS } from '../constants';
import { ModalContext, UserContext } from '.';

interface ContextProps {
  wins: number;
  gameId: string;
  stocks: IStock[];
  activeStock: IStock;
  gameEvents: IGameEvent;
  gameScore: IGameEventScore;
  isGamePaused: boolean;
  userProfitLoss: any;
  onSetGameId: (gameId: string) => void;
  onSetStocks: (stocks: IStock[]) => void;
  onAddStockTicks: (ticks: IStockTick[]) => void;
  onSetActiveStock: (activeStock: IStock) => void;
  onSellStock: (stockAmount: number) => void;
  onBuyStock: (stockAmount: number) => void;
  onSetGameEvents: (gameEvents: IGameEvent) => void;
  onSetGameScore: (gameScore: IGameEventScore) => void;
  setWins: (count: number) => void;
  onPauseGame: () => void;
  onResumeGame: () => void;
  onExitGame: (callback?: () => void) => void;
  onRestartGame: () => void;
  onGetUserProfitLoss: () => void;
  resetState: () => void;
}

const DEFAULT_GAME_CONTEXT: ContextProps = {
  wins: null,
  gameId: null,
  stocks: null,
  activeStock: null,
  gameEvents: null,
  gameScore: null,
  isGamePaused: null,
  userProfitLoss: null,
  onSetGameId: _.noop,
  onSetStocks: _.noop,
  onAddStockTicks: _.noop,
  onSetActiveStock: _.noop,
  onSellStock: _.noop,
  onBuyStock: _.noop,
  onSetGameEvents: _.noop,
  onSetGameScore: _.noop,
  setWins: _.noop,
  onPauseGame: _.noop,
  onResumeGame: _.noop,
  onExitGame: _.noop,
  onRestartGame: _.noop,
  onGetUserProfitLoss: _.noop,
  resetState: _.noop,
};

export const GameContext = React.createContext(DEFAULT_GAME_CONTEXT);

const ContextProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const { user } = useContext(UserContext);
  const { onSetErrorModal, onSetAlertModal, modalsVisibleState } = useContext(
    ModalContext,
  );

  /* ------ State ------ */
  const [gameId, setGameId] = useState<string>(null);
  const [activeStock, setActiveStock] = useState<IStock>(null);
  const [stocks, setStocks] = useState<IStock[]>([]);
  const [gameEvents, setGameEvents] = useState<IGameEvent>(null);
  const [gameScore, setGameScore] = useState<IGameEventScore>(null);
  const [wins, setWins] = useState<number>(START_GAME_LEVEL);
  const [isGamePaused, setIsGamePaused] = useState<boolean>(false);

  /* ------ Reset states when logout ------ */
  const resetState = useCallback(() => {
    setGameId(null);
    setActiveStock(null);
    setStocks([]);
    setGameEvents(null);
    setGameScore(null);
    setWins(START_GAME_LEVEL);
    setIsGamePaused(false);
  }, [
    setGameId,
    setActiveStock,
    setStocks,
    setGameEvents,
    setGameScore,
    setWins,
    setIsGamePaused,
  ]);

  useEffect(() => {
    if (!user) {
      resetState();
    }
  }, [user]);

  /* ------ Queries ------ */
  const [
    buyStock,
    { data: buyStockResponse, error: buyStockError },
  ] = useMutation(gameGraphql.queries.BUY_STOCK, QUERY_WITH_ERRORS_OPTIONS);
  useEffect(() => {
    onSetErrorModal(buyStockError?.message);
  }, [buyStockError]);

  const [
    sellStock,
    { data: sellStockResponse, error: sellStockError },
  ] = useMutation(gameGraphql.queries.SELL_STOCK, QUERY_WITH_ERRORS_OPTIONS);
  useEffect(() => {
    onSetErrorModal(sellStockError?.message);
  }, [sellStockError]);

  const [pauseGame, { data: pauseGameResponse }] = useMutation(
    gameGraphql.queries.PAUSE_GAME,
  );
  const [resumeGame, { data: resumeGameResponse }] = useMutation(
    gameGraphql.queries.RESUME_GAME,
  );
  const [exitGame, { data: exitGameResponse }] = useMutation(
    gameGraphql.queries.EXIT_GAME,
  );
  const [restartGame, { data: restartGameResponse }] = useMutation(
    gameGraphql.queries.RESTART_GAME,
  );
  console.log('response', restartGameResponse);
  const [getUserProfitLoss, { data: userProfitLossResponse }] = useLazyQuery(
    gameGraphql.queries.GET_USER_PROFIT_LOSS,
  );

  /* ------ Callbacks ------ */
  const onSetGameId = useCallback(
    (newGameId: string) => {
      setGameId(newGameId);
      setWins(START_GAME_LEVEL);
      setIsGamePaused(false);
    },
    [setGameId],
  );

  const onSetStocks = useCallback(
    (data: IStock[]) => {
      if (data) {
        setStocks(data);
        setActiveStock(data[0]);
      }
    },
    [setStocks],
  );

  const onAddStockTicks = useCallback(
    (newTicks: IStockTick[]) => {
      const updatedStocks = [...stocks];

      _.forEach(newTicks, (tick) => {
        const currentStock = _.find(
          updatedStocks,
          (stock) => stock.id === tick.stockId,
        );
        if (currentStock) {
          currentStock.ticks = [...(currentStock.ticks || []), tick];
        }
      });

      setStocks(updatedStocks);
    },
    [stocks, setStocks],
  );

  const onBuyStock = useCallback(
    (stockAmount: number) => {
      const payload = getSellBuyStockRequest(gameId, activeStock, stockAmount);
      buyStock(payload);
    },
    [gameId, activeStock, buyStock],
  );

  const onSellStock = useCallback(
    (stockAmount: number) => {
      const payload = getSellBuyStockRequest(gameId, activeStock, stockAmount);
      sellStock(payload);
    },
    [gameId, activeStock, sellStock],
  );

  const onSetActiveStock = useCallback(
    (newActiveStock: IStock) => {
      setActiveStock(newActiveStock);
    },
    [setActiveStock],
  );

  const onSetGameEvents = useCallback(
    (newGameEvents: IGameEvent) => {
      setGameEvents(newGameEvents);
    },
    [setGameEvents],
  );

  const onSetGameScore = useCallback(
    (newGameScore: IGameEventScore) => {
      setGameScore(newGameScore);
    },
    [setGameScore],
  );

  const onPauseGame = useCallback(() => {
    console.log('PAUSE!');
    pauseGame(getPauseResumeGameRequest(gameId));
    setIsGamePaused(true);
  }, [gameId, pauseGame, setIsGamePaused]);

  const onResumeGame = useCallback(() => {
    console.log('RESUME!');
    resumeGame(getPauseResumeGameRequest(gameId));
    setIsGamePaused(false);
  }, [gameId, resumeGame, setIsGamePaused]);

  const onExitGame = useCallback(
    (callback?: () => void) => {
      onSetAlertModal({
        title:
          'Are you want to exit game?\nYou will lose your current progress',
        onConfirmPress: () => {
          exitGame(getPauseResumeGameRequest(gameId));
          resetState();
          if (callback) {
            callback();
          }
        },
      });
    },
    [gameId, exitGame, resetState],
  );

  const onRestartGame = useCallback(() => {
    console.log('restartGame query', getPauseResumeGameRequest(gameId));
    restartGame(getPauseResumeGameRequest(gameId));
    setIsGamePaused(false);

    const savedGameId = gameId;
    setTimeout(() => setGameId(savedGameId), 2000);
    setGameId(null);
  }, [gameId, restartGame, setIsGamePaused]);

  const onGetUserProfitLoss = useCallback(() => {
    console.log(
      'onGetUserProfitLoss',
      getUserProfitLossRequest(gameId, user?.userEmail),
    );
    getUserProfitLoss(getUserProfitLossRequest(gameId, user?.userEmail));
  }, [gameId, user, getUserProfitLoss]);

  // Modal state watcher
  useEffect(() => {
    console.log('new modalsVisibleState', modalsVisibleState);
    if (gameId) {
      if (!isGamePaused && _.some(Object.values(modalsVisibleState))) {
        onPauseGame();
      }

      if (isGamePaused && !_.every(Object.values(modalsVisibleState))) {
        onResumeGame();
      }
    }
  }, [modalsVisibleState]);

  return (
    <GameContext.Provider
      value={{
        // Data
        wins,
        gameId,
        stocks,
        activeStock,
        gameEvents,
        gameScore,
        userProfitLoss: userProfitLossResponse?.userPersonalProfitLoss,

        // Functions
        isGamePaused,
        onSetStocks,
        onSetActiveStock,
        onAddStockTicks,
        onSetGameId,
        onSellStock,
        onBuyStock,
        onSetGameEvents,
        onSetGameScore,
        setWins,
        onPauseGame,
        onResumeGame,
        onExitGame,
        onRestartGame,
        onGetUserProfitLoss,
        resetState,
      }}>
      {children}
    </GameContext.Provider>
  );
};

export default ContextProvider;
