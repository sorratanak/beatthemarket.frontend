import React, { Component } from 'react';
import { Button, View } from 'react-native';

function Index({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Dashboard"
                onPress={() => navigation.navigate('Dashboard')}
            />
        </View>
    );
}

export default Index;