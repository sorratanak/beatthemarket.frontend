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
    <View style={themedStyles.tilesContainer}>
      <Image source={item.number} style={themedStyles.numberImg} />
      <Text style={themedStyles.descriptionRules}>{item.text}</Text>
    </View>
  );
}
