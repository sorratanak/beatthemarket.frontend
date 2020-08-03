import './GestureHandler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabBarOptions } from './tabBarOptions';

export const MainNavigator = createBottomTabNavigator();

interface Props {
  children: React.ReactNode[];
}
function MainNavigatorWrapper({ children }: Props) {
  return (
    <MainNavigator.Navigator tabBarOptions={tabBarOptions}>
      {children}
    </MainNavigator.Navigator>
  );
}

export default MainNavigatorWrapper;
