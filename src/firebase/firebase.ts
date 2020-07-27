import { auth } from './helper';
import { authGoogle } from './helper.web';
import graphqlQueries from '../graphql';

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

    await graphqlQueries.loginQuery(googleAccessToken);

    // React query: (+ accessToken in auth headers)
    // mutation Login {
    //   login {
    //     message
    //   }
    // }

    // TODO googleAccessToken only for now
    const accessToken: string = googleAccessToken;

    // TODO return backend user + accessToken
    return { accessToken, user: null };
  } catch (e) {
    console.log(e?.message);
  }
};
