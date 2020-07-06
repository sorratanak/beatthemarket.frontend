import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import * as firebase from 'firebase'
import * as firebaseui from 'firebaseui'
import Constants from 'expo-constants';
import * as Font from 'expo-font';

let customFonts = {
    'PragmataPro': require('../../assets/fonts/PragmataPro.ttf'),
};

// const socket = new WebSocket("ws://localhost:8080/graphql-ws");
const socket = new WebSocket("ws://localhost:8080/ws");

socket.addEventListener('open', function (event) {

    console.log("Websocket client connected");
    // socket.send('Hello Server!');
});

socket.addEventListener('message', function (event) {

    console.log('Message from server ', event.data);
    /* let data = JSON.parse([event.data]);
    console.log(data);
    getSeries().addPoint(data, true, false); */
});


export default class Index extends Component {

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {

        console.log("Index.componentDidMount CALLED");

        /* A. Initialize Firebase

           From app secrets: https://docs.expo.io/workflow/configuration/
         */
        firebase.initializeApp(Constants.manifest.extra.firebaseConfig);
        firebase.analytics();


        // Google OAuth Client ID, needed to support One-tap sign-up.
        // Set to null if One-tap sign-up is not supported.
        // var CLIENT_ID = 'YOUR_OAUTH_CLIENT_ID';

        /* B. Initialize the FirebaseUI
         */
        var uiConfig = {
            signInSuccessUrl: '/Dashboard',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ],

            // tosUrl and privacyPolicyUrl accept either url string or a callback

            // Terms of service url/callback.
            // Privacy policy url/callback.

            /* tosUrl: '<your-tos-url>',
            privacyPolicyUrl: function () {
                window.location.assign('<your-privacy-policy-url>');
            }*/
        };

        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#firebaseui-auth-container', uiConfig);
    }

    render() {

        /* Navigation prop reference - https://reactnavigation.org/docs/3.x/navigation-prop/
         */
        const { navigate } = this.props.navigation;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/4.5.0/firebase-ui-auth.css" />
                <div id="firebaseui-auth-container" />
                <Button
                    title="Dashboard"
                    onPress={() => navigate('Dashboard')} />

                <View>
                    <Text style={{ fontFamily: 'PragmataPro', fontSize: 40 }}>
                        Beat The Market
                    </Text>
                </View>
            </View>
        );
    }
}
