import React, { useState, useCallback } from 'react';
import noop from 'lodash/noop';

interface ContextProps {
  portfolio: any;
  onSetPortfolio: (portfolio: any) => void; // TODO typing
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
  const [portfolio, setPortfolio] = useState(null); // TODO typing

  const onSetPortfolio = useCallback(
    (newPortfolio: any) => {
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
