import React from 'react';
import { View, ViewStyle } from 'react-native';
import { styles } from './styles';

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
}

export function SettingsNestedScreenWrapper({ style, children }: Props) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.contentContainer}>{children}</View>
    </View>
  );
}
