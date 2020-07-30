import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { MyScore } from '../MyScore';

interface Props {}

const TAB_NAMES = {
  MY_SCORE: 'My Score',
  GLOBAL: 'Global',
};

export function ScoreBoard({}: Props) {
  const [currentTab, setCurrentTab] = useState(TAB_NAMES.MY_SCORE);

  const renderTabs = useCallback(() => {
    return (
      <View style={styles.tabsRow}>
        <TouchableOpacity
          style={[
            styles.tabContainer,
            currentTab === TAB_NAMES.MY_SCORE
              ? styles.tabActiveContainer
              : null,
          ]}
          disabled={currentTab === TAB_NAMES.MY_SCORE}
          onPress={() => setCurrentTab(TAB_NAMES.MY_SCORE)}>
          <Text style={styles.tabTitle}>{TAB_NAMES.MY_SCORE}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabContainer,
            currentTab === TAB_NAMES.GLOBAL ? styles.tabActiveContainer : null,
          ]}
          disabled={currentTab === TAB_NAMES.GLOBAL}
          onPress={() => setCurrentTab(TAB_NAMES.GLOBAL)}>
          <Text style={styles.tabTitle}>{TAB_NAMES.GLOBAL}</Text>
        </TouchableOpacity>
      </View>
    );
  }, [currentTab]);

  return (
    <View style={styles.container}>
      {renderTabs()}
      <MyScore percent="75%" deposit="$133.55" rate="+13.76%" />
    </View>
  );
}
