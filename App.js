import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Appbar, Avatar, Button, Card, Title, Paragraph,
  Provider as PaperProvider
} from 'react-native-paper';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function App() {
  return (
    <PaperProvider>

      <Appbar.Header >
        <Appbar.Content title="Beat The Market" subtitle="Can you... beat the market ?!" />
        <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
        <Appbar.Action icon="delete" onPress={() => console.log('Pressed delete')} />
      </Appbar.Header>

      <Card>
        <Card.Content>
          <Title>IBM</Title>
          <Paragraph>American Blue Chip company</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>

    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
