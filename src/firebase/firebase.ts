import { auth } from './helper';
import { authGoogle } from './helper.web';
import { graphqlQueries } from '../graphql';

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
    const googleCredentials: any = await authGoogle();
    console.log(googleCredentials);
    const { accessToken: googleAccessToken } = googleCredentials?.credential;

    const response = await graphqlQueries.loginQuery(googleAccessToken);

    // TODO googleAccessToken only for now
    const accessToken: string = googleAccessToken;

    return { accessToken, user: response || null };
  } catch (e) {
    console.log(e?.message);
  }
};
