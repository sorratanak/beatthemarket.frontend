import React, { useContext, useMemo } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { ThemeContext } from '../../contexts';
import { getThemedStyles } from './styles';

interface Props extends TouchableOpacityProps {
  children: React.ReactNode;
}

export function TouchableTile({
  style: propContainerStyle,
  children,
  ...props
}: Props) {
  const { theme } = useContext(ThemeContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <TouchableOpacity
      {...props}
      style={[themedStyles.container, propContainerStyle]}>
      {children}
    </TouchableOpacity>
  );
}
