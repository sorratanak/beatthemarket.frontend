import firebaseAuth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';

GoogleSignin.configure();

export const auth = firebaseAuth();
export const authGoogle = async () => {
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = firebaseAuth.GoogleAuthProvider.credential(idToken);
  return firebaseAuth().signInWithCredential(googleCredential);
};
