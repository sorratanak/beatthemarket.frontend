import '../GestureHandler';
import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

export const MainNavigator = createDrawerNavigator();

interface Props {
  children: React.ReactNode[];
}
export const MainNavigatorWrapper = ({ children }: Props) => {
  return (
    <MainNavigator.Navigator drawerType="permanent">
      {children}
    </MainNavigator.Navigator>
  );
};
