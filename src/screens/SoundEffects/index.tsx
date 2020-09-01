import React, { useContext, useMemo } from 'react';

import { SettingsNestedScreenWrapper, SwitchRow } from '../../components';
import { getThemedStyles } from './styles';
import { ThemeContext } from '../../contexts';
import { IMAGES } from '../../assets';

export function SoundEffects() {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <SettingsNestedScreenWrapper
      imageSource={IMAGES.SPEAKER}
      contentContainerStyle={themedStyles.contentContainer}
      style={themedStyles.container}>
      <SwitchRow title="Title" switchValue onSwitchValueChange={() => {}} />
      <SwitchRow title="Title" switchValue onSwitchValueChange={() => {}} />
      <SwitchRow title="Title" switchValue onSwitchValueChange={() => {}} />
      <SwitchRow title="Title" switchValue onSwitchValueChange={() => {}} />
    </SettingsNestedScreenWrapper>
  );
}
