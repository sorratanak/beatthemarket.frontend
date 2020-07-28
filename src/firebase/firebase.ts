import { auth, authGoogle } from './helper';
import { graphqlQueries } from '../graphql';
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
    console.log('start');
    const user = await authGoogle();

    console.log('after google', user);
    const accessToken: string = await auth.currentUser.getIdToken();
    setToken(accessToken);

    const userResponse = await graphqlQueries.loginQuery();

    console.log('graphql ', userResponse);

    return { accessToken, user: userResponse || null };
  } catch (e) {
    console.log(e);
  }
};
