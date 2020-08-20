import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../../../screens';

export type StackParams = {
  Home: undefined;
  Game: undefined; // TODO Fix this
};

const Stack = createStackNavigator<StackParams>();

export const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);
