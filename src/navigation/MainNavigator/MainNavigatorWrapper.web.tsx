import '../GestureHandler';
import React, { ReactNode, useContext, useMemo } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { UserContext } from '../../userContext';
import { getThemedStyles } from './styles';

export const MainNavigator = createDrawerNavigator();

interface Props {
  children: ReactNode[];
}
export const MainNavigatorWrapper = ({ children }: Props) => {
  const { theme } = useContext(UserContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <MainNavigator.Navigator
      drawerType="permanent"
      drawerStyle={themedStyles.container}>
      {children}
    </MainNavigator.Navigator>
  );
};
