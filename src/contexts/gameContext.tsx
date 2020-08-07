import React, { useState, useCallback } from 'react';
import _ from 'lodash';

import { IStock, IStockTick } from '../types';

interface ContextProps {
  gameId: string;
  stocks: IStock[];
  activeStock: IStock;
  onSetGameId: (gameId: string) => void;
  onSetStocks: (stocks: IStock[]) => void;
  onAddStockTicks: (ticks: IStockTick[]) => void;
  onSetActiveStock: (activeStock: IStock) => void;
}

const DEFAULT_GAME_CONTEXT: ContextProps = {
  gameId: null,
  stocks: null,
  activeStock: null,
  onSetGameId: _.noop,
  onSetStocks: _.noop,
  onAddStockTicks: _.noop,
  onSetActiveStock: _.noop,
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

  const onSetActiveStock = useCallback(
    (newActiveStock: IStock) => {
      setActiveStock(newActiveStock);
    },
    [setActiveStock],
  );

  return (
    <GameContext.Provider
      value={{
        gameId,
        stocks,
        activeStock,
        onSetStocks,
        onSetActiveStock,
        onAddStockTicks,
        onSetGameId,
      }}>
      {children}
    </GameContext.Provider>
  );
};

export default ContextProvider;
