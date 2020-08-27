import React, { useContext, useMemo } from 'react';
import { View } from 'react-native';

import { ScoreRow } from '../ScoreRow';
import { ScoreList } from '../ScoreList';
import { getThemedStyles } from './styles';
import { IScore } from '../../types';
import { DUMMY_DATA } from './dummy';
import { ThemeContext } from '../../contexts';

interface Props extends IScore {
  users: any[];
}

export function MyScore({ users, percent, deposit, rate }: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <View style={themedStyles.container}>
      <ScoreRow percent={percent} deposit={deposit} rate={rate} />
      <ScoreList data={DUMMY_DATA} />
    </View>
  );
}
