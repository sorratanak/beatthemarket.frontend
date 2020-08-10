import React, { ReactNode } from 'react';
import UserContextProvider, { UserContext } from './userContext';
import GameContextProvider, { GameContext } from './gameContext';
import ThemeContextProvider, { ThemeContext } from './themeContext';

interface Props {
  children: ReactNode;
}
const MultipleContextProvider = ({ children }: Props) => {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <GameContextProvider>{children}</GameContextProvider>
      </UserContextProvider>
    </ThemeContextProvider>
  );
};

export { ThemeContext, UserContext, GameContext };

export default MultipleContextProvider;
