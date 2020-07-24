import React, { useState, useEffect } from 'react';
import { getToken, removeToken, setToken } from './utilities';
import { SignUp, SignIn } from './firebase/firebase';

export interface ContextProps {
  token: string | null;
  logout: () => void;
  signIn: () => void;
  signUp: () => void;
}

export const UserContext = React.createContext({
  token: null,
  logout: () => {},
  signIn: (email: string, password: string) => {},
  signUp: (email: string, password: string) => {},
});

const ContextProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const [token, setLocalToken] = useState<string | null>(null);

  useEffect(() => {
    getToken().then((localToken) => {
      setLocalToken(localToken);
    });
  }, [setLocalToken]);

  const logout = () => {
    removeToken();
    setLocalToken(null);
  };

  const signIn = (email: string, password: string) => {
    SignIn({ email, password }).then((user) => {
      console.log('user is', user);
      setToken(email + password);
      setLocalToken(email + password);
    });
  };

  const signUp = (email: string, password: string) => {
    SignUp({ email, password }).then((user) => {
      console.log('user is', user);
      setToken(email + password);
      setLocalToken(email + password);
    });
  };

  return (
    <UserContext.Provider value={{ token, logout, signIn, signUp }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
