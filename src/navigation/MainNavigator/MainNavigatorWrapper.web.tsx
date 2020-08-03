// import '../GestureHandler';
// import * as React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { tabBarOptions } from '../tabBarOptions';

// export const MainNavigator = createBottomTabNavigator();

// interface Props {
//   children: React.ReactNode[];
// }
// export const MainNavigatorWrapper = ({ children }: Props) => {
//   return (
//     <MainNavigator.Navigator tabBarOptions={tabBarOptions}>
//       {children}
//     </MainNavigator.Navigator>
//   );
// };

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
