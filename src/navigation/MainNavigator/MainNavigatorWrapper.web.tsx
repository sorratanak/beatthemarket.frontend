import '../GestureHandler';
import React, { ReactNode, useContext, useMemo } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import { getThemedStyles } from './styles.web';
import { ThemeContext, GameContext } from '../../contexts';
import { IMAGES } from '../../assets';

export const MainNavigator = createDrawerNavigator();

interface CustomDrawerContentProps extends DrawerContentComponentProps {
  themedStyles: any;
}
function CustomDrawerContent(props: CustomDrawerContentProps) {
  const { themedStyles } = props;

  const { gameId, isGamePaused, onPauseGame, onResumeGame } = useContext(
    GameContext,
  );

  return (
    <DrawerContentScrollView {...props}>
      <Text style={themedStyles.title}>Beat the Market</Text>
      <DrawerItemList {...props} />
      {gameId && (
        <TouchableOpacity
          onPress={isGamePaused ? onResumeGame : onPauseGame}
          style={themedStyles.pauseButtonContainer}>
          <Image
            source={IMAGES.PAUSE_BUTTON}
            style={themedStyles.pauseButtonImage}
          />
        </TouchableOpacity>
      )}
    </DrawerContentScrollView>
  );
}

interface Props {
  children: ReactNode[];
}
export const MainNavigatorWrapper = ({ children }: Props) => {
  const { theme } = useContext(ThemeContext);

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
