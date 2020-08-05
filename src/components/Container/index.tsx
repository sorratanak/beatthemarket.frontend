import React, { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import { styles } from './styles';

interface Props {
  children: ReactNode | ReactNode[];
  style?: ViewStyle;
  testID?: string;
}

export function Container({ children, style: propStyle, testID }: Props) {
  return (
    <View style={[styles.center, propStyle]} testID={testID}>
      {children}
    </View>
  );
}
