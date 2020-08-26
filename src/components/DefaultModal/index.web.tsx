import React from 'react';
import Modal from 'modal-react-native-web';

interface Props {
  isVisible: boolean;
  children: React.ReactNode;
}

export function DefaultModal({ isVisible, children, ...props }: Props) {
  return (
    <Modal
      animationType="slide"
      presentationStyle="FormSheet"
      transparent
      visible={isVisible}
      {...props}>
      {children}
    </Modal>
  );
}
