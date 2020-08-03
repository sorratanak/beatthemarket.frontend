import './GestureHandler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainNavigatorWrapper, { MainNavigator } from './MainNavigatorWrapper';
import { Home, Details, SignIn, SignUp } from '../screens';
import { tabOptions } from './tabBarOptions';

export type StackParams = {
  Home: undefined;
  Details: { data: string } | undefined;
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
    <MainStack.Screen name="Details" component={Details} />
  </MainStack.Navigator>
);

export const MainNavComponent = () => (
  <MainNavigatorWrapper>
    <MainNavigator.Screen
      name="Main"
      component={MainStackComponent}
      options={tabOptions.main}
    />
    <MainNavigator.Screen
      name="Details"
      component={Details}
      options={tabOptions.details}
    />
  </MainNavigatorWrapper>
);
