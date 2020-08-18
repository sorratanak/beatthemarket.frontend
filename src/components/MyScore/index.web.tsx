import React from 'react';
import { View } from 'react-native';

import { ScoreList } from '..';
import { styles } from './styles';
import { DUMMY_DATA } from './dummy';

interface Props {
  users: any[];
}

export function MyScore({ users }: Props) {
  return (
    <View style={styles.container}>
      <ScoreList data={DUMMY_DATA} />
    </View>
  );
}
