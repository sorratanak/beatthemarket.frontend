import React from 'react';
import { View, Image, ViewStyle } from 'react-native';
import { TouchableTile } from '../TouchableTile';
import { styles } from './styles';
import { Container } from '../Container';

interface Props {
  imageSource: any;
  children: React.ReactNode;
  style?: ViewStyle;
}

export function SettingsNestedScreenWrapper({
  style,
  imageSource,
  children,
}: Props) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.imageContainer}>
        <TouchableTile disabled style={styles.imageTile}>
          <Image source={imageSource} style={styles.image} />
        </TouchableTile>
      </View>
      <View style={styles.contentContainer}>{children}</View>
    </View>
  );
}
