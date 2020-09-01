import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { ITheme } from '../themes/interface';
import { IMAGES } from '../assets';
import { LIGHT_THEME } from '../themes';

export const withoutHeaderOptions = { headerShown: false };

export const getThemedHeaderOptions = (theme: ITheme) => ({
  headerStyle: {
    backgroundColor: theme.DEFAULT.SECONDARY_BACKGROUND_COLOR,
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
  headerTintColor: theme.DEFAULT.TEXT_COLOR,
});

export const getThemedTabBarOptions = (theme: ITheme) => ({
  activeTintColor: theme.MENU.ACTIVE_LABEL_COLOR,
  inactiveTintColor: theme.MENU.INACTIVE_LABEL_COLOR,
  labelStyle: {
    fontSize: 10,
  },
  style: {
    borderTopWidth: theme === LIGHT_THEME ? 1.5 : 0,
    backgroundColor: theme.MENU.BACKGROUND_COLOR,
  },
});

export const commonHeaderOptions = {
  headerStyle: { backgroundColor: '#242436', borderBottomWidth: 0 },
  headerTintColor: 'rgba(255, 255, 255, 0.8)',
  headerTitleStyle: { color: 'white' },
  headerBackTitleVisible: false,
};

interface IconProps {
  inactiveSource: any;
  activeSource: any;
  isSelected: boolean;
}
function TabBarIcon({ inactiveSource, activeSource, isSelected }: IconProps) {
  return <Image source={isSelected ? activeSource : inactiveSource} />;
}

function DrawerIcon({ inactiveSource, activeSource, isSelected }: IconProps) {
  const styles = StyleSheet.create({
    iconContainer: {
      width: 26,
      height: inactiveSource === IMAGES.JOYSTICK_INACTIVE ? 19 : 26,
      marginRight: -20,
    },
  });

  return (
    <View style={styles.iconContainer}>
      <Image
        source={isSelected ? activeSource : inactiveSource}
        style={{ flex: 1 }}
      />
    </View>
  );
}

const getRenderIcon = (activeSource, inactiveSource, IconComponent) => ({
  focused,
}) => (
  <IconComponent
    activeSource={activeSource}
    inactiveSource={inactiveSource}
    isSelected={focused}
  />
);

export const tabOptions = {
  main: {
    labelStyle: {
      backgroundColor: 'red',
    },
    tabBarLabel: 'Main',
    tabBarIcon: getRenderIcon(
      IMAGES.HOME_ACTIVE,
      IMAGES.HOME_INACTIVE,
      TabBarIcon,
    ),
    drawerIcon: getRenderIcon(
      IMAGES.HOME_ACTIVE,
      IMAGES.HOME_INACTIVE,
      DrawerIcon,
    ),
  },
  game: {
    tabBarLabel: 'Game',
    tabBarIcon: getRenderIcon(
      IMAGES.JOYSTICK_ACTIVE,
      IMAGES.JOYSTICK_INACTIVE,
      TabBarIcon,
    ),
    drawerIcon: getRenderIcon(
      IMAGES.JOYSTICK_ACTIVE,
      IMAGES.JOYSTICK_INACTIVE,
      DrawerIcon,
    ),
  },
  rules: {
    tabBarLabel: 'Rules',
    tabBarIcon: getRenderIcon(
      IMAGES.RULES_ACTIVE,
      IMAGES.RULES_INACTIVE,
      TabBarIcon,
    ),
    drawerIcon: getRenderIcon(
      IMAGES.RULES_ACTIVE,
      IMAGES.RULES_INACTIVE,
      DrawerIcon,
    ),
  },
  settings: {
    tabBarLabel: 'Settings',
    tabBarIcon: getRenderIcon(
      IMAGES.GEAR_ACTIVE,
      IMAGES.GEAR_INACTIVE,
      TabBarIcon,
    ),
    drawerIcon: getRenderIcon(
      IMAGES.GEAR_ACTIVE,
      IMAGES.GEAR_INACTIVE,
      DrawerIcon,
    ),
  },
};
