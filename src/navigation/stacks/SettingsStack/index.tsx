import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Settings } from '../../../screens';

export type StackParams = {
  Settings: undefined;
  Subscriptions: undefined;
};

const Stack = createStackNavigator<StackParams>();

export const SettingsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Settings" component={Settings} />
    <Stack.Screen name="Subscriptions" component={() => null} />
  </Stack.Navigator>
);
