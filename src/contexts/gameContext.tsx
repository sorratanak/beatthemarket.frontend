import React, { useState, useCallback, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import _ from 'lodash';

import { IStock, IStockTick, IGameEvent, IGameEventScore } from '../types';
import {
  getSellBuyStockRequest,
  getPauseResumeGameRequest,
} from '../utils/parsing';
import gameGraphql from '../graphql/game';
import { START_GAME_LEVEL } from '../constants';

interface ContextProps {
  wins: number;
  gameId: string;
  stocks: IStock[];
  activeStock: IStock;
  gameEvents: IGameEvent;
  gameScore: IGameEventScore;
  isGamePaused: boolean;
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
}

const DEFAULT_GAME_CONTEXT: ContextProps = {
  wins: null,
  gameId: null,
  stocks: null,
  activeStock: null,
  gameEvents: null,
  gameScore: null,
  isGamePaused: null,
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
};

export const GameContext = React.createContext(DEFAULT_GAME_CONTEXT);

const ContextProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  /* ------ State ------ */
  const [gameId, setGameId] = useState<string>(null);
  const [activeStock, setActiveStock] = useState<IStock>(null);
  const [stocks, setStocks] = useState<IStock[]>([]);
  const [gameEvents, setGameEvents] = useState<IGameEvent>(null);
  const [gameScore, setGameScore] = useState<IGameEventScore>(null);
  const [wins, setWins] = useState<number>(START_GAME_LEVEL);
  const [isGamePaused, setIsGamePaused] = useState<boolean>(false);

  /* ------ Mutations ------ */
  const [buyStock, { data: buyStockResponse }] = useMutation(
    gameGraphql.queries.BUY_STOCK,
  );
  const [sellStock, { data: sellStockResponse }] = useMutation(
    gameGraphql.queries.SELL_STOCK,
  );

  const [pauseGame, { data: pauseGameResponse }] = useMutation(
    gameGraphql.queries.PAUSE_GAME,
  );
  const [resumeGame, { data: resumeGameResponse }] = useMutation(
    gameGraphql.queries.RESUME_GAME,
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
    pauseGame(getPauseResumeGameRequest(gameId));
    setIsGamePaused(true);
  }, [gameId, pauseGame]);

  const onResumeGame = useCallback(() => {
    resumeGame(getPauseResumeGameRequest(gameId));
    setIsGamePaused(false);
  }, [gameId, resumeGame]);

  return (
    <GameContext.Provider
      value={{
        wins,
        gameId,
        stocks,
        activeStock,
        gameEvents,
        gameScore,
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
      }}>
      {children}
    </GameContext.Provider>
  );
};

export default ContextProvider;
