import firebase from 'firebase/app';
import 'firebase/auth';
import {
  APPLE_HOST,
  FIREBASE_AUTH_REDIRECT_URL,
  FIREBASE_CLIENT_ID,
  MICROSOFT_HOST,
} from '../constants';

const firebaseConfig = {
  apiKey: 'AIzaSyDe_UVKBE3N1MCwWDJvZnPGudm-5vgMTmw',
  authDomain: 'beatthemarket-c13f8.firebaseapp.com',
  databaseURL: 'https://beatthemarket-c13f8.firebaseio.com',
  projectId: 'beatthemarket-c13f8',
  storageBucket: 'beatthemarket-c13f8.appspot.com',
  messagingSenderId: '1062410862638',
  appId: '1:1062410862638:web:b6eaa82871b367a0551fbf',
  measurementId: 'G-S3TXYJTHNX',
};

firebase.initializeApp(firebaseConfig);

const googleProvider: firebase.auth.GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

const facebookProvider: firebase.auth.FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.addScope('public_profile');
facebookProvider.addScope('email');

const microsoftProvider: firebase.auth.OAuthProvider = new firebase.auth.OAuthProvider(
  MICROSOFT_HOST,
);
microsoftProvider.setCustomParameters({
  prompt: 'consent',
  client_id: FIREBASE_CLIENT_ID,
  redirect_uri: FIREBASE_AUTH_REDIRECT_URL,
  response_type: 'code',
  response_mode: 'query',
  state: '12345',
});
microsoftProvider.addScope('mail.read');

const appleProvider: firebase.auth.OAuthProvider = new firebase.auth.OAuthProvider(
  APPLE_HOST,
);
appleProvider.addScope('email');
appleProvider.addScope('name');

export const auth = firebase.auth();

export const authGoogle = () => auth.signInWithPopup(googleProvider);

export const authFacebook = () => auth.signInWithPopup(facebookProvider);

export const authApple = () => auth.signInWithPopup(appleProvider);

export const authMicrosoft = () => auth.signInWithPopup(microsoftProvider);
