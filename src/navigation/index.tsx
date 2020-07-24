import './GestureHandler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Details, SignIn } from '../screens';

export type StackParams = {
  Home: undefined;
  Details: { data: string } | undefined;
  SignIn: undefined;
};

const AuthStack = createStackNavigator<StackParams>();

export const AuthStackComponent = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignIn} />
  </AuthStack.Navigator>
);

const MainStack = createStackNavigator<StackParams>();

export const MainStackComponent = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={Home} />
    <MainStack.Screen name="Details" component={Details} />
  </MainStack.Navigator>
);
