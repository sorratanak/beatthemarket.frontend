import React, { useContext, useMemo } from 'react';

import { SettingsNestedScreenWrapper, DefaultButton } from '../../components';
import { getThemedStyles } from './styles';
import { ThemeContext, UserContext } from '../../contexts';
import { IMAGES } from '../../assets';

export function UserSettings() {
  const { theme } = useContext(ThemeContext);
  const { logout } = useContext(UserContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <SettingsNestedScreenWrapper
      imageSource={IMAGES.USER}
      style={themedStyles.container}>
      <DefaultButton
        onPress={logout}
        style={{
          container: themedStyles.buttonContainer,
          text: themedStyles.buttonText,
        }}>
        Logout
      </DefaultButton>
    </SettingsNestedScreenWrapper>
  );
}
