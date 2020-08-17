import '../GestureHandler';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { getThemedTabBarOptions } from '../tabBarOptions';
import { ThemeContext } from '../../contexts';

export const MainNavigator = createBottomTabNavigator();

interface Props {
  children: React.ReactNode[];
}
export const MainNavigatorWrapper = ({ children }: Props) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <MainNavigator.Navigator tabBarOptions={getThemedTabBarOptions(theme)}>
      {children}
    </MainNavigator.Navigator>
  );
};
