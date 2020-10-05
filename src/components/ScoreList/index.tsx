import React, { useCallback, useContext, useMemo } from 'react';
import { FlatList, View, Text } from 'react-native';

import { getThemedStyles } from './styles';
import { IScoreRecord } from '../../types';
import { ThemeContext } from '../../contexts';

interface Props {
  data: IScoreRecord[];
}
export function ScoreList({ data }: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const renderListHeader = useCallback(() => {
    return (
      <View style={themedStyles.rowContainer}>
        <Text style={[themedStyles.flexContainer, themedStyles.title]}>
          Rank
        </Text>
        <Text style={[themedStyles.flex3Container, themedStyles.title]}>
          Username
        </Text>
        <Text style={[themedStyles.flex2Container, themedStyles.title]}>
          Score
        </Text>
      </View>
    );
  }, [themedStyles]);

  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => (
        <ScoreListItem
          item={item}
          rank={index + 1}
          themedStyles={themedStyles}
        />
      )}
      ListHeaderComponent={renderListHeader()}
      keyExtractor={(item) => `score-record-${item.id}`}
      contentContainerStyle={themedStyles.listContentContainer}
      style={themedStyles.flexContainer}
    />
  );
}

interface ScoreListItemProps {
  item: IScoreRecord;
  rank: number;
  themedStyles: any;
}

function ScoreListItem({ item, rank, themedStyles }: ScoreListItemProps) {
  return (
    <View style={themedStyles.listItemContainer}>
      <View style={themedStyles.flexContainer}>
        <View style={themedStyles.rankContainer}>
          <Text style={themedStyles.rankText}>{rank}</Text>
        </View>
      </View>
      <Text style={[themedStyles.flex3Container, themedStyles.text]}>
        {item.username}
      </Text>
      <Text style={[themedStyles.flex2Container, themedStyles.text]}>
        {item.score}
      </Text>
    </View>
  );
}
