import React, { useContext, useCallback, useEffect, useMemo } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { ScreenProps } from './props';
import { Container, ScoreBoard, DefaultButton } from '../../components';
import { GameContext, ThemeContext } from '../../contexts';
import gameGraphql from '../../graphql/game';
import usersGraphql from '../../graphql/users';
import { getThemedStyles } from './styles';

export function Home({ navigation }: ScreenProps) {
  const { onSetGameId, onSetStocks } = useContext(GameContext);

  /* Mutations */
  const [createGame, { data: createGameResponse }] = useMutation(
    gameGraphql.queries.CREATE_GAME,
  );
  const [startGame, { data: startGameResponse }] = useMutation(
    gameGraphql.queries.START_GAME,
  );

  /* Queries */
  const { data: users, loading: usersLoading, error: usersError } = useQuery(
    usersGraphql.queries.GET_USERS,
  );

  useEffect(() => {
    if (createGameResponse) {
      startGame({ variables: { id: createGameResponse.createGame.id } });
    }
  }, [createGameResponse]);

  useEffect(() => {
    if (createGameResponse && startGameResponse) {
      const { stocks, id: gameId } = createGameResponse.createGame;
      onSetStocks(stocks);
      onSetGameId(gameId);
      navigation.navigate('Game');
    }
  }, [startGameResponse]);

  const onCreateGamePress = useCallback(() => {
    createGame({ variables: { gameLevel: 1 } });
  }, []);

  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <Container style={themedStyles.container}>
      <ScoreBoard users={users} style={themedStyles.scoreBoardContainer} />
      <DefaultButton
        onPress={onCreateGamePress}
        style={{
          container: themedStyles.playButtonContainer,
        }}>
        Play
      </DefaultButton>
      {/* <Button testID="logout" title="Logout" onPress={logout} /> */}
    </Container>
  );
}
