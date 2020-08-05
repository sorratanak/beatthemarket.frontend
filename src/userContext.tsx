import React, { useState, useEffect } from 'react';
import noop from 'lodash/noop';

import {
  getFirebaseToken,
  setUserToStorage,
  removeUserFromStorage,
  getUserFromStorage,
} from './utilities';
import { SignUp, SignIn } from './firebase/firebase';
import { IUser } from './types';
import { ITheme } from './themes/interface';
import { LIGHT_THEME } from './themes';

export interface ContextProps {
  token: string | null;
  user: IUser | null;
  theme: ITheme;
  logout: () => void;
  signInWithGoogle: () => void;
  signUp: (email: string, password: string) => void;
  switchTheme: (theme: ITheme) => void;
}

const DEFAULT_USER_CONTEXT: ContextProps = {
  token: null,
  user: null,
  theme: null,
  logout: noop,
  signInWithGoogle: noop,
  signUp: noop,
  switchTheme: noop,
};

export const UserContext = React.createContext(DEFAULT_USER_CONTEXT);

const ContextProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const [localUser, setLocalUser] = useState<IUser | null>(null);
  const [localToken, setLocalToken] = useState<string | null>(null);
  const [theme, setTheme] = useState<ITheme>(LIGHT_THEME);

  useEffect(() => {
    getUserFromStorage().then((user) => {
      if (user) {
        setLocalUser(user);
        getFirebaseToken().then((accessToken) => {
          setLocalToken(accessToken);
        });
      }
    });
  }, [setLocalUser, setLocalToken]);

  const logout = () => {
    removeUserFromStorage();
    setLocalUser(null);
    setLocalToken(null);
  };

  const signInWithGoogle = () => {
    SignIn().then((response) => {
      if (response) {
        const { accessToken, user } = response;

        setUserToStorage(user);
        setLocalUser(user);
        setLocalToken(accessToken);
      }
    });
  };

  const signUp = (email: string, password: string) => {
    SignUp({ email, password }).then((user) => {
      console.log('user is', user);
      // setToken(email + password);
      setLocalToken(email + password);
    });
  };

  const switchTheme = (someTheme: ITheme) => {
    setTheme(someTheme);
  };

  return (
    <UserContext.Provider
      value={{
        theme,
        token: localToken,
        user: localUser,
        logout,
        signInWithGoogle,
        signUp,
        switchTheme,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
