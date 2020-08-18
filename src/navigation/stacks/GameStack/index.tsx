import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Game } from '../../../screens';

export type StackParams = {
  Game: undefined;
};

const Stack = createStackNavigator<StackParams>();

export const GameStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Game" component={Game} />
  </Stack.Navigator>
);
