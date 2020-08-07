import React, { ReactNode } from 'react';
import UserContextProvider from './userContext';
import GameContextProvider from './gameContext';

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

export default MultipleContextProvider;
