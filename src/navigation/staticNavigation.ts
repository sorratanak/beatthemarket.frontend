import React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navDispatch(action) {
  if (navigationRef?.current) {
    navigationRef.current.dispatch(action);
  }
}
