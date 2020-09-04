import React, { useState, useEffect, useCallback } from 'react';
import noop from 'lodash/noop';

import {
  getFirebaseToken,
  setUserToStorage,
  removeUserFromStorage,
  getUserFromStorage,
  removeUuidFromStorage,
  generateStorageUuid,
} from '../utils/storage';
import { SignUp, SignIn } from '../firebase/firebase';
import { IUser } from '../types';

interface ContextProps {
  token: string | null;
  user: IUser | null;
  logout: () => void;
  signInWithGoogle: () => void;
  signUp: (email: string, password: string) => void;
}

const DEFAULT_USER_CONTEXT: ContextProps = {
  token: null,
  user: null,
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
  const [localUser, setLocalUser] = useState<IUser | null>(null);
  const [localToken, setLocalToken] = useState<string | null>(null);

  useEffect(() => {
    getUserFromStorage().then((user) => {
      if (user) {
        generateStorageUuid();
        setLocalUser(user);
        getFirebaseToken().then((accessToken) => {
          setLocalToken(accessToken);
        });
      }
    });
  }, [getUserFromStorage, getFirebaseToken, setLocalUser, setLocalToken]);

  const logout = useCallback(() => {
    removeUserFromStorage();
    removeUuidFromStorage();
    // TODO reset navigation state
    setLocalUser(null);
    setLocalToken(null);
  }, [removeUserFromStorage, setLocalUser, setLocalToken]);

  const signInWithGoogle = useCallback(() => {
    SignIn().then((response) => {
      if (response) {
        const { accessToken, user } = response;

        setUserToStorage(user);
        generateStorageUuid();
        setLocalUser(user);
        setLocalToken(accessToken);
      }
    });
  }, [setUserToStorage, setLocalUser, setLocalToken]);

  const signUp = useCallback(
    (email: string, password: string) => {
      SignUp({ email, password }).then((user) => {
        // setToken(email + password);
        setLocalToken(email + password);
      });
    },
    [setLocalToken],
  );

  return (
    <UserContext.Provider
      value={{
        token: localToken,
        user: localUser,
        logout,
        signInWithGoogle,
        signUp,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
