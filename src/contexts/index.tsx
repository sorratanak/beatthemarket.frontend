import React, { ReactNode } from 'react';
import UserContextProvider, { UserContext } from './userContext';
import GameContextProvider, { GameContext } from './gameContext';

interface Props {
  children: ReactNode;
}
const MultipleContextProvider = ({ children }: Props) => {
  return (
    <UserContextProvider>
      <GameContextProvider>{children}</GameContextProvider>
    </UserContextProvider>
  );
};

export { UserContext, GameContext };

export default MultipleContextProvider;
