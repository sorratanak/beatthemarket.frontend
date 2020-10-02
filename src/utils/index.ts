import { Platform } from 'react-native';
import { CommonActions, DrawerActions } from '@react-navigation/native';
import currencyFormatter from 'currency-formatter';

import { navDispatch } from '../navigation/staticNavigation';

export const isAndroid = Platform.OS === 'android';
export const isNotAndroid = Platform.OS !== 'android';

export const isIOS = Platform.OS === 'ios';
export const isNotIOS = Platform.OS !== 'ios';

export const isWeb = Platform.OS === 'web';
export const isNotWeb = Platform.OS !== 'web';

export function isNumericChar(char: string) {
  return /\d/.test(char);
}

export function getMoneyFormat(value: number | string, precision: number = 2) {
  return currencyFormatter.format(value, {
    symbol: '$',
    decimal: '.',
    thousand: "'",
    precision,
    format: '%s %v', // %s is the symbol and %v is the value
  });
}

export function getIapProvider() {
  return Platform.select({
    web: 'stripe',
    ios: 'apple',
    android: 'google',
  });
}

export function resetNavigation() {
  if (isWeb) {
    navDispatch(DrawerActions.closeDrawer());
  }
  navDispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    }),
  );
}
