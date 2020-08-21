import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Rules } from '../../../screens';
import { withoutHeaderOptions } from '../../routesOptions';

export type StackParams = {
  Rules: undefined;
};

const Stack = createStackNavigator<StackParams>();

export const RulesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Rules"
      component={Rules}
      options={withoutHeaderOptions}
    />
  </Stack.Navigator>
);
