import AsyncStorage from '@react-native-community/async-storage';
import { auth as firebaseAuth } from './firebase/helper';
import { TOKEN_KEY } from './constants';

export function setToken(token: string) {
  console.log('new access token', token);
  AsyncStorage.setItem(TOKEN_KEY, token);
}

export async function getToken() {
  console.log('getToken is ', firebaseAuth, firebaseAuth.currentUser);
  const firebaseResponse = await firebaseAuth?.currentUser?.getIdToken();
  console.log(firebaseResponse);
  return firebaseResponse;
}

export async function removeToken() {
  const storageResponse = await AsyncStorage.removeItem(TOKEN_KEY);
  return storageResponse;
}
