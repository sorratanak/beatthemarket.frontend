import React, { useState, useCallback, useContext, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import _ from 'lodash';

import { IPortfolio, IPortfolioProfit, IPortfolioBalance } from '../types';
import { PORTFOLIO_UPDATE_TYPE, PROFIT_LOSS_TYPE } from '../constants';
import portfolioGraphql from '../graphql/portfolio';
import { GameContext } from './gameContext';
import { UserContext } from './userContext';
import { getAccountBalancesRequest } from '../utils/parsing';

interface ContextProps {
  profit: { [stockId: string]: IPortfolioProfit };
  profitsRealized: { [stockId: string]: IPortfolioProfit[] };
  balance: { [balanceId: string]: IPortfolioBalance };
  onPortfolioUpdate: (updates: IPortfolio[] | any[]) => void;
  onGetAccountBalances: () => void;
}

const DEFAULT_PORTFOLIO_CONTEXT: ContextProps = {
  profit: null,
  profitsRealized: null,
  balance: null,
  onPortfolioUpdate: _.noop,
  onGetAccountBalances: _.noop,
};

export const PortfolioContext = React.createContext(DEFAULT_PORTFOLIO_CONTEXT);

const ContextProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const { user } = useContext(UserContext);
  const { gameId } = useContext(GameContext);

  const [profit, setProfit] = useState<{ [stockId: string]: IPortfolioProfit }>(
    {},
  );
  const [profitsRealized, setProfitsRealized] = useState<{
    [stockId: string]: IPortfolioProfit[];
  }>({});
  const [balance, setBalance] = useState<{
    [balanceId: string]: IPortfolioBalance;
  }>({});

  /* ------ Reset states when logout ------ */
  useEffect(() => {
    if (!user) {
      setProfit(null);
      setBalance(null);
    }
  }, [user]);

  /* ------ Queries ------ */
  const [getAccountBalances, { data: accountBalancesResponse }] = useLazyQuery(
    portfolioGraphql.queries.GET_ACCOUNT_BALANCES,
  );

  useEffect(() => {
    if (accountBalancesResponse) {
      setBalance(accountBalancesResponse.accountBalances);
    }
  }, [accountBalancesResponse]);

  const onUpdateProfit = useCallback(
    (newProfits: IPortfolioProfit[]) => {
      const updatedProfit = { ...profit };
      const updatedProfitsRealized = { ...profitsRealized };

      _.forEach(newProfits, (newProfit) => {
        switch (newProfit.profitLossType) {
          case PROFIT_LOSS_TYPE.RUNNING:
            updatedProfit[newProfit.stockId] = newProfit;
            break;
          case PROFIT_LOSS_TYPE.REALIZED:
            updatedProfitsRealized[newProfit.stockId] = [
              ...(updatedProfitsRealized[newProfit.stockId] || []),
              newProfit,
            ];
            break;
          default:
            break;
        }
      });

      setProfit(updatedProfit);
      setProfitsRealized(updatedProfitsRealized);
    },
    [profit, setProfit, profitsRealized, setProfitsRealized],
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

  const onGetAccountBalances = useCallback(() => {
    getAccountBalances(getAccountBalancesRequest(gameId, user?.userEmail));
  }, [getAccountBalances, gameId, user]);

  return (
    <PortfolioContext.Provider
      value={{
        profit,
        profitsRealized,
        balance,
        onPortfolioUpdate,
        onGetAccountBalances,
      }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default ContextProvider;
