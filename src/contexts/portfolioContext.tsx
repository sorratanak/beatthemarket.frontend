import React, { useState, useCallback } from 'react';
import noop from 'lodash/noop';
import { IPortfolio } from '../types';

interface ContextProps {
  portfolio: IPortfolio;
  onSetPortfolio: (portfolio: IPortfolio) => void;
}

const DEFAULT_PORTFOLIO_CONTEXT: ContextProps = {
  portfolio: null,
  onSetPortfolio: noop,
};

export const PortfolioContext = React.createContext(DEFAULT_PORTFOLIO_CONTEXT);

const ContextProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const [portfolio, setPortfolio] = useState<IPortfolio>(null);

  const onSetPortfolio = useCallback(
    (newPortfolio: IPortfolio) => {
      setPortfolio(newPortfolio);
    },
    [setPortfolio],
  );

  return (
    <PortfolioContext.Provider
      value={{
        portfolio,
        onSetPortfolio,
      }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default ContextProvider;
