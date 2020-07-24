import { auth } from './helper';

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

export const SignIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { user } = await auth.signInWithEmailAndPassword(email, password);

  return user;
};
