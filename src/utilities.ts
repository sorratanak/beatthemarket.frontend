import AsyncStorage from '@react-native-community/async-storage';
import { TOKEN_KEY } from './constants';

export function setToken(token: string) {
  AsyncStorage.setItem(TOKEN_KEY, token);
}

export async function getToken() {
  return await AsyncStorage.getItem(TOKEN_KEY);
}

export async function removeToken() {
  return await AsyncStorage.removeItem(TOKEN_KEY);
}
