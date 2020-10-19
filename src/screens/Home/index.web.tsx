import React, { useContext, useCallback, useEffect, useMemo } from 'react';
import { useMutation, useLazyQuery } from '@apollo/client';
import { View, Text } from 'react-native';
import _ from 'lodash';

import { ScreenProps } from './props';
import {
  ScoreBoard,
  DefaultButton,
  ScoreRow,
  ContainerWithBurgerMenu,
} from '../../components';
import { GameContext, ThemeContext, UserContext } from '../../contexts';
import gameGraphql from '../../graphql/game';
import usersGraphql from '../../graphql/users';
import { getThemedStyles } from './styles';
import {
  START_GAME_LEVEL,
  QUERY_WITH_ERRORS_OPTIONS,
  WAIT_TOKEN_REG_TIMEOUT_MS,
  START_GAME_START_POSITION,
} from '../../constants';
import { getFirebaseToken } from '../../utils/storage';
import { IStockTick } from '../../types';
import { getEmailPrefix } from '../../utils';

export function Home({ navigation }: ScreenProps) {
  const { gameEvents, onSetGameId, onSetStocks } = useContext(GameContext);
  const {
    user: { userName, userEmail },
    logout,
  } = useContext(UserContext);

  /* Mutations */
  const [
    createGame,
    { data: createGameResponse, error: createGameError },
  ] = useMutation(gameGraphql.queries.CREATE_GAME, QUERY_WITH_ERRORS_OPTIONS);
  const [startGame, { data: startGameResponse }] = useMutation(
    gameGraphql.queries.START_GAME,
  );

  /* Queries */
  const [getUsers, { data: users, error: usersError }] = useLazyQuery(
    usersGraphql.queries.GET_USERS,
    QUERY_WITH_ERRORS_OPTIONS,
  );
  useEffect(() => {
    const refreshFirebaseTokenAndGetUsers = async () => {
      await getFirebaseToken();
      setTimeout(() => getUsers(), WAIT_TOKEN_REG_TIMEOUT_MS);
    };

    refreshFirebaseTokenAndGetUsers();
  }, []);

  /* Error Handling */
  useEffect(() => {
    if (createGameError || usersError) {
      logout();
    }
  }, [createGameError, usersError, logout]);

  useEffect(() => {
    if (createGameResponse?.createGame) {
      startGame({
        variables: {
          id: createGameResponse.createGame.id,
          startPosition: START_GAME_START_POSITION,
        },
      });
    }
  }, [createGameResponse, startGame]);

  useEffect(() => {
    if (createGameResponse && startGameResponse) {
      const { stocks, id: gameId } = createGameResponse.createGame;
      const newTicks: IStockTick[] = [];
      const initialTicks = startGameResponse.startGame;
      _.forEach(initialTicks, (tickBunch) => {
        newTicks.push(...tickBunch);
      });
      onSetStocks(stocks, newTicks);
      onSetGameId(gameId);
      navigation.navigate('Game');
    }
  }, [startGameResponse]);

  const onCreateGamePress = useCallback(() => {
    createGame({ variables: { gameLevel: START_GAME_LEVEL } });
  }, [createGame]);

  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <ContainerWithBurgerMenu style={themedStyles.container}>
      <View style={themedStyles.headerContainer}>
        <View style={themedStyles.greetContainer}>
          <Text style={themedStyles.greetUserName}>
            Hello, {userName || getEmailPrefix(userEmail)}
          </Text>
        </View>
        <View style={themedStyles.profileInfoContainer}>
          <View style={themedStyles.profileTitleContainer}>
            <Text style={themedStyles.profileTitle}>Profile</Text>
            {gameEvents?.level && (
              <View style={themedStyles.profileLvlContainer}>
                <Text style={themedStyles.profileLvl}>
                  Level {gameEvents.level}
                </Text>
              </View>
            )}
          </View>
          <ScoreRow />
        </View>
      </View>

      <ScoreBoard
        users={users?.users || []}
        style={themedStyles.scoreBoardContainer}
      />
      <DefaultButton
        onPress={onCreateGamePress}
        style={{
          container: themedStyles.playButtonContainer,
        }}>
        PLAY
      </DefaultButton>
    </ContainerWithBurgerMenu>
  );
}
