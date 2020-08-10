import React, { useState, useCallback } from 'react';
import { useMutation } from '@apollo/client';
import _ from 'lodash';

import { IStock, IStockTick } from '../types';
import { getSellBuyStockRequest } from '../utils/parsing';
import gameGraphql from '../graphql/game';

interface ContextProps {
  gameId: string;
  stocks: IStock[];
  activeStock: IStock;
  gameEvents: any; // TODO typing
  onSetGameId: (gameId: string) => void;
  onSetStocks: (stocks: IStock[]) => void;
  onAddStockTicks: (ticks: IStockTick[]) => void;
  onSetActiveStock: (activeStock: IStock) => void;
  onSellStock: (stockAmount: number) => void;
  onBuyStock: (stockAmount: number) => void;
  onSetGameEvents: (gameEvents: any) => void; // TODO typing
}

const DEFAULT_GAME_CONTEXT: ContextProps = {
  gameId: null,
  stocks: null,
  activeStock: null,
  gameEvents: null,
  onSetGameId: _.noop,
  onSetStocks: _.noop,
  onAddStockTicks: _.noop,
  onSetActiveStock: _.noop,
  onSellStock: _.noop,
  onBuyStock: _.noop,
  onSetGameEvents: _.noop,
};

export const GameContext = React.createContext(DEFAULT_GAME_CONTEXT);

const ContextProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const [gameId, setGameId] = useState<string>(null);
  const [activeStock, setActiveStock] = useState<IStock>(null);
  const [stocks, setStocks] = useState<IStock[]>([]);
  const [gameEvents, setGameEvents] = useState<any>(null); // TODO typing

  const [buyStock, { data: buyStockResponse }] = useMutation(
    gameGraphql.queries.BUY_STOCK,
  );
  const [sellStock, { data: sellStockResponse }] = useMutation(
    gameGraphql.queries.SELL_STOCK,
  );

  const onSetGameId = useCallback(
    (someGameId: string) => {
      setGameId(someGameId);
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
          if (!currentStock.ticks) {
            currentStock.ticks = [tick];
          } else {
            currentStock.ticks.push(tick);
          }
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

  // TODO typing
  const onSetGameEvents = useCallback(
    (newGameEvents: any) => {
      setGameEvents(newGameEvents);
    },
    [setGameEvents],
  );

  return (
    <GameContext.Provider
      value={{
        gameId,
        stocks,
        activeStock,
        gameEvents,
        onSetStocks,
        onSetActiveStock,
        onAddStockTicks,
        onSetGameId,
        onSellStock,
        onBuyStock,
        onSetGameEvents,
      }}>
      {children}
    </GameContext.Provider>
  );
};

export default ContextProvider;
