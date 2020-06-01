import React, { Component } from 'react';
import { Button, View } from 'react-native';

function Dashboard({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Leaderboard"
        onPress={() => navigation.navigate('Leaderboard')}/>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}/>
      <Button
        title="Game"
        onPress={() => navigation.navigate('Game')}/>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default Dashboard;