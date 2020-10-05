import React, { useState, useCallback, useEffect, useContext } from 'react';
import _ from 'lodash';

import { DefaultModal, InfoModal } from '../components';
import { IMAGES } from '../assets';
import { UserContext } from './userContext';
import { IAlertItem } from '../types';

interface ContextProps {
  currentError: string;
  currentAlert: IAlertItem;
  onSetErrorModal: (newError: string) => void;
  onSetAlertModal: (newAlertItem: IAlertItem) => void;
}

const DEFAULT_MODAL_CONTEXT: ContextProps = {
  currentError: null,
  currentAlert: null,
  onSetErrorModal: _.noop,
  onSetAlertModal: _.noop,
};

export const ModalContext = React.createContext(DEFAULT_MODAL_CONTEXT);

const ContextProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const { user } = useContext(UserContext);

  /* ------ State ------ */
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

  return (
    <ModalContext.Provider
      value={{
        // Data
        currentError,
        currentAlert,

        // Functions
        onSetErrorModal,
        onSetAlertModal,
      }}>
      {children}

      <DefaultModal
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
        isVisible={!!currentAlert}
        isBackdrop
        onBackdropPress={onResetAlertModal}>
        <InfoModal
          onClosePress={onResetAlertModal}
          title={{ img: IMAGES.WARNING }}
          infoText={currentAlert?.title}
          firstButton={{
            text: 'Cancel',
            onPress: onResetAlertModal,
          }}
          secondButton={{
            text: 'Confirm',
            onPress: currentAlert?.onConfirmPress,
          }}
        />
      </DefaultModal>
    </ModalContext.Provider>
  );
};

export default ContextProvider;