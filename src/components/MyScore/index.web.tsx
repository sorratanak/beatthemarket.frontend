import React, { useContext, useMemo } from 'react';
import { View } from 'react-native';

import { ScoreList } from '..';
import { getThemedStyles } from './styles';
import { DUMMY_DATA } from './dummy';
import { ThemeContext } from '../../contexts';

interface Props {
  users: any[];
}

export function MyScore({ users }: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <View style={themedStyles.container}>
      <ScoreList data={DUMMY_DATA} />
    </View>
  );
}
