import AsyncStorage from '@react-native-community/async-storage';
import { TOKEN_KEY } from './constants';

export function setToken(token: string) {
  AsyncStorage.setItem(TOKEN_KEY, token);
}

export async function getToken() {
  const storageResponse = await AsyncStorage.getItem(TOKEN_KEY);
  return storageResponse;
}

export async function removeToken() {
  const storageResponse = await AsyncStorage.removeItem(TOKEN_KEY);
  return storageResponse;
}
