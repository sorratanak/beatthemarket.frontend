import React from 'react';
import Modal from 'react-native-modal';

interface Props {
  isVisible: boolean;
  children: React.ReactNode;
}

export function DefaultModal({ isVisible, children }: Props) {
  return <Modal isVisible={isVisible}>{children}</Modal>;
}
