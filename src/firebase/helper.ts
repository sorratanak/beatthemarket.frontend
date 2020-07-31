import firebaseAuth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId:
    '1062410862638-b94modujdnkue3587c86qfn28960v6u1.apps.googleusercontent.com',
});

export const auth = firebaseAuth();

export const authGoogle = async () => {
  try {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = firebaseAuth.GoogleAuthProvider.credential(
      idToken,
    );
    return firebaseAuth().signInWithCredential(googleCredential);
  } catch (error) {
    console.log('error ', error);
  }
};
