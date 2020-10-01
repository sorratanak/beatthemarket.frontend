import { auth, authGoogle, authFacebook, authApple } from './helper';
import loginGraphql from '../graphql/login';
import { getFirebaseToken } from '../utils/storage';

const FirebaseAuthWithServer = async (
  authFunction: (email?: string, password?: string) => void,
  errorCallback: (err: any) => void,
) => {
  try {
    console.log('uhfaiud');
    await authFunction();

    const accessToken: string = await getFirebaseToken();

    console.log('accessToken111', accessToken);

    const userResponse = await loginGraphql.requests.login();

    console.log('userResponse', userResponse);

    return { accessToken, user: userResponse || null };
  } catch (err) {
    console.log(err);
    errorCallback(err);
  }
};

export const SignUp = async (
  {
    email,
    password,
  }: {
    email: string;
    password: string;
  },
  errorCallback: (err: any) => void,
) =>
  FirebaseAuthWithServer(
    () => auth.createUserWithEmailAndPassword(email, password),
    errorCallback,
  );

export const SignIn = async (
  {
    email,
    password,
  }: {
    email: string;
    password: string;
  },
  errorCallback: (err: any) => void,
) =>
  FirebaseAuthWithServer(
    () => auth.signInWithEmailAndPassword(email, password),
    errorCallback,
  );

export const FirebaseGoogleSignIn = async (errorCallback: (err: any) => void) =>
  FirebaseAuthWithServer(authGoogle, errorCallback);

export const FirebaseFacebookSignIn = async (
  errorCallback: (err: any) => void,
) => FirebaseAuthWithServer(authFacebook, errorCallback);

export const FirebaseAppleSignIn = async (errorCallback: (err: any) => void) =>
  FirebaseAuthWithServer(authApple, errorCallback);
