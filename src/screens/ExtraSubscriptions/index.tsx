import React, { useContext, useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { SettingsNestedScreenWrapper, DefaultButton } from '../../components';
import { getThemedStyles } from './styles';
import { ThemeContext } from '../../contexts';
import { IMAGES } from '../../assets';

export function ExtraSubscriptions() {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <SettingsNestedScreenWrapper
      imageSource={IMAGES.FIRE}
      contentContainerStyle={themedStyles.contentContainer}
      style={themedStyles.container}>
      <TouchableOpacity
        onPress={() => {}}
        style={themedStyles.selectedContainer}>
        <Text style={themedStyles.selectedValue}>5$</Text>
        <Text style={themedStyles.selectedDescription}>
          Extra subscription buys margin trading
        </Text>
      </TouchableOpacity>
      <DefaultButton
        onPress={() => {}}
        style={{
          container: themedStyles.buttonContainer,
        }}>
        Buy
      </DefaultButton>
    </SettingsNestedScreenWrapper>
  );
}
