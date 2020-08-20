import React, { ReactNode } from 'react';
import { SafeAreaView, ViewStyle } from 'react-native';
import { styles } from './styles';

interface Props {
  children: ReactNode | ReactNode[];
  style?: ViewStyle;
  testID?: string;
}

export function Container({ children, style: propStyle, testID }: Props) {
  return (
    <SafeAreaView style={[styles.center, propStyle]} testID={testID}>
      {children}
    </SafeAreaView>
  );
}
