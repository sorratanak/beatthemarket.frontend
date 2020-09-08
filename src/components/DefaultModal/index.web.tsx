import React, { useContext, useMemo } from 'react';
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

export function DefaultModal({
  isVisible,
  onBackdropPress,
  isBackdrop = false,
  children,
  ...props
}: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

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
      {children}
    </Modal>
  );
}
