import React from 'react';
import Modal from 'modal-react-native-web';

interface Props {
  isVisible: boolean;
  children: React.ReactNode;
}

export function DefaultModal({ isVisible, children }: Props) {
  return (
    <Modal
      animationType="slide"
      presentationStyle="FormSheet"
      transparent
      visible={isVisible}>
      {children}
    </Modal>
  );
}
