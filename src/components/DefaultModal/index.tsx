import React, { useContext, useEffect, useState } from 'react';
import { ViewStyle } from 'react-native';
import Modal from 'react-native-modal';
import randomString from 'random-string';
import _ from 'lodash';

import { GameContext, ModalContext } from '../../contexts';

interface Props {
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
  ...props
}: Props) {
  const [id] = useState(randomString());

  const { gameId, isGamePaused, onPauseGame, onResumeGame } = useContext(
    GameContext,
  );
  const { modalsVisibleState, writeModalVisibleState } = useContext(
    ModalContext,
  );

  useEffect(() => {
    if (isConnectedToGame && gameId) {
      if (!isGamePaused && _.some(Object.values(modalsVisibleState))) {
        onPauseGame();
      }

      if (isGamePaused && !_.every(Object.values(modalsVisibleState))) {
        onResumeGame();
      }
    }
  }, [gameId, modalsVisibleState]);

  useEffect(() => {
    writeModalVisibleState(id, isVisible);
  }, [isVisible]);

  return (
    <Modal isVisible={isVisible} {...props}>
      {children}
    </Modal>
  );
}
