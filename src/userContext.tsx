import React, { useState, useEffect } from 'react';
import { getToken, removeToken, setToken } from './utilities';

export interface ContextProps {
  token: string | null;
  logout: () => void;
  signIn: () => void;
}

export const UserContext = React.createContext({
  token: null,
  logout: () => {},
  signIn: (email: string, password: string) => {},
});

const ContextProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const [token, setLocalToken] = useState<string | null>(null);

  useEffect(() => {
    getToken().then((token) => {
      setLocalToken(token);
    });
  }, [setLocalToken]);

  const logout = () => {
    removeToken();
    setLocalToken(null);
  };

  const signIn = (email: string, password: string) => {
    setToken(email);
    setLocalToken(email);
  };

  return (
    <UserContext.Provider
      value={{ token, logout, signIn }}
      children={children}
    />
  );
};

export default ContextProvider;
