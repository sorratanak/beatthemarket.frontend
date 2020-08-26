import React, { useContext, useCallback } from 'react';
import { View, Text, Image } from 'react-native';
import { getThemedStyles } from './styles';
import { ThemeContext } from '../../contexts';
import { DefaultButton } from '../DefaultButton';

interface Props {
  onClosePress: () => void;
  title: { text?: string; img?: HTMLImageElement };
  infoText: string;
  firstButton?: { text?: string; onPress?: () => void };
  secondButton?: { text?: string; onPress?: () => void };
}

export function InfoModal({
  onClosePress,
  title,
  infoText,
  firstButton,
  secondButton,
}: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = getThemedStyles(theme);

  const onButtonPress = useCallback(
    (onPress: () => void) => {
      onPress();
      onClosePress();
    },
    [onClosePress],
  );

  return (
    <View style={themedStyles.container}>
      <View style={themedStyles.subContainer}>
        <View style={themedStyles.titleContainer}>
          {title?.text && (
            <Text style={themedStyles.titleText}>{title.text}</Text>
          )}
          {title?.img && (
            <Image style={themedStyles.titleImg} source={title.img} />
          )}
        </View>
        <View style={themedStyles.infoContainer}>
          <Text style={themedStyles.infoText}>{infoText}</Text>
        </View>
        <View
          style={
            firstButton?.text && secondButton?.text
              ? themedStyles.twoButtonsContainer
              : themedStyles.oneButtonContainer
          }>
          {firstButton?.text && (
            <DefaultButton
              onPress={() => onButtonPress(firstButton.onPress)}
              style={{
                text: themedStyles.buttonText,
                container:
                  title?.img && secondButton?.text
                    ? themedStyles.firstButtonAccent
                    : themedStyles.firstButton,
              }}>
              {firstButton.text}
            </DefaultButton>
          )}
          {secondButton?.text && (
            <DefaultButton
              onPress={() => onButtonPress(secondButton.onPress)}
              style={{
                text: themedStyles.buttonText,
                container:
                  title?.text && secondButton?.text
                    ? themedStyles.secondButtonAccent
                    : themedStyles.secondButton,
              }}>
              {secondButton.text}
            </DefaultButton>
          )}
        </View>
      </View>
    </View>
  );
}