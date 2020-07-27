import { auth } from './helper';
import { authGoogle } from './helper.web';

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
    const { accessToken } = googleCredentials.credential;

    // console.log(accessToken);

    // React query: (+ accessToken in auth headers)
    // mutation Login {
    //   login {
    //     message
    //   }
    // }

    // TODO return backend user + accessToken
    return { accessToken };
  } catch (e) {
    // throw e;
  }
  // console.log(response);
};
