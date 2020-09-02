import React, { useMemo, useCallback, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Settings,
  Subscriptions,
  SoundEffects,
  Music,
  UserSettings,
  ExtraSubscriptions,
} from '../../../screens';
import {
  withoutHeaderOptions,
  getThemedHeaderOptions,
} from '../../routesOptions';
import { ThemeContext } from '../../../contexts';

export type StackParams = {
  Settings: undefined;
  Subscriptions: undefined;
  ExtraSubscriptions: undefined;
  SoundEffects: undefined;
  Music: undefined;
  UserSettings: undefined;
};

const Stack = createStackNavigator<StackParams>();

export const SettingsStack = () => {
  const { theme } = useContext(ThemeContext);
  const themedHeaderOptions = useMemo(() => getThemedHeaderOptions(theme), [
    theme,
  ]);

  const getThemedTitledHeaderOptions = useCallback(
    (title?: string): any => ({
      title,
      ...themedHeaderOptions,
    }),
    [themedHeaderOptions],
  );

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={withoutHeaderOptions}
      />
      <Stack.Screen
        name="Subscriptions"
        component={Subscriptions}
        options={themedHeaderOptions}
      />
      <Stack.Screen
        name="ExtraSubscriptions"
        component={ExtraSubscriptions}
        options={getThemedTitledHeaderOptions('Extra Subscriptions')}
      />
      <Stack.Screen
        name="SoundEffects"
        component={SoundEffects}
        options={getThemedTitledHeaderOptions('Sound Effects')}
      />
      <Stack.Screen
        name="Music"
        component={Music}
        options={themedHeaderOptions}
      />
      <Stack.Screen
        name="UserSettings"
        component={UserSettings}
        options={getThemedTitledHeaderOptions('Profile')}
      />
    </Stack.Navigator>
  );
};
