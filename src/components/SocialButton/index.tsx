import React, { useContext, useMemo } from 'react';
import { TouchableOpacity, Image, ViewStyle, ImageStyle } from 'react-native';

import { ThemeContext } from '../../contexts';
import { getThemedStyles } from './styles';

interface Props {
  imageSource: any;
  onPress: () => void;
  style?: {
    container?: ViewStyle;
    image?: ImageStyle;
  };
}

export function SocialButton({
  onPress,
  imageSource,
  style: propStyle = {},
}: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[themedStyles.container, propStyle.container]}>
      <Image
        source={imageSource}
        style={[themedStyles.image, propStyle.image]}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}
