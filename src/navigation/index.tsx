import './GestureHandler';
import React from 'react';

import { MainNavigator, MainNavigatorWrapper } from './MainNavigator';
import { AuthStack, SettingsStack, HomeStack, GameStack } from './stacks';
import { tabOptions } from './tabBarOptions';

export function MainNavComponent() {
  return (
    <MainNavigatorWrapper>
      <MainNavigator.Screen
        name="HomeStack"
        component={HomeStack}
        options={tabOptions.main}
      />
      <MainNavigator.Screen
        name="GamStack"
        component={GameStack}
        options={tabOptions.game}
      />
      <MainNavigator.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={tabOptions.settings}
      />
    </MainNavigatorWrapper>
  );
}

export { AuthStack };
