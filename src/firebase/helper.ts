import firebaseAuth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import { LoginManager as FBLoginManager } from 'react-native-fbsdk';

GoogleSignin.configure({
  webClientId:
    '1062410862638-b94modujdnkue3587c86qfn28960v6u1.apps.googleusercontent.com',
});

export const auth = firebaseAuth();

export const authGoogle = async () => {
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = firebaseAuth.GoogleAuthProvider.credential(idToken);
  return firebaseAuth().signInWithCredential(googleCredential);
};

export const authFacebook = async () => {
  await FBLoginManager.logInWithPermissions(['public_profile']).then(
    (result) => {
      if (result.isCancelled) {
        throw new Error('Login cancelled');
      } else {
        console.log(`Login success`, result);
      }
    },
    (error) => {
      throw new Error(`Login fail with error: ${error}`);
    },
  );
};

export const authMicrosoft = async () => {};
