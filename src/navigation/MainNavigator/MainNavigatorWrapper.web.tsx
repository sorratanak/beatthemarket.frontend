import '../GestureHandler';
import React, { ReactNode, useContext, useMemo } from 'react';
import { Text } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import { UserContext } from '../../userContext';
import { getThemedStyles } from './styles.web';

export const MainNavigator = createDrawerNavigator();

interface CustomDrawerContentProps extends DrawerContentComponentProps {
  themedStyles: any;
}
function CustomDrawerContent(props: CustomDrawerContentProps) {
  const { themedStyles } = props;

  return (
    <DrawerContentScrollView {...props}>
      <Text style={themedStyles.title}>Beat the Market</Text>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

interface Props {
  children: ReactNode[];
}
export const MainNavigatorWrapper = ({ children }: Props) => {
  const { theme } = useContext(UserContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <MainNavigator.Navigator
      drawerType="permanent"
      drawerContent={(props: CustomDrawerContentProps) => (
        <CustomDrawerContent themedStyles={themedStyles} {...props} />
      )}
      drawerContentOptions={{
        activeBackgroundColor: null,
        activeTintColor: theme.MENU.ACTIVE_LABEL_COLOR,
        inactiveTintColor: theme.MENU.INACTIVE_LABEL_COLOR,
        labelStyle: themedStyles.itemLabel,
        itemStyle: themedStyles.itemContainer,
      }}
      drawerStyle={themedStyles.container}>
      {children}
    </MainNavigator.Navigator>
  );
};
