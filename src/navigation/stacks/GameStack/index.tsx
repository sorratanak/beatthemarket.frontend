import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Game } from '../../../screens';
import { withoutHeaderOptions } from '../../routesOptions';

export type StackParams = {
  Game: undefined;
  Subscriptions: undefined;
};

const Stack = createStackNavigator<StackParams>();

export const GameStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Game" component={Game} options={withoutHeaderOptions} />
  </Stack.Navigator>
);
