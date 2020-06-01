import React, { Component } from 'react';
import { Button, View, Image } from 'react-native';
/* import {
  Appbar, Avatar, Button, Card, Title, Paragraph,
  Provider as PaperProvider
} from 'react-native-paper';*/
import {
  Provider as PaperProvider,
  DefaultTheme as PaperLightTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper';
import {
  NavigationContainer,
  DefaultTheme
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Index from './src/screen/Index'
import Dashboard from './src/screen/Dashboard'
import Game from './src/screen/Game'
import Leaderboard from './src/screen/Leaderboard'
import Settings from './src/screen/Settings'


const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}

      /* TODO 
         logo outline
         center */
      source={require('./spiro.svg')} />
  );
}

function AppStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Index"
        component={Index} />
      <Stack.Screen name="Dashboard"
        component={Dashboard}
        options={{ headerTitle: props => <LogoTitle {...props} /> }} />
      <Stack.Screen name="Game"
        component={Game}
        options={{ headerTitle: props => <LogoTitle {...props} /> }} />
      <Stack.Screen name="Leaderboard"
        component={Leaderboard}
        options={{ headerTitle: props => <LogoTitle {...props} /> }} />
      <Stack.Screen name="Settings"
        component={Settings}
        options={{ headerTitle: props => <LogoTitle {...props} /> }} />
    </Stack.Navigator>
  );
}

const linking = {
  prefixes: ['http://localhost', 'localhost://'],
};

export default function App() {

  return (
    <PaperProvider>
      <NavigationContainer
        linking={linking} fallback={<Text>Loading...</Text>}>
        <AppStack />
      </NavigationContainer>
    </PaperProvider>
  );
}