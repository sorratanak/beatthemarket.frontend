import firebase from 'firebase/app';
import 'firebase/auth';

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
// const appleProvider = () => null;

export const auth = firebase.auth();

export const authGoogle = () => auth.signInWithPopup(googleProvider);

export const authFacebook = () => auth.signInWithPopup(facebookProvider);

export const authApple = () => null;
