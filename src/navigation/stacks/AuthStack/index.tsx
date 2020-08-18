import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn, SignUp } from '../../../screens';

export type StackParams = {
  SignIn: undefined;
  SignUp: undefined;
};

const Stack = createStackNavigator<StackParams>();

export const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
);
