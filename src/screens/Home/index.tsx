import React, { useContext } from 'react';
import { Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useLazyQuery } from '@apollo/client';
import { StackParams } from '../../navigation';
import { Container } from '../../components';
import { UserContext } from '../../userContext';
import queries from '../../graphql/queries';

// type NavigationProps = StackNavigationProp<StackParams, 'Home'>;

export function Home() {
  const { logout } = useContext(UserContext);

  const [createGame, { loading, data, error }] = useLazyQuery(
    queries.createGameQuery,
  );

  console.log('loading, error, data', loading, data, error);

  return (
    <Container>
      <Text>Home Screen</Text>
      <Button
        testID="Create Game"
        title="Create Game"
        onPress={() => createGame({ variables: { gameLevel: 'one' } })}
      />
      <Button
        testID="logout"
        title="Logout"
        onPress={() => {
          logout();
        }}
      />
    </Container>
  );
}
