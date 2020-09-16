import { Platform } from 'react-native';
import { CommonActions, DrawerActions } from '@react-navigation/native';
import currencyFormatter from 'currency-formatter';

import { dispatch } from '../navigation/staticNavigation';

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
  if (Platform.OS === 'web') {
    dispatch(DrawerActions.closeDrawer());
  }
  dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    }),
  );
}
