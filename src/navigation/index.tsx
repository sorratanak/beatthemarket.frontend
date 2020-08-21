import './GestureHandler';
import React from 'react';

import { MainNavigator, MainNavigatorWrapper } from './MainNavigator';
import {
  AuthStack,
  SettingsStack,
  HomeStack,
  GameStack,
  RulesStack,
} from './stacks';
import { tabOptions } from './routesOptions';

export function MainNavComponent() {
  return (
    <MainNavigatorWrapper>
      {/* TODO Fix stack name */}
      <MainNavigator.Screen
        name="Home"
        component={HomeStack}
        options={tabOptions.main}
      />
      <MainNavigator.Screen
        name="Game"
        component={GameStack}
        options={tabOptions.game}
      />
      <MainNavigator.Screen
        name="Rules"
        component={RulesStack}
        options={tabOptions.rules}
      />
      <MainNavigator.Screen
        name="Settings"
        component={SettingsStack}
        options={tabOptions.settings}
      />
    </MainNavigatorWrapper>
  );
}

export { AuthStack };
