import React, { ReactNode } from 'react';
import UserContextProvider, { UserContext } from './userContext';
import GameContextProvider, { GameContext } from './gameContext';
import ThemeContextProvider, { ThemeContext } from './themeContext';
import PortfolioContextProvider, { PortfolioContext } from './portfolioContext';

interface Props {
  children: ReactNode;
}
const MultipleContextProvider = ({ children }: Props) => {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <GameContextProvider>
          <PortfolioContextProvider>{children}</PortfolioContextProvider>
        </GameContextProvider>
      </UserContextProvider>
    </ThemeContextProvider>
  );
};

export { ThemeContext, UserContext, GameContext, PortfolioContext };

export default MultipleContextProvider;
