import React, { useContext, useEffect, useState } from 'react';
import { ViewStyle } from 'react-native';
import Modal from 'react-native-modal';

import { ModalContext } from '../../contexts';

interface Props {
  modalId: string;
  isVisible: boolean;
  children: React.ReactNode;
  onBackdropPress?: () => void;
  isConnectedToGame?: boolean;
  isBackdrop?: boolean;
  style?: ViewStyle;
}

export function DefaultModal({
  isVisible,
  isConnectedToGame = true,
  children,
  modalId,
  ...props
}: Props) {
  const [id] = useState(modalId);

  const { writeModalVisibleState } = useContext(ModalContext);

  useEffect(() => {
    if (isConnectedToGame) {
      writeModalVisibleState(id, isVisible);
    }
  }, [isVisible]);

  return (
    <Modal isVisible={isVisible} {...props}>
      {children}
    </Modal>
  );
}
