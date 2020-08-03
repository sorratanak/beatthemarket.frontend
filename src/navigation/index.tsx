import './GestureHandler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MainNavigator, MainNavigatorWrapper } from './MainNavigator';
import { Home, Game, SignIn, SignUp } from '../screens';
import { tabOptions } from './tabBarOptions';

export type StackParams = {
  Home: undefined;
  Game: { data: string } | undefined;
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

const MainStack = createStackNavigator<StackParams>();

export const MainStackComponent = () => (
  <MainStack.Navigator initialRouteName="Home">
    <MainStack.Screen name="Home" component={Home} />
    <MainStack.Screen name="Game" component={Game} />
  </MainStack.Navigator>
);

export function MainNavComponent() {
  return (
    <MainNavigatorWrapper>
      <MainNavigator.Screen
        name="Home"
        component={MainStackComponent}
        options={tabOptions.main}
      />
      <MainNavigator.Screen
        name="Game"
        component={Game}
        options={tabOptions.game}
      />
    </MainNavigatorWrapper>
  );
}
