import { ITheme } from '../themes/interface';

export const getThemedTabBarOptions = (theme: ITheme) => ({
  activeTintColor: theme.MENU.ACTIVE_LABEL_COLOR,
  inactiveTintColor: theme.MENU.INACTIVE_LABEL_COLOR,
  labelStyle: {
    fontSize: 10,
  },
  style: { backgroundColor: theme.MENU.BACKGROUND_COLOR },
});

export const commonHeaderOptions = {
  headerStyle: { backgroundColor: '#242436', borderBottomWidth: 0 },
  headerTintColor: 'rgba(255, 255, 255, 0.8)',
  headerTitleStyle: { color: 'white' },
  headerBackTitleVisible: false,
};

export const tabOptions = {
  main: {
    tabBarLabel: 'Main',
    tabBarIcon: () => null,
  },
  game: {
    tabBarLabel: 'Game',
    tabBarIcon: () => null,
  },
  settings: {
    tabBarLabel: 'Settings',
    tabBarIcon: () => null,
  },
};
