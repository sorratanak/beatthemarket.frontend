import React, { ReactNode } from 'react';
import ThemeContextProvider, { ThemeContext } from './themeContext';
import UserContextProvider, { UserContext } from './userContext';
import IapContextProvider, { IapContext } from './iapContext';
import GameContextProvider, { GameContext } from './gameContext';
import PortfolioContextProvider, { PortfolioContext } from './portfolioContext';

interface Props {
  children: ReactNode;
}
const MultipleContextProvider = ({ children }: Props) => {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <IapContextProvider>
          <GameContextProvider>
            <PortfolioContextProvider>{children}</PortfolioContextProvider>
          </GameContextProvider>
        </IapContextProvider>
      </UserContextProvider>
    </ThemeContextProvider>
  );
};

export { ThemeContext, UserContext, IapContext, GameContext, PortfolioContext };

export default MultipleContextProvider;
