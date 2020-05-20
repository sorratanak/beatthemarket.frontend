import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Appbar, Avatar, Button, Card, Title, Paragraph,
  Provider as PaperProvider
} from 'react-native-paper';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


const socket = new WebSocket("ws://localhost:8080/ws");

export default class App extends Component {

  componentDidMount() {
    console.log("componentDidMount CALLED");

    socket.addEventListener('open', function (event) {
      console.log("Websocket client connected");
      socket.send('Hello Server!');
    });

    socket.addEventListener('message', function (event) {
      console.log('Message from server ', event.data);
    });
  }

  render() {
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
}

/* export default function App() {
  
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
}*/

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});