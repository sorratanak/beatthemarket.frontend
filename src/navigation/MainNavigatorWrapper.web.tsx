import './GestureHandler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

export const MainNavigator = createDrawerNavigator();

interface Props {
  children: React.ReactNode[];
}
function MainNavigatorWrapper({ children }: Props) {
  return <MainNavigator.Navigator>{children}</MainNavigator.Navigator>;
}

export default MainNavigatorWrapper;
