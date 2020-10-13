import React, { useContext, useCallback, useEffect, useMemo } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import _ from 'lodash';

import { ScreenProps } from './props';
import { Container, ScoreBoard, DefaultButton } from '../../components';
import { GameContext, ThemeContext, UserContext } from '../../contexts';
import gameGraphql from '../../graphql/game';
import usersGraphql from '../../graphql/users';
import { getThemedStyles } from './styles';
import {
  START_GAME_LEVEL,
  QUERY_WITH_ERRORS_OPTIONS,
  START_GAME_START_POSITION,
} from '../../constants';
import { IStockTick } from '../../types';

export function Home({ navigation }: ScreenProps) {
  const { onSetGameId, onSetStocks } = useContext(GameContext);
  const { logout } = useContext(UserContext);

  /* Mutations */
  const [
    createGame,
    { data: createGameResponse, error: createGameError },
  ] = useMutation(gameGraphql.queries.CREATE_GAME, QUERY_WITH_ERRORS_OPTIONS);
  const [startGame, { data: startGameResponse }] = useMutation(
    gameGraphql.queries.START_GAME,
  );

  /* Queries */
  const { data: users, error: usersError } = useQuery(
    usersGraphql.queries.GET_USERS,
    QUERY_WITH_ERRORS_OPTIONS,
  );

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
  }, [createGameResponse]);

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
  }, []);

  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <Container style={themedStyles.container}>
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
    </Container>
  );
}
