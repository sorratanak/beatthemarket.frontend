import React, { useContext } from 'react';
import { Text, Image, View } from 'react-native';
import { ThemeContext } from '../../contexts';
import { getThemedStyles } from './styles';

interface Props {
  item: {
    id: string;
    number: HTMLImageElement;
    image: HTMLImageElement;
    text: string;
  };
}

export function RuleBlock({ item }: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = getThemedStyles(theme);
  let bgColor = '';
  switch (item.id) {
    case 'first-block':
      bgColor = theme.RULES.FIRST_RULE_BACKGROUND_COLOR;
      break;
    case 'second-block':
      bgColor = theme.RULES.SECOND_RULE_BACKGROUND_COLOR;
      break;
    case 'third-block':
      bgColor = theme.RULES.THIRD_RULE_BACKGROUND_COLOR;
      break;
    case 'fourth-block':
      bgColor = theme.RULES.FOURTH_RULE_BACKGROUND_COLOR;
      break;

    default:
      bgColor = theme.DEFAULT.PRIMARY_BACKGROUND_COLOR;
      break;
  }
  return (
    <View style={[themedStyles.tilesContainer, { backgroundColor: bgColor }]}>
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
