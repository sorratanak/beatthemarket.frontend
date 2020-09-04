import React, { useState, useCallback, useContext, useMemo } from 'react';
import { View, Text, TouchableOpacity, ViewProps } from 'react-native';

import { MyScore } from '../MyScore';
import { ThemeContext } from '../../contexts';
import { getThemedStyles } from './styles';

const TAB_NAMES = {
  SINGLE_PLAYER: 'Single player',
  MULTIPLAYER: 'Multi player',
};

interface Props extends ViewProps {
  users: any[];
  isTabsVisible?: boolean;
}

export function ScoreBoard({
  users,
  isTabsVisible = true,
  style: propsStyle,
}: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const [currentTab, setCurrentTab] = useState(TAB_NAMES.SINGLE_PLAYER);

  const renderTabs = useCallback(() => {
    return (
      <View style={themedStyles.tabsRow}>
        <TouchableOpacity
          style={[
            themedStyles.tabContainer,
            currentTab === TAB_NAMES.SINGLE_PLAYER
              ? themedStyles.tabActiveContainer
              : null,
          ]}
          disabled={currentTab === TAB_NAMES.SINGLE_PLAYER}
          onPress={() => setCurrentTab(TAB_NAMES.SINGLE_PLAYER)}>
          <Text style={themedStyles.tabTitle}>{TAB_NAMES.SINGLE_PLAYER}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            themedStyles.tabContainer,
            currentTab === TAB_NAMES.MULTIPLAYER
              ? themedStyles.tabActiveContainer
              : null,
          ]}
          disabled={currentTab === TAB_NAMES.MULTIPLAYER}
          onPress={() => setCurrentTab(TAB_NAMES.MULTIPLAYER)}>
          <Text style={themedStyles.tabTitle}>{TAB_NAMES.MULTIPLAYER}</Text>
        </TouchableOpacity>
      </View>
    );
  }, [currentTab, themedStyles]);

  return (
    <View style={[themedStyles.container, propsStyle]}>
      {isTabsVisible && renderTabs()}
      <MyScore users={users} percent="75%" deposit="..." rate="+13.76%" />
    </View>
  );
}
