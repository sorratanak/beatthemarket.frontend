import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCCQlhfT4ssCHAsDyiZIS2x-6LDI8c3gNE',
  authDomain: 'beatthemarket-b1905.firebaseapp.com',
  databaseURL: 'https://beatthemarket-b1905.firebaseio.com',
  projectId: 'beatthemarket-b1905',
  storageBucket: 'beatthemarket-b1905.appspot.com',
  messagingSenderId: '225178365427',
  appId: '1:225178365427:web:3bd8ce98e7dae088b4b686',
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
