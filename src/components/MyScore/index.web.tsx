import React, { useContext, useMemo } from 'react';
import { View } from 'react-native';
import randomString from 'random-string';
import _ from 'lodash';

import { ScoreList } from '..';
import { getThemedStyles } from './styles';
import { ThemeContext } from '../../contexts';
import { IBoardUser } from '../../types';
import { selectBestUserScore } from '../../utils/parsing';
import { ANONYMOUS_USERNAME } from '../../constants';

interface Props {
  users: IBoardUser[];
}

export function MyScore({ users }: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const parsedUsers = useMemo(
    () =>
      _.orderBy(
        _.map(users, (user) => ({
          id: randomString(),
          username: user.userName || ANONYMOUS_USERNAME,
          score: selectBestUserScore(user),
        })).filter((us) => us.username !== ANONYMOUS_USERNAME || us.score),
        ['score'],
        'desc',
      ),
    [users],
  );

  return (
    <View style={themedStyles.container}>
      <ScoreList data={parsedUsers} />
    </View>
  );
}
