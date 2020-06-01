import React, { Component } from 'react';
import { Button, View } from 'react-native';
import * as firebase from 'firebase'
import * as firebaseui from 'firebaseui'
import Constants from 'expo-constants';


export default class Index extends Component {

    componentDidMount() {

        console.log("Index.componentDidMount CALLED");

        /* A. Initialize Firebase
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
                    title="Go to Dashboard"
                    onPress={() => navigate('Dashboard')}
                />
            </View>
        );
    }
}