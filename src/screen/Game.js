import React, { Component } from 'react';
import { Button, View } from 'react-native';
import {
  Appbar,
  Button as PaperButton,
  Card, Title, Paragraph,
  Provider as PaperProvider
} from 'react-native-paper';
import * as Font from 'expo-font';
import Highcharts from 'highcharts/highstock';


let customFonts = {
  'PragmataPro': require('../../assets/fonts/PragmataPro.ttf'),
};

// const socket = new WebSocket("ws://localhost:8080/ws");

export default class Game extends Component {

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {

    console.log("Game.componentDidMount CALLED");

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

    const { navigate } = this.props.navigation;

    return (
      <PaperProvider>

        <Appbar.Header>
          <Appbar.Action

            /* TODO
               Replace icon with our "Beat The Market" one, centered
               This isn't working
               icon={require('./spiro.svg')} */
            icon="label"
            onPress={() => console.log('Pressed label')} />
        </Appbar.Header>

        <Button
          title="Dashboard"
          onPress={() => navigate('Dashboard')} />
        <Button
          title="Leaderboard"
          onPress={() => navigate('Leaderboard')} />
        <Button
          title="Settings"
          onPress={() => navigate('Settings')} />

        <Card>
          <Card.Content>
            <Title style={{ fontFamily: 'PragmataPro' }}>IBM</Title>
          </Card.Content>

          <div id="highStock" />

          <Card.Actions>
            <PaperButton>Cancel</PaperButton>
            <PaperButton>Ok</PaperButton>
          </Card.Actions>
        </Card>

      </PaperProvider>
    );
  }
}