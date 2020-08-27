import React, { useContext, useMemo } from 'react';
import { Text, Image, View } from 'react-native';
import { ThemeContext } from '../../contexts';
import { getThemedStyles } from './styles';

interface Props {
  item: {
    id: string;
    number: HTMLImageElement;
    image: HTMLImageElement;
    text: string;
    bgColor: string;
  };
}

export function RuleBlock({ item }: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <View
      style={[themedStyles.tilesContainer, { backgroundColor: item.bgColor }]}>
      <Image source={item.number} style={themedStyles.numberImg} />
      <View style={themedStyles.mainImgContainer}>
        <Image
          source={item.image}
          style={themedStyles.mainImg}
          resizeMode="contain"
        />
      </View>
      <Text style={themedStyles.descriptionRules}>{item.text}</Text>
    </View>
  );
}
