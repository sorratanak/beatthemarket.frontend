import React, { useContext, useMemo } from 'react';
import { View } from 'react-native';
import randomString from 'random-string';
import _ from 'lodash';

import { ScoreList } from '..';
import { getThemedStyles } from './styles';
import { ThemeContext } from '../../contexts';

interface Props {
  users: any[];
}

export function MyScore({ users }: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <View style={themedStyles.container}>
      <ScoreList
        data={_.map(users, (user, index) => ({
          id: randomString(),
          rank: index + 1,
          username: user.userName,
          score: null,
        }))}
      />
    </View>
  );
}
