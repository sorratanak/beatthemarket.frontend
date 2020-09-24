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
import {
  SignUp,
  SignIn,
  FirebaseGoogleSignIn,
  FirebaseFacebookSignIn,
} from '../firebase/firebase';
import { IUser } from '../types';
import { resetNavigation } from '../utils';
import { TIME_TO_RESET_NAVIGATION } from '../constants';

interface ContextProps {
  token: string | null;
  user: IUser | null;
  signInWithGoogle: () => void;
  signInWithFacebook: () => void;
  signIn: (email: string, password: string) => void;
  signUp: (email: string, password: string) => void;
  logout: () => void;
}

const DEFAULT_USER_CONTEXT: ContextProps = {
  token: null,
  user: null,
  signInWithGoogle: noop,
  signInWithFacebook: noop,
  signIn: noop,
  signUp: noop,
  logout: noop,
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
          console.log('new accessToken', accessToken);
          setLocalToken(accessToken);
        });
      }
    });
  }, [getUserFromStorage, getFirebaseToken, setLocalUser, setLocalToken]);

  const logout = useCallback(() => {
    // Navigation reset
    resetNavigation();

    // Delay before logout functions
    setTimeout(() => {
      removeUserFromStorage();
      removeUuidFromStorage();
      setLocalUser(null);
      setLocalToken(null);
    }, TIME_TO_RESET_NAVIGATION);
  }, [removeUserFromStorage, setLocalUser, setLocalToken]);

  const socialSignInCallback = useCallback(
    (response) => {
      if (response) {
        const { accessToken, user } = response;

        setUserToStorage(user);
        generateStorageUuid();
        setLocalUser(user);
        setLocalToken(accessToken);
      }
    },
    [setUserToStorage, setLocalToken, setLocalUser],
  );

  const signInWithGoogle = useCallback(() => {
    FirebaseGoogleSignIn().then(socialSignInCallback);
  }, [FirebaseGoogleSignIn, socialSignInCallback]);

  const signInWithFacebook = useCallback(() => {
    FirebaseFacebookSignIn().then(socialSignInCallback);
  }, [FirebaseFacebookSignIn, socialSignInCallback]);

  const signIn = useCallback(
    (email: string, password: string) => {
      SignIn({ email, password }).then((user) => {
        console.log('user', user);
        // setToken(email + password);
        // setLocalToken(email + password);
      });
    },
    [setLocalToken],
  );

  const signUp = useCallback(
    (email: string, password: string) => {
      SignUp({ email, password }).then((user) => {
        console.log('user', user);

        // setToken(email + password);
        // setLocalToken(email + password);
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
        signInWithFacebook,
        signIn,
        signUp,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
