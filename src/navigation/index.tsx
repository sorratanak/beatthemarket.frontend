import './GestureHandler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MainNavigator, MainNavigatorWrapper } from './MainNavigator';
import { Home, Game, SignIn, SignUp } from '../screens';
import { tabOptions } from './tabBarOptions';
import { Settings } from '../screens/Settings';

export type StackParams = {
  Home: undefined;
  Game: { gameId: string } | undefined;
  Settings: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

const AuthStack = createStackNavigator<StackParams>();

export const AuthStackComponent = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
);

export function MainNavComponent() {
  return (
    <MainNavigatorWrapper>
      <MainNavigator.Screen
        name="Home"
        component={Home}
        options={tabOptions.main}
      />
      <MainNavigator.Screen
        name="Game"
        component={Game}
        options={tabOptions.game}
      />
      <MainNavigator.Screen
        name="Settings"
        component={Settings}
        options={tabOptions.settings}
      />
    </MainNavigatorWrapper>
  );
}
