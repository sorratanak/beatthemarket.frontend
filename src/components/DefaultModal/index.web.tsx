import React, { useContext, useMemo, useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Modal from 'modal-react-native-web';
import { ThemeContext } from '../../contexts';
import { getThemedStyles } from './styles';

interface Props {
  isVisible: boolean;
  onBackdropPress?: () => void;
  isBackdrop?: boolean;
  children: React.ReactNode;
}

const MAX_OPACITY_VALUE = 1;

const MODAL_CLOSING_DURATION = 500;

export function DefaultModal({
  isVisible,
  onBackdropPress,
  isBackdrop = false,
  children,
  ...props
}: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  // Render only when modal is visible + closing animation
  const [isRenderModalContent, setIsRenderModalContent] = useState(false);
  useEffect(() => {
    if (isVisible) {
      setIsRenderModalContent(isVisible);
    } else {
      setTimeout(
        () => setIsRenderModalContent(isVisible),
        MODAL_CLOSING_DURATION,
      );
    }
  }, [isVisible]);

  return (
    <Modal
      animationType="slide"
      presentationStyle="FormSheet"
      transparent
      visible={isVisible}
      {...props}>
      {isBackdrop && (
        <TouchableOpacity
          activeOpacity={MAX_OPACITY_VALUE}
          onPress={onBackdropPress}
          style={themedStyles.backdropContainer}
        />
      )}
      {isRenderModalContent && children}
    </Modal>
  );
}
