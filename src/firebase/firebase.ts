import { auth, authGoogle, authFacebook, authMicrosoft } from './helper';
import loginGraphql from '../graphql/login';
import { getFirebaseToken } from '../utils/storage';

export const SignUp = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { user } = await auth.createUserWithEmailAndPassword(email, password);

  return user;
};

const FirebaseSocialSignIn = async (socialAuthFunction: () => void) => {
  // const { user } = await auth.signInWithEmailAndPassword(email, password);
  try {
    await socialAuthFunction();

    const accessToken: string = await getFirebaseToken();

    const userResponse = await loginGraphql.requests.login();

    return { accessToken, user: userResponse || null };
  } catch (e) {
    console.log(e);
  }
};

export const FirebaseGoogleSignIn = async () =>
  FirebaseSocialSignIn(authGoogle);

export const FirebaseFacebookSignIn = async () =>
  FirebaseSocialSignIn(authFacebook);
