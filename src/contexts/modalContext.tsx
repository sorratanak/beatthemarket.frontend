import React, { useState, useCallback, useEffect, useContext } from 'react';
import _ from 'lodash';

import { DefaultModal, InfoModal } from '../components';
import { IMAGES } from '../assets';
import { UserContext } from './userContext';
import { IAlertItem } from '../types';

interface ContextProps {
  currentError: string;
  currentAlert: IAlertItem;
  modalsVisibleState: { [id: string]: boolean };
  onSetErrorModal: (newError: string) => void;
  onSetAlertModal: (newAlertItem: IAlertItem) => void;
  writeModalVisibleState: (modalId: string, isVisible: boolean) => void;
}

const DEFAULT_MODAL_CONTEXT: ContextProps = {
  currentError: null,
  currentAlert: null,
  modalsVisibleState: null,
  onSetErrorModal: _.noop,
  onSetAlertModal: _.noop,
  writeModalVisibleState: _.noop,
};

export const ModalContext = React.createContext(DEFAULT_MODAL_CONTEXT);

const ContextProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const { user } = useContext(UserContext);

  /* ------ State ------ */
  const [modalsVisibleState, setModalsVisibleState] = useState<{
    [id: string]: boolean;
  }>({});
  const [currentError, setCurrentError] = useState<string>(null);
  const [currentAlert, setCurrentAlert] = useState<IAlertItem>(null);

  /* ------ Reset states when logout ------ */
  useEffect(() => {
    if (!user) {
      setCurrentError(null);
      setCurrentAlert(null);
    }
  }, [user]);

  /* ------ Callbacks ------ */
  const onSetErrorModal = useCallback(
    (newError: string) => {
      setCurrentError(newError);
    },
    [setCurrentError],
  );
  const onResetErrorModal = useCallback(() => {
    onSetErrorModal(null);
  }, [onSetErrorModal]);

  const onSetAlertModal = useCallback(
    (newAlertItem: IAlertItem) => {
      setCurrentAlert(newAlertItem);
    },
    [setCurrentAlert],
  );
  const onResetAlertModal = useCallback(() => {
    onSetAlertModal(null);
  }, [onSetAlertModal]);

  const writeModalVisibleState = useCallback(
    (modalId: string, isVisible: boolean) => {
      const newModalsVisibleState = { ...modalsVisibleState };
      newModalsVisibleState[modalId] = isVisible;
      setModalsVisibleState(newModalsVisibleState);
    },
    [modalsVisibleState, setModalsVisibleState],
  );

  return (
    <ModalContext.Provider
      value={{
        // Data
        currentError,
        currentAlert,
        modalsVisibleState,

        // Functions
        onSetErrorModal,
        onSetAlertModal,
        writeModalVisibleState,
      }}>
      {children}

      <DefaultModal
        modalId="error-modal"
        isVisible={!!currentError}
        isBackdrop
        onBackdropPress={onResetErrorModal}>
        <InfoModal
          onClosePress={onResetErrorModal}
          title={{ img: IMAGES.ERROR }}
          infoText={currentError}
          firstButton={{
            text: 'OK',
            onPress: onResetErrorModal,
          }}
        />
      </DefaultModal>

      <DefaultModal
        modalId="warning-modal"
        isVisible={!!currentAlert}
        isBackdrop
        onBackdropPress={onResetAlertModal}>
        <InfoModal
          onClosePress={onResetAlertModal}
          title={{ img: IMAGES.WARNING }}
          infoText={currentAlert?.title}
          firstButton={{
            text: 'Confirm',
            onPress: currentAlert?.onConfirmPress,
          }}
          secondButton={{
            text: 'Cancel',
            onPress: onResetAlertModal,
          }}
        />
      </DefaultModal>
    </ModalContext.Provider>
  );
};

export default ContextProvider;
