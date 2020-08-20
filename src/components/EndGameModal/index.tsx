import React, { useContext } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import { getThemedStyles } from './styles';
import { ThemeContext } from '../../contexts';
import { IMAGES } from '../../assets';
import usersGraphql from '../../graphql/users';
import { ScoreBoard } from '../ScoreBoard';
import { DefaultButton } from '../DefaultButton';

export function EndGameModal() {
  const { theme } = useContext(ThemeContext);
  const themedStyles = getThemedStyles(theme);

  // Query
  // eslint-disable-next-line no-unused-vars
  const { data: users, loading: usersLoading, error: usersError } = useQuery(
    usersGraphql.queries.GET_USERS,
  );

  const PROFITS = [
    'lorem ipsum (+5464.78436)',
    'lorem ipsum (+5.7%)',
    'lorem ipsum (-6.3%)',
    'lorem ipsum (+654.76$)',
  ];
  const BALANCE = '$54296,543';

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
            <View style={themedStyles.userInfoContainer}>
              <Text style={themedStyles.subTitle}>Cris Brown</Text>
              <Text style={themedStyles.userLvl}>Level 3</Text>
            </View>
            <Text style={themedStyles.loseMessage}>Lost at level 2</Text>
            <View style={themedStyles.profitsContainer}>
              <Text style={themedStyles.profitsTitle}>Profits:</Text>
              <FlatList
                data={PROFITS}
                renderItem={({ item }) => (
                  <Text style={themedStyles.profitItem}>{`- ${item}`}</Text>
                )}
                keyExtractor={(item) => item}
              />
            </View>
            <Text style={themedStyles.balanceText}>Balance {BALANCE}</Text>
            <DefaultButton
              onPress={() => {}}
              style={{ container: themedStyles.buttonContainer }}>
              Finish
            </DefaultButton>
          </View>
        </View>
      </View>
    </View>
  );
}
