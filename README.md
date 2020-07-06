# BeatTheMarket.Frontend

The frontend application to [beatthemarket.backend](https://github.com/twashing/beatthemarket.backend).


## Authentication

This project uses []JWTs](http://jwt.io/) on each request, to authenticate with the server. It implements this with the [firebase/firebaseui-web](https://github.com/firebase/firebaseui-web) package, to interact with Firebase Authentication.

### Notes on Firebase Auth Tokens

_"When you authenticate a modern client SDK, it generates an ID token / refresh token pair. The refresh token is a standard OAuth 2.0 refresh token, which you can learn more about here. Unlike the ID token which expires after one hour, the refresh token is long-lived (I believe it is valid for about one year). Shortly before the current ID token expires, the modern client SDKs transparently send the refresh token to this endpoint to generate a fresh ID token with a new one hour expiry, ensuring your users stay logged in. All of this happens under the hood, although each client SDK includes a method to be notified when a new ID token is generated (web, iOS, Android, C++, Unity)."_ (from an explanation of Firebase's [ID Tokens](https://medium.com/@jwngr/demystifying-firebase-auth-tokens-e0c533ed330c#c4cb))

* [Demystifying Firebase Auth Tokens](https://medium.com/@jwngr/demystifying-firebase-auth-tokens-e0c533ed330c)
* [Firebase Guildes / Manage User Sessions](https://firebase.google.com/docs/auth/admin/manage-sessions)


## Tooling

This is the development setup you need to run the frontend application.

A. [Expo](https://docs.expo.io/)
```
npm install --global expo-cli
```

B. [Yarn](https://yarnpkg.com/getting-started/install)
```
npm install -g yarn
yarn install
```

C. Next, clone the repo.
```
git clone git@github.com:twashing/beatthemarket.frontend.git
```


## Running
```
expo start:web
```


## Building 

This will build a PROD static site.
```
expo build:web

# This outputs the site in web-build/
```


## Custom Fonts

This project uses custom fonts via `Font.loadAsync`.

* [Using Custom Fonts](https://docs.expo.io/guides/using-custom-fonts/?redirected#using-fontloadasync-instead-of-the-usefonts-hook)
* [Expo Font SDK](https://docs.expo.io/versions/latest/sdk/font/)


## Reference


**React Native Guides**
* https://www.reactnative.guide/
* https://reactnative.dev/docs/getting-started


## Possible Tools

* (apollographql/graphql-tag)[https://github.com/apollographql/graphql-tag] is a JavaScript template literal tag that parses GraphQL queries.
