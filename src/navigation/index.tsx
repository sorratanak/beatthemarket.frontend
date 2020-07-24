import './GestureHandler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, Details, SignIn, SignUp } from '../screens';
import { tabOptions, tabBarOptions } from './tabBarOptions';

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

const TabStack = createBottomTabNavigator();

export const TabComponent = () => (
  <TabStack.Navigator tabBarOptions={tabBarOptions}>
    <TabStack.Screen
      name="Main"
      component={MainStackComponent}
      options={tabOptions.main}
    />
    <TabStack.Screen
      name="Details"
      component={Details}
      options={tabOptions.details}
    />
  </TabStack.Navigator>
);
