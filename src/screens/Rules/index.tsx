import React, { useContext, useMemo } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';

import { RuleBlock } from '../../components';
import { getThemedStyles } from './styles';
import { ThemeContext } from '../../contexts';
import { getThemedRules } from './tiles';

export function Rules() {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);
  const themedRules = useMemo(() => getThemedRules(theme), [theme]);

  return (
    <SafeAreaView style={themedStyles.container}>
      <View style={themedStyles.container}>
        <Text style={themedStyles.title}>Rules</Text>
        <FlatList
          data={themedRules}
          renderItem={({ item }) => <RuleBlock item={item} />}
          keyExtractor={(item) => `rule-info-${item.id}`}
        />
      </View>
    </SafeAreaView>
  );
}
