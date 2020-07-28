import firebaseAuth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';

GoogleSignin.configure();

export const auth = firebaseAuth();
console.log('auth is', auth);
export const authGoogle = async () => {
  console.log('start authGoogle', GoogleSignin);
  await GoogleSignin;
  const { idToken } = await GoogleSignin.signIn();
  console.log(idToken);
  const googleCredential = firebaseAuth.GoogleAuthProvider.credential(idToken);
  return firebaseAuth().signInWithCredential(googleCredential);
};
