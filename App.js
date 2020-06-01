import React, { Component } from 'react';
import { Button, View } from 'react-native';
/* import {
  Appbar, Avatar, Button, Card, Title, Paragraph,
  Provider as PaperProvider
} from 'react-native-paper';*/
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Index from './src/screen/Index'
import Dashboard from './src/screen/Dashboard'
import Game from './src/screen/Game'
import Leaderboard from './src/screen/Leaderboard'
import Settings from './src/screen/Settings'


const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Game" component={Game} />
      <Stack.Screen name="Leaderboard" component={Leaderboard} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

const linking = {
  prefixes: ['http://localhost', 'localhost://'],
};

export default function App() {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <AppStack/>
    </NavigationContainer>
  );
}