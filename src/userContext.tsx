import React, { useState, useEffect } from 'react';
import noop from 'lodash/noop';

import { getToken, removeToken, setToken } from './utilities';
import { SignUp, SignIn } from './firebase/firebase';

export interface ContextProps {
  token: string | null;
  logout: () => void;
  signInWithGoogle: () => void;
  signUp: (email: string, password: string) => void;
}

const DEFAULT_USER_CONTEXT: ContextProps = {
  token: null,
  logout: noop,
  signInWithGoogle: noop,
  signUp: noop,
};

export const UserContext = React.createContext(DEFAULT_USER_CONTEXT);

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

  const signInWithGoogle = () => {
    SignIn().then((response) => {
      if (response) {
        const { accessToken, user } = response;

        setToken(accessToken);
        setLocalToken(accessToken);
      }
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
    <UserContext.Provider value={{ token, logout, signInWithGoogle, signUp }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
