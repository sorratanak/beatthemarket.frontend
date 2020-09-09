import React, { useContext, useMemo } from 'react';
import {
  TouchableOpacity,
  Image,
  Text,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';

import { ThemeContext } from '../../contexts';
import { getThemedStyles } from './styles';

interface Props {
  title: string;
  image: any;
  onPress: () => void;
  style?: {
    container?: ViewStyle;
    title?: TextStyle;
    image?: ImageStyle;
  };
}

export function PayButton({
  title,
  image,
  style: propStyle = {},
  onPress,
}: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[themedStyles.container, propStyle.container]}>
      <Image source={image} style={[themedStyles.image, propStyle.image]} />
      <Text style={[themedStyles.title, propStyle.title]}>{title}</Text>
    </TouchableOpacity>
  );
}
