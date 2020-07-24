import React, { useContext } from 'react';
import { Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParams } from '../../navigation';
import { Container } from '../../components';
import { UserContext } from '../../userContext';

type NavigationProps = StackNavigationProp<StackParams, 'Home'>;

export function Home() {
  const { navigate } = useNavigation<NavigationProps>();
  const { logout } = useContext(UserContext);
  console.log('testtst');
  return (
    <Container>
      <Text>Home Screen</Text>
      <Button
        testID="details"
        title="Go to Details"
        onPress={() => navigate('Details', { data: '🤪' })}
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
