import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { ITheme } from '../themes/interface';
import { IMAGES } from '../assets';

export const getThemedTabBarOptions = (theme: ITheme) => ({
  activeTintColor: theme.MENU.ACTIVE_LABEL_COLOR,
  inactiveTintColor: theme.MENU.INACTIVE_LABEL_COLOR,
  labelStyle: {
    fontSize: 10,
  },
  style: {
    backgroundColor: theme.DEFAULT.SECONDARY_BACKGROUND_COLOR,
  },
});

export const commonHeaderOptions = {
  headerStyle: { backgroundColor: '#242436', borderBottomWidth: 0 },
  headerTintColor: 'rgba(255, 255, 255, 0.8)',
  headerTitleStyle: { color: 'white' },
  headerBackTitleVisible: false,
};

interface TabBarIconProps {
  inactiveSource: any;
  activeSource: any;
  isSelected: boolean;
}
function TabBarIcon({
  inactiveSource,
  activeSource,
  isSelected,
}: TabBarIconProps) {
  const styles = StyleSheet.create({
    iconContainer: {},
  });

  return (
    <Image
      source={isSelected ? activeSource : inactiveSource}
      style={styles.iconContainer}
    />
  );
}

const getRenderTabBarIcon = (activeSource, inactiveSource) => ({ focused }) => (
  <TabBarIcon
    activeSource={activeSource}
    inactiveSource={inactiveSource}
    isSelected={focused}
  />
);

export const tabOptions = {
  main: {
    tabBarLabel: 'Main',
    tabBarIcon: getRenderTabBarIcon(IMAGES.HOME_ACTIVE, IMAGES.HOME_INACTIVE),
  },
  game: {
    tabBarLabel: 'Game',
    tabBarIcon: getRenderTabBarIcon(
      IMAGES.JOYSTICK_ACTIVE,
      IMAGES.JOYSTICK_INACTIVE,
    ),
  },
  rules: {
    tabBarLabel: 'Rules',
    tabBarIcon: getRenderTabBarIcon(IMAGES.RULES_ACTIVE, IMAGES.RULES_INACTIVE),
  },
  settings: {
    tabBarLabel: 'Settings',
    tabBarIcon: getRenderTabBarIcon(IMAGES.GEAR_ACTIVE, IMAGES.GEAR_INACTIVE),
  },
};
