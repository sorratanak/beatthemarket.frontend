import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useLazyQuery } from '@apollo/client';
import noop from 'lodash/noop';

import usersGraphql from '../graphql/users';
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
} from '../firebase/firebase';
import { IUser, IUserInfo } from '../types';
import { resetNavigation } from '../utils';
import {
  QUERY_WITH_ERRORS_OPTIONS,
  TIME_TO_RESET_NAVIGATION,
  WAIT_TOKEN_REG_TIMEOUT_MS,
} from '../constants';
import { auth as firebaseAuth } from '../firebase/helper';
import { ModalContext } from './modalContext';
import { getUserInfoRequest } from '../utils/parsing';

interface ContextProps {
  token: string | null;
  user: IUser | null;
  userInfo: { user: IUserInfo };
  signInWithGoogle: () => void;
  signInWithFacebook: () => void;
  signInWithApple: () => void;
  signIn: (email: string, password: string) => void;
  forgotPassword: (email: string) => void;
  logout: () => void;
  onGetUserInfo: (user: IUser) => void;
}

const DEFAULT_USER_CONTEXT: ContextProps = {
  token: null,
  user: null,
  userInfo: null,
  signInWithGoogle: noop,
  signInWithFacebook: noop,
  signInWithApple: noop,
  signIn: noop,
  forgotPassword: noop,
  logout: noop,
  onGetUserInfo: noop,
};

export const UserContext = React.createContext(DEFAULT_USER_CONTEXT);

const ContextProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const [localUser, setLocalUser] = useState<IUser>(null);
  const [localToken, setLocalToken] = useState<string>(null);

  const { onSetErrorModal } = useContext(ModalContext);

  const [getUserInfo, { data: userInfo, error }] = useLazyQuery(
    usersGraphql.queries.GET_USER_INFO,
    QUERY_WITH_ERRORS_OPTIONS,
  );

  const onGetUserInfo = useCallback(
    (user: IUser) => {
      if (user?.userEmail) {
        getUserInfo(getUserInfoRequest(user?.userEmail));
      }
    },
    [getUserInfo],
  );

  useEffect(() => {
    getUserFromStorage().then((user) => {
      if (user) {
        generateStorageUuid();
        setLocalUser(user);
        getFirebaseToken().then((accessToken) => {
          setLocalToken(accessToken);
          setTimeout(() => onGetUserInfo(user), WAIT_TOKEN_REG_TIMEOUT_MS);
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
        setTimeout(() => onGetUserInfo(user), WAIT_TOKEN_REG_TIMEOUT_MS);
      }
    },
    [setUserToStorage, setLocalToken, setLocalUser],
  );

  const handleSignInError = useCallback(
    (err) => onSetErrorModal(err?.message),
    [onSetErrorModal],
  );

  const signInWithGoogle = useCallback(() => {
    FirebaseGoogleSignIn(handleSignInError).then(signInCallback);
  }, [FirebaseGoogleSignIn, signInCallback]);

  const signInWithFacebook = useCallback(() => {
    FirebaseFacebookSignIn(handleSignInError).then(signInCallback);
  }, [FirebaseFacebookSignIn, signInCallback]);

  const signInWithApple = useCallback(() => {
    FirebaseAppleSignIn(handleSignInError).then(signInCallback);
  }, [FirebaseAppleSignIn, signInCallback]);

  const signIn = useCallback(
    (email: string, password: string) => {
      SignUp({ email, password }, () =>
        SignIn({ email, password }, handleSignInError).then(signInCallback),
      ).then(signInCallback);
    },
    [signInCallback, setLocalToken],
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
        userInfo,
        forgotPassword,
        logout,
        signInWithGoogle,
        signInWithFacebook,
        signInWithApple,
        signIn,
        onGetUserInfo,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
