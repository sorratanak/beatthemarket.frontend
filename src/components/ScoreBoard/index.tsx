import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { MyScore } from '../MyScore';
import { styles } from './styles';

const TAB_NAMES = {
  SINGLE_PLAYER: 'Single player',
  MULTIPLAYER: 'Multi player',
};

interface Props {
  users: any[];
}

export function ScoreBoard({ users }: Props) {
  const [currentTab, setCurrentTab] = useState(TAB_NAMES.SINGLE_PLAYER);

  const renderTabs = useCallback(() => {
    return (
      <View style={styles.tabsRow}>
        <TouchableOpacity
          style={[
            styles.tabContainer,
            currentTab === TAB_NAMES.SINGLE_PLAYER
              ? styles.tabActiveContainer
              : null,
          ]}
          disabled={currentTab === TAB_NAMES.SINGLE_PLAYER}
          onPress={() => setCurrentTab(TAB_NAMES.SINGLE_PLAYER)}>
          <Text style={styles.tabTitle}>{TAB_NAMES.SINGLE_PLAYER}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabContainer,
            currentTab === TAB_NAMES.MULTIPLAYER
              ? styles.tabActiveContainer
              : null,
          ]}
          disabled={currentTab === TAB_NAMES.MULTIPLAYER}
          onPress={() => setCurrentTab(TAB_NAMES.MULTIPLAYER)}>
          <Text style={styles.tabTitle}>{TAB_NAMES.MULTIPLAYER}</Text>
        </TouchableOpacity>
      </View>
    );
  }, [currentTab]);

  return (
    <View style={styles.container}>
      {renderTabs()}
      <MyScore users={users} percent="75%" deposit="$133.55" rate="+13.76%" />
    </View>
  );
}
