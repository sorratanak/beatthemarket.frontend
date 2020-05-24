import React, { Component } from 'react';
import { Button, View } from 'react-native';

function Game({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default Game;