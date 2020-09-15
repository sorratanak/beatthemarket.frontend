import React, { ReactNode } from 'react';
import ThemeContextProvider, { ThemeContext } from './themeContext';
import UserContextProvider, { UserContext } from './userContext';
import IapContextProvider, { IapContext } from './iapContext';
import GameContextProvider, { GameContext } from './gameContext';
import PortfolioContextProvider, { PortfolioContext } from './portfolioContext';
import ErrorModalContextProvider, {
  ErrorModalContext,
} from './errorModalContext';

interface Props {
  children: ReactNode;
}
const MultipleContextProvider = ({ children }: Props) => {
  return (
    <ThemeContextProvider>
      <ErrorModalContextProvider>
        <UserContextProvider>
          <IapContextProvider>
            <GameContextProvider>
              <PortfolioContextProvider>{children}</PortfolioContextProvider>
            </GameContextProvider>
          </IapContextProvider>
        </UserContextProvider>
      </ErrorModalContextProvider>
    </ThemeContextProvider>
  );
};

export {
  ThemeContext,
  ErrorModalContext,
  UserContext,
  IapContext,
  GameContext,
  PortfolioContext,
};

export default MultipleContextProvider;
