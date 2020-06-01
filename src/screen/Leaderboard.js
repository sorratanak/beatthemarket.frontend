import React, { Component } from 'react';
import { Button, View } from 'react-native';

function Leaderboard({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Dashboard"
        onPress={() => navigation.navigate('Dashboard')}/>
      <Button
        title="Game"
        onPress={() => navigation.navigate('Game')}/>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default Leaderboard;