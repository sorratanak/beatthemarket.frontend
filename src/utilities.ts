import AsyncStorage from '@react-native-community/async-storage';
import { auth as firebaseAuth } from './firebase/helper';
import { USER_KEY, THEME_KEY } from './constants';
import { IUser } from './types';
import { ITheme } from './themes/interface';

/* ------ User ------ */

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

/* ------ Theme ------ */

export function setThemeToStorage(theme: ITheme): void {
  AsyncStorage.setItem(THEME_KEY, JSON.stringify(theme));
}

export async function getThemeFromStorage(): Promise<ITheme> {
  const stringifiedTheme: string = await AsyncStorage.getItem(THEME_KEY);
  const theme: ITheme = JSON.parse(stringifiedTheme);
  return theme;
}

export function removeThemeFromStorage(): void {
  AsyncStorage.removeItem(THEME_KEY);
}

/* ------ Token ------ */

export async function getFirebaseToken() {
  const firebaseToken = await firebaseAuth?.currentUser?.getIdToken();
  console.log('New firebaseToken:', firebaseToken);
  return firebaseToken;
}
