import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Appbar, Avatar, Button, Card, Title, Paragraph,
  Provider as PaperProvider
} from 'react-native-paper';
import Highcharts from 'highcharts/highstock';


const socket = new WebSocket("ws://localhost:8080/ws");


/* Navigation Screens

Start with simple Stack Navigator

Index
Dashboard
Settings
Game */

const getSeries = () => {
  return Highcharts.charts[0].series[0];
};

export default class App extends Component {

  componentDidMount() {

    console.log("componentDidMount CALLED");

    // A. Add Highstock Chart
    Highcharts.chart('highStock', {
      "rangeSelector": {
        "selected": 1
      },
      "title": {
        "text": "Sine Wave Stock Price"
      },
      "series": [
        {
          "name": "Sine Wave",
          "data": [],
          "tooltip": {
            "valueDecimals": 2
          }
        }
      ]
    });

    // B. WebSocket
    socket.addEventListener('open', function (event) {
      console.log("Websocket client connected");
      socket.send('Hello Server!');
    });

    socket.addEventListener('message', function (event) {

      // console.log('Message from server ', event.data);
      let data = JSON.parse([event.data]);
      console.log(data);
      getSeries().addPoint(data, true, false);
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

          <div id="highStock"/>

          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>

      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
