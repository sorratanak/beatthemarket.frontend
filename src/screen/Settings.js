import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import {
  Appbar,
  Provider as PaperProvider
} from 'react-native-paper';
import * as Font from 'expo-font';

let customFonts = {
  'PragmataPro': require('../../assets/fonts/PragmataPro.ttf'),
};

export default class Settings extends Component {

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
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

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            title="Dashboard"
            onPress={() => navigate('Dashboard')} />
          <Button
            title="Game"
            onPress={() => navigate('Game')} />
          <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
        </View>

        <View>
          <Text style={{ fontFamily: 'PragmataPro', fontSize: 40 }}>
            Payment Options Outline
          </Text>
        </View>
        <View>
          <Text style={{ fontFamily: 'PragmataPro', fontSize: 40 }}>
            Rules Outline
          </Text>
        </View>
        <View>
          <Text style={{ fontFamily: 'PragmataPro', fontSize: 40 }}>
            Privacy Policy Outline
          </Text>
        </View>
        <View>
          <Text style={{ fontFamily: 'PragmataPro', fontSize: 40 }}>
            Terms Of Service Outline
          </Text>
        </View>

      </PaperProvider>
    );
  }
}