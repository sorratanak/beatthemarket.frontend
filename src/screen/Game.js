import React, { Component } from 'react';
import { Button, View } from 'react-native';
import {
    Appbar, 
    Button as PaperButton, 
    Card, Title, Paragraph,
    Provider as PaperProvider
  } from 'react-native-paper';
  import Highcharts from 'highcharts/highstock';

/*function Game({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}*/

// const socket = new WebSocket("ws://localhost:8080/ws");

export default class Game extends Component {

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
      /*socket.addEventListener('open', function (event) {
        console.log("Websocket client connected");
        socket.send('Hello Server!');
      });
  
      socket.addEventListener('message', function (event) {
  
        // console.log('Message from server ', event.data);
        let data = JSON.parse([event.data]);
        console.log(data);
        getSeries().addPoint(data, true, false);
      });*/
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
              <PaperButton>Cancel</PaperButton>
              <PaperButton>Ok</PaperButton>
            </Card.Actions>
          </Card>
  
        </PaperProvider>
      );
    }
  }