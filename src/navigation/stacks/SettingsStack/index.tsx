import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Settings,
  Subscriptions,
  SoundEffects,
  Music,
  UserSettings,
} from '../../../screens';
import { withoutHeaderOptions } from '../../routesOptions';

export type StackParams = {
  Settings: undefined;
  Subscriptions: undefined;
  SoundEffects: undefined;
  Music: undefined;
  UserSettings: undefined;
};

const Stack = createStackNavigator<StackParams>();

export const SettingsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Settings"
      component={Settings}
      options={withoutHeaderOptions}
    />
    <Stack.Screen name="Subscriptions" component={Subscriptions} />
    <Stack.Screen name="SoundEffects" component={SoundEffects} />
    <Stack.Screen name="Music" component={Music} />
    <Stack.Screen name="UserSettings" component={UserSettings} />
  </Stack.Navigator>
);
