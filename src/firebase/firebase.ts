import { auth, authGoogle, authFacebook, authApple } from './helper';
import loginGraphql from '../graphql/login';
import { getFirebaseToken } from '../utils/storage';

const FirebaseAuthWithServer = async (
  authFunction: (email?: string, password?: string) => void,
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
  }
};

export const SignUp = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) =>
  FirebaseAuthWithServer(() =>
    auth.createUserWithEmailAndPassword(email, password),
  );

export const SignIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) =>
  FirebaseAuthWithServer(() =>
    auth.signInWithEmailAndPassword(email, password),
  );

export const FirebaseGoogleSignIn = async () =>
  FirebaseAuthWithServer(authGoogle);

export const FirebaseFacebookSignIn = async () =>
  FirebaseAuthWithServer(authFacebook);

export const FirebaseAppleSignIn = async () =>
  FirebaseAuthWithServer(authApple);
