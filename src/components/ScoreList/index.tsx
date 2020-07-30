import React, { useCallback } from 'react';
import { FlatList, View, Text } from 'react-native';

import { styles } from './styles';
import { IScoreRecord } from '../../types';

interface Props {
  data: IScoreRecord[];
}
export function ScoreList({ data }: Props) {
  const renderListHeader = useCallback(() => {
    return (
      <View style={styles.rowContainer}>
        <Text style={[styles.flexContainer, styles.title]}>Rank</Text>
        <Text style={[styles.flex2Container, styles.title]}>Username</Text>
        <Text style={[styles.flex2Container, styles.title]}>Score</Text>
      </View>
    );
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ScoreListItem item={item} />}
      ListHeaderComponent={renderListHeader()}
      keyExtractor={(item) => `score-record-${item.id}`}
      contentContainerStyle={styles.listContentContainer}
      style={styles.listContainer}
    />
  );
}

interface ScoreListItemProps {
  item: IScoreRecord;
}

function ScoreListItem({ item }: ScoreListItemProps) {
  return (
    <View style={styles.listItemContainer}>
      <View style={styles.flexContainer}>
        <View style={styles.rankContainer}>
          <Text style={styles.rankText}>{item.rank}</Text>
        </View>
      </View>
      <Text style={[styles.flex2Container, styles.text]}>{item.username}</Text>
      <Text style={[styles.flex2Container, styles.text]}>{item.score}</Text>
    </View>
  );
}
