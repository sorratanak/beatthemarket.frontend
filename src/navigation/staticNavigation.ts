import React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navDispatch(action) {
  if (navigationRef?.current) {
    navigationRef.current.dispatch(action);
  }
}

export function navigateTo(routeName: string, params?: any) {
  if (navigationRef?.current) {
    navigationRef.current.navigate(routeName, params);
  }
}
