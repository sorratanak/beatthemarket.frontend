import React from 'react';
import { ViewStyle } from 'react-native';
import Modal from 'react-native-modal';

interface Props {
  isVisible: boolean;
  children: React.ReactNode;
  onBackdropPress?: () => void;
  style?: ViewStyle;
}

export function DefaultModal({ isVisible, children, ...props }: Props) {
  return (
    <Modal isVisible={isVisible} {...props}>
      {children}
    </Modal>
  );
}
