import React, { useContext, useMemo } from 'react';
import { Text } from 'react-native';

import { SettingsNestedScreenWrapper } from '../../components';
import { getThemedStyles } from './styles';
import { ThemeContext } from '../../contexts';
import { IMAGES } from '../../assets';

export function ExtraSubscriptions() {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <SettingsNestedScreenWrapper
      imageSource={IMAGES.SPEAKER}
      contentContainerStyle={themedStyles.contentContainer}
      style={themedStyles.container}>
      <Text />
    </SettingsNestedScreenWrapper>
  );
}
