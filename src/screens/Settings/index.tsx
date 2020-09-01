import React, { useContext, useCallback, useMemo } from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';

import { TilesList } from '../../components';
import { getThemedStyles } from './styles';
import { ThemeContext } from '../../contexts';
import { ScreenProps } from './props';
import { SETTINGS_TILES } from './tiles';

export function Settings({ navigation }: ScreenProps) {
  const { theme } = useContext(ThemeContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const onNavigateTile = useCallback((item: any) => {
    const { nav } = item;
    if (nav) {
      navigation.navigate(nav);
    }
  }, []);

  return (
    <SafeAreaView style={themedStyles.container}>
      <View style={themedStyles.container}>
        <Text style={themedStyles.title}>Settings</Text>
        <TilesList
          data={SETTINGS_TILES}
          renderItem={({ item }) => (
            <Image source={item.source} style={themedStyles.tileImage} />
          )}
          onTilePress={onNavigateTile}
          keyExtractor={(item) => `navigate-${item.id}`}
          contentContainerStyle={themedStyles.tileContentContainer}
          tileStyle={themedStyles.tileContainer}
        />
      </View>
    </SafeAreaView>
  );
}
