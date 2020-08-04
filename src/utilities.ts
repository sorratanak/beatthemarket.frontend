import AsyncStorage from '@react-native-community/async-storage';
import { auth as firebaseAuth } from './firebase/helper';
import { USER_KEY } from './constants';
import { IUser } from './types';

export function setUserToStorage(user: IUser) {
  console.log('setUserToStorage', user);
  AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
}

export async function getUserFromStorage(): Promise<IUser> {
  const stringifiedUser: string = await AsyncStorage.getItem(USER_KEY);
  const user: IUser = JSON.parse(stringifiedUser);
  return user;
}

export function removeUserFromStorage(): void {
  AsyncStorage.removeItem(USER_KEY);
}

export async function getFirebaseToken() {
  const firebaseToken = await firebaseAuth?.currentUser?.getIdToken();
  console.log('New firebaseToken:', firebaseToken);
  return firebaseToken;
}
