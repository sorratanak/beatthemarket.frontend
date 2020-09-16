import '../GestureHandler';
import React, {
  ReactNode,
  useContext,
  useMemo,
  useEffect,
  useState,
} from 'react';
import {
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ScaledSize,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

import { getThemedStyles } from './styles.web';
import { ThemeContext, GameContext, UserContext } from '../../contexts';
import { IMAGES } from '../../assets';
import { WEB_SCREEN_WIDTH_POINT } from '../../constants';

export const MainNavigator = createDrawerNavigator();

interface CustomDrawerContentProps extends DrawerContentComponentProps {
  themedStyles: any;
}
function CustomDrawerContent(props: CustomDrawerContentProps) {
  const { logout } = useContext(UserContext);
  const { themedStyles } = props;

  const navigation = useNavigation();

  const { gameId, isGamePaused, onPauseGame, onResumeGame } = useContext(
    GameContext,
  );

  return (
    <DrawerContentScrollView {...props}>
      <Text style={themedStyles.title}>Beat the Market</Text>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() => logout(navigation)}
        style={themedStyles.logoutContainer}
        labelStyle={themedStyles.logout}
      />
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
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const onDimensionsChange = ({ window }: { window: ScaledSize }) => {
      setDimensions(window);
    };

    Dimensions.addEventListener('change', onDimensionsChange);

    return () => Dimensions.removeEventListener('change', onDimensionsChange);
  }, []);

  const isLargeScreen = dimensions.width >= WEB_SCREEN_WIDTH_POINT;

  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <MainNavigator.Navigator
      drawerType={isLargeScreen ? 'permanent' : 'front'}
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
      drawerStyle={[
        themedStyles.container,
        !isLargeScreen ? themedStyles.containerMiniScreen : null,
      ]}>
      {children}
    </MainNavigator.Navigator>
  );
};
