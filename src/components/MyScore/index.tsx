import React, { useContext, useMemo } from 'react';
import { View } from 'react-native';
import randomString from 'random-string';
import _ from 'lodash';

import { ScoreRow } from '../ScoreRow';
import { ScoreList } from '../ScoreList';
import { getThemedStyles } from './styles';
import { ThemeContext } from '../../contexts';
import { IBoardUser } from '../../types';
import { selectBestUserScore } from '../../utils/parsing';

interface Props {
  users: IBoardUser[];
}

export function MyScore({ users }: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <View style={themedStyles.container}>
      <ScoreRow />
      <ScoreList
        data={_.map(users, (user, index) => ({
          id: randomString(),
          rank: index + 1,
          username: user.userName,
          score: selectBestUserScore(user),
        }))}
      />
    </View>
  );
}
