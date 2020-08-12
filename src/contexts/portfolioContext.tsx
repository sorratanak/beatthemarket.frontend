import React, { useState, useCallback } from 'react';
import _ from 'lodash';

import { IPortfolio, IPortfolioProfit, IPortfolioBalance } from '../types';
import { PORTFOLIO_UPDATE_TYPE } from '../constants';

interface ContextProps {
  profit: { [stockId: string]: IPortfolioProfit };
  balance: { [balanceId: string]: IPortfolioBalance };
  onPortfolioUpdate: (updates: IPortfolio[] | any[]) => void;
}

const DEFAULT_PORTFOLIO_CONTEXT: ContextProps = {
  profit: null,
  balance: null,
  onPortfolioUpdate: _.noop,
};

export const PortfolioContext = React.createContext(DEFAULT_PORTFOLIO_CONTEXT);

const ContextProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const [profit, setProfit] = useState<{ [stockId: string]: IPortfolioProfit }>(
    {},
  );
  const [balance, setBalance] = useState<{
    [balanceId: string]: IPortfolioBalance;
  }>({});

  const onUpdateProfit = useCallback(
    (newProfits: IPortfolioProfit[]) => {
      const updatedProfit = { ...profit };

      _.forEach(newProfits, (newProfit) => {
        updatedProfit[newProfit.stockId] = newProfit;
      });

      setProfit(updatedProfit);
    },
    [profit, setProfit],
  );

  const onUpdateBalance = useCallback(
    (newBalances: IPortfolioBalance[]) => {
      const updatedBalance = { ...balance };

      _.forEach(newBalances, (newBalance) => {
        updatedBalance[newBalance.id] = newBalance;
      });

      setBalance(updatedBalance);
    },
    [balance, setBalance],
  );

  const onPortfolioUpdate = useCallback(
    (updates: IPortfolio[]) => {
      const newProfits: IPortfolioProfit[] = [];
      const newBalances: IPortfolioBalance[] = [];

      _.forEach(updates, (update) => {
        switch (update.__typename) {
          case PORTFOLIO_UPDATE_TYPE.PROFIT:
            newProfits.push(update);
            break;
          case PORTFOLIO_UPDATE_TYPE.BALANCE:
            newBalances.push(update);
            break;
          default:
            break;
        }
      });

      if (newProfits.length) {
        onUpdateProfit(newProfits);
      }

      if (newBalances.length) {
        onUpdateBalance(newBalances);
      }
    },
    [onUpdateProfit, onUpdateBalance],
  );

  return (
    <PortfolioContext.Provider
      value={{
        profit,
        balance,
        onPortfolioUpdate,
      }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default ContextProvider;
