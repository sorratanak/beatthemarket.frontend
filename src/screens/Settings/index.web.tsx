import React, { useContext, useCallback, useMemo, useState } from 'react';
import { Text, Image, View } from 'react-native';

import { TilesList, ContainerWithBurgerMenu } from '../../components';
import { getThemedStyles } from './styles';
import { ThemeContext } from '../../contexts';
import { SETTINGS_TILES, SETTINGS_NAV_TYPES } from './tiles';

// Tabs / Screens
import { Subscriptions } from '../Subscriptions';
import { ExtraSubscriptions } from '../ExtraSubscriptions';
import { Music } from '../Music';
import { UserSettings } from '../UserSettings';
import { SoundEffects } from '../SoundEffects';

export function Settings() {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const [selectedTab, setSelectedTab] = useState(SETTINGS_TILES[0].nav);

  const onSelectTile = useCallback(
    (item: any) => {
      const { nav: newSelectedTab } = item;
      setSelectedTab(newSelectedTab);
    },
    [setSelectedTab],
  );

  const renderSelectedScreen = useCallback(() => {
    switch (selectedTab) {
      case SETTINGS_NAV_TYPES.SUBSCRIPTIONS:
        return <Subscriptions />;
      // case SETTINGS_NAV_TYPES.EXTRA_SUBSCRIPTIONS:
      //   return <ExtraSubscriptions />;
      case SETTINGS_NAV_TYPES.SOUND_EFFECTS:
        return <SoundEffects />;
      case SETTINGS_NAV_TYPES.MUSIC:
        return <Music />;
      case SETTINGS_NAV_TYPES.USER_SETTINGS:
        return <UserSettings />;
      default:
        return null;
    }
  }, [selectedTab]);

  return (
    <ContainerWithBurgerMenu style={themedStyles.container}>
      <TilesList
        onTilePress={onSelectTile}
        numColumns={1}
        tileStyle={themedStyles.tileContainer}
        data={SETTINGS_TILES}
        keyExtractor={(item) => `navigate-${item.id}`}
        renderItem={({ item }) => (
          <View style={themedStyles.tileContentContainer}>
            <Image source={item.source} style={themedStyles.tileImage} />
            <Text style={themedStyles.tileTitle}>{item.title}</Text>
          </View>
        )}
      />
      <View style={themedStyles.settingsContainer}>
        {renderSelectedScreen()}
      </View>
    </ContainerWithBurgerMenu>
  );
}
