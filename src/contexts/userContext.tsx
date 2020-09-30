import React, { useState, useEffect, useCallback, useContext } from 'react';
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
  FirebaseAppleSignIn,
  FirebaseMicrosoftSignIn,
} from '../firebase/firebase';
import { IUser } from '../types';
import { resetNavigation } from '../utils';
import { TIME_TO_RESET_NAVIGATION } from '../constants';
import { auth as firebaseAuth } from '../firebase/helper';
import { ErrorModalContext } from './errorModalContext';

interface ContextProps {
  token: string | null;
  user: IUser | null;
  signInWithGoogle: () => void;
  signInWithFacebook: () => void;
  signInWithApple: () => void;
  signInWithMicrosoft: () => void;
  signIn: (email: string, password: string) => void;
  signUp: (email: string, password: string) => void;
  forgotPassword: (email: string) => void;
  logout: () => void;
}

const DEFAULT_USER_CONTEXT: ContextProps = {
  token: null,
  user: null,
  signInWithGoogle: noop,
  signInWithFacebook: noop,
  signInWithApple: noop,
  signInWithMicrosoft: noop,
  signIn: noop,
  signUp: noop,
  forgotPassword: noop,
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

  const { onSetErrorModal } = useContext(ErrorModalContext);

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

  const signInCallback = useCallback(
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
    FirebaseGoogleSignIn().then(signInCallback);
  }, [FirebaseGoogleSignIn, signInCallback]);

  const signInWithFacebook = useCallback(() => {
    FirebaseFacebookSignIn().then(signInCallback);
  }, [FirebaseFacebookSignIn, signInCallback]);

  const signInWithApple = useCallback(() => {
    FirebaseAppleSignIn().then(signInCallback);
  }, [FirebaseAppleSignIn, signInCallback]);

  const signInWithMicrosoft = useCallback(() => {
    FirebaseMicrosoftSignIn().then(signInCallback);
  }, [FirebaseMicrosoftSignIn, signInCallback]);

  const signIn = useCallback(
    (email: string, password: string) => {
      SignIn({ email, password }).then(signInCallback).catch(onSetErrorModal);
    },
    [signInCallback, setLocalToken],
  );

  const signUp = useCallback(
    (email: string, password: string) => {
      SignUp({ email, password }).then(signInCallback);
    },
    [setLocalToken],
  );

  const forgotPassword = useCallback(
    (email: string) => {
      firebaseAuth.sendPasswordResetEmail(email);
    },
    [firebaseAuth],
  );

  return (
    <UserContext.Provider
      value={{
        token: localToken,
        user: localUser,
        forgotPassword,
        logout,
        signInWithGoogle,
        signInWithFacebook,
        signInWithApple,
        signInWithMicrosoft,
        signIn,
        signUp,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
