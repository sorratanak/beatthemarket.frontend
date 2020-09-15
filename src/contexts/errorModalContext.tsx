import React, { useState, useCallback } from 'react';
import _ from 'lodash';

import { DefaultModal, InfoModal } from '../components';
import { IMAGES } from '../assets';

interface ContextProps {
  currentError: string;
  onSetErrorModal: (newError: string) => void;
}

const DEFAULT_ERROR_MODAL_CONTEXT: ContextProps = {
  currentError: null,
  onSetErrorModal: _.noop,
};

export const ErrorModalContext = React.createContext(
  DEFAULT_ERROR_MODAL_CONTEXT,
);

const ContextProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  /* ------ State ------ */
  const [currentError, setCurrentError] = useState<string>(null);

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

  return (
    <ErrorModalContext.Provider
      value={{
        // Data
        currentError,

        // Functions
        onSetErrorModal,
      }}>
      {children}

      <DefaultModal
        isVisible={!!currentError}
        isBackdrop
        onBackdropPress={onResetErrorModal}>
        <InfoModal
          onClosePress={onResetErrorModal}
          title={{ text: 'Something went wrong', img: IMAGES.ERROR }}
          infoText={currentError}
          firstButton={{
            text: 'OK',
            onPress: onResetErrorModal,
          }}
        />
      </DefaultModal>
    </ErrorModalContext.Provider>
  );
};

export default ContextProvider;
