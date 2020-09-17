import React, { ReactNode, useState, useEffect } from 'react';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScaledSize,
  ViewProps,
} from 'react-native';
import { WEB_SCREEN_WIDTH_POINT } from '../../constants';
import styles from './styles';
import { IMAGES } from '../../assets';

interface Props extends ViewProps {
  children: ReactNode;
}

export function ContainerWithBurgerMenu({ children, style }: Props) {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  const navigation = useNavigation();

  useEffect(() => {
    const onDimensionsChange = ({ window }: { window: ScaledSize }) => {
      setDimensions(window);
    };

    Dimensions.addEventListener('change', onDimensionsChange);

    return () => Dimensions.removeEventListener('change', onDimensionsChange);
  }, []);

  const isDrawerOpen = useIsDrawerOpen();
  const isLargeScreen = dimensions.width >= WEB_SCREEN_WIDTH_POINT;
  const isBurgerMenu = !isLargeScreen && !isDrawerOpen;

  return (
    <View style={style}>
      {isBurgerMenu && (
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
          style={styles.burgerContainer}>
          <Image source={IMAGES.BURGER_MENU} style={styles.burgerImage} />
        </TouchableOpacity>
      )}
      {children}
    </View>
  );
}
