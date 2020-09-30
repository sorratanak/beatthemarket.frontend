import firebaseAuth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import {
  LoginManager as FBLoginManager,
  AccessToken as FBAccessToken,
} from 'react-native-fbsdk';
import { v4 as uuidv4 } from 'uuid';
import {
  appleAuth,
  appleAuthAndroid,
} from '@invertase/react-native-apple-authentication';
import { Platform } from 'react-native';
import {
  APPLE_WEB_ANDROID_AUTH_SERVICE_ID,
  FIREBASE_AUTH_REDIRECT_URL,
} from '../constants';

GoogleSignin.configure({
  webClientId:
    '1062410862638-b94modujdnkue3587c86qfn28960v6u1.apps.googleusercontent.com',
});

export const auth = firebaseAuth();

export const authGoogle = async () => {
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = firebaseAuth.GoogleAuthProvider.credential(idToken);
  return auth.signInWithCredential(googleCredential);
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
      return auth.signInWithCredential(facebookCredential);
    }
  } else {
    throw new Error(`FB Login failed`);
  }
};

export const authApple = async () => {
  const iosAppleAuth = async () => {
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

  const androidAppleAuth = async () => {
    const nonce = uuidv4();
    const state = uuidv4();

    try {
      // Initialize the module
      appleAuthAndroid.configure({
        // The Service ID you registered with Apple
        clientId: APPLE_WEB_ANDROID_AUTH_SERVICE_ID,

        // Return URL added to your Apple dev console. We intercept this redirect, but it must still match
        // the URL you provided to Apple. It can be an empty route on your backend as it's never called.
        redirectUri: FIREBASE_AUTH_REDIRECT_URL,

        // [OPTIONAL]
        // Scope.ALL (DEFAULT) = 'email name'
        // Scope.Email = 'email';
        // Scope.Name = 'name';
        scope: appleAuthAndroid.Scope.ALL,

        // [OPTIONAL]
        // ResponseType.ALL (DEFAULT) = 'code id_token';
        // ResponseType.CODE = 'code';
        // ResponseType.ID_TOKEN = 'id_token';
        responseType: appleAuthAndroid.ResponseType.ALL,

        // [OPTIONAL]
        // A String value used to associate a client session with an ID token and mitigate replay attacks.
        // This value will be SHA256 hashed by the library before being sent to Apple.
        // This is required if you intend to use Firebase to sign in with this credential.
        // Supply the response.id_token and rawNonce to Firebase OAuthProvider
        nonce,

        // [OPTIONAL]
        // Unique state value used to prevent CSRF attacks. A UUID will be generated if nothing is provided.
        state,
      });

      const response = await appleAuthAndroid.signIn();
      if (response) {
        console.log('android response', response);
        const appleCredential = firebaseAuth.AppleAuthProvider.credential(
          response.id_token,
          nonce,
        );

        console.log('appleCredential', appleCredential);

        return auth.signInWithCredential(appleCredential);
      }
    } catch (error) {
      if (error && error.message) {
        switch (error.message) {
          case appleAuthAndroid.Error.NOT_CONFIGURED:
            console.log('appleAuthAndroid not configured yet.');
            break;
          case appleAuthAndroid.Error.SIGNIN_FAILED:
            console.log('Apple signin failed.');
            break;
          case appleAuthAndroid.Error.SIGNIN_CANCELLED:
            console.log('User cancelled Apple signin.');
            break;
          default:
            break;
        }
      }

      return null;
    }
  };

  const onAppleAuthSpecificPlatform = Platform.select({
    ios: iosAppleAuth,
    android: androidAppleAuth,
  });

  const result = await onAppleAuthSpecificPlatform();

  return result;
};
