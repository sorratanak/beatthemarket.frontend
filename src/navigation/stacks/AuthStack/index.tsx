import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn, ForgotPassword } from '../../../screens';
import { withoutHeaderOptions } from '../../routesOptions';

export type StackParams = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

const Stack = createStackNavigator<StackParams>();

export const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={withoutHeaderOptions}
    />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
  </Stack.Navigator>
);
