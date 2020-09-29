import firebaseAuth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import {
  LoginManager as FBLoginManager,
  AccessToken as FBAccessToken,
} from 'react-native-fbsdk';
import { appleAuth } from '@invertase/react-native-apple-authentication';

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
  const result = await FBLoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]);

  if (result) {
    if (result.isCancelled) {
      throw new Error('FB Login cancelled');
    } else {
      const { accessToken } = await FBAccessToken.getCurrentAccessToken();
      const facebookCredential = firebaseAuth.FacebookAuthProvider.credential(
        accessToken,
      );
      return firebaseAuth().signInWithCredential(facebookCredential);
    }
  } else {
    throw new Error(`FB Login failed`);
  }
};

export const authApple = async () => {
  const { identityToken, nonce } = await appleAuth.performRequest({
    requestedOperation: appleAuth.Operation.LOGIN,
    requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
  });

  const appleCredential = firebaseAuth.AppleAuthProvider.credential(
    identityToken,
    nonce,
  );
  return firebaseAuth().signInWithCredential(appleCredential);
};

export const authMicrosoft = async () => {};
