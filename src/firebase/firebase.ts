import { auth, authGoogle } from './helper';
import loginGraphql from '../graphql/login';
import { setToken } from '../utilities';

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

export const SignIn = async () => {
  // const { user } = await auth.signInWithEmailAndPassword(email, password);
  try {
    await authGoogle();

    const accessToken: string = await auth.currentUser.getIdToken();
    setToken(accessToken);

    const userResponse = await loginGraphql.requests.login();

    return { accessToken, user: userResponse || null };
  } catch (e) {
    console.log(e);
  }
};
