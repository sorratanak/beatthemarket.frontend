import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import {
  Appbar,
  Provider as PaperProvider
} from 'react-native-paper';
import * as Font from 'expo-font';

/* <Appbar.Content title="Beat The Market" subtitle="Can you... beat the market ?!" />
<Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
<Appbar.Action icon="delete" onPress={() => console.log('Pressed delete')} />*/

let customFonts = {
  'PragmataPro': require('../../assets/fonts/PragmataPro.ttf'),
};

export default class Dashboard extends Component {

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  render() {

    const { navigate } = this.props.navigation;

    return (

      <PaperProvider>

        <Appbar.Header >
          <Appbar.Action

            /* TODO
               Replace icon with our "Beat The Market" one, centered
               This isn't working
               icon={require('./spiro.svg')} */
            icon="label"
            onPress={() => console.log('Pressed label')} />
        </Appbar.Header>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            title="Leaderboard"
            onPress={() => navigate('Leaderboard')} />
          <Button
            title="Settings"
            onPress={() => navigate('Settings')} />
          <Button
            title="Game"
            onPress={() => navigate('Game')} />
          <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
        </View>

        <View>
          <Text style={{ fontFamily: 'PragmataPro', fontSize: 40 }}>
            Market Cap Outline
        </Text>
        </View>

        <View>
          <Text style={{ fontFamily: 'PragmataPro', fontSize: 40 }}>
            Highest Scores Table
        </Text>
        </View>

        <View>
          <Text style={{ fontFamily: 'PragmataPro', fontSize: 40 }}>
            Buttons: Play Game | Play Market | Watch Market
        </Text>
        </View>

      </PaperProvider>
    );
  }
}