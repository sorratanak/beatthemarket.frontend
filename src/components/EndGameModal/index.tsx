import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { useQuery } from '@apollo/client';
import { getThemedStyles } from './styles';
import { ThemeContext } from '../../contexts';
import { IMAGES } from '../../assets';
import usersGraphql from '../../graphql/users';
import { ScoreBoard } from '../ScoreBoard';

export function EndGameModal() {
  const { theme } = useContext(ThemeContext);
  const themedStyles = getThemedStyles(theme);

  // Query
  // eslint-disable-next-line no-unused-vars
  const { data: users, loading: usersLoading, error: usersError } = useQuery(
    usersGraphql.queries.GET_USERS,
  );

  return (
    <View style={themedStyles.container}>
      <View style={themedStyles.subContainer}>
        <View style={themedStyles.titleContainer}>
          <Image source={IMAGES.WIN_GAME_LEFT} style={themedStyles.titleIcon} />
          <Text style={themedStyles.title}>End of game</Text>
          <Image
            source={IMAGES.WIN_GAME_RIGHT}
            style={themedStyles.titleIcon}
          />
        </View>
        <View style={themedStyles.contentContainer}>
          <View style={themedStyles.rankInfo}>
            <Text style={themedStyles.subTitle}>Lorem ipsum</Text>
            <View style={themedStyles.scoreBoardContainer}>
              <ScoreBoard users={users} />
            </View>
          </View>
          <View style={themedStyles.resultInfo}>
            <Text style={themedStyles.subTitle}>Cris Brown</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
