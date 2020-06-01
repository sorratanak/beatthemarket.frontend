# BeataTheMarket.Frontend

This project uses the [firebase/firebaseui-web](https://github.com/firebase/firebaseui-web) package, to interact with Firebase Authentication.

## Notes on Firebase Auth Tokens

_"When you authenticate a modern client SDK, it generates an ID token / refresh token pair. The refresh token is a standard OAuth 2.0 refresh token, which you can learn more about here. Unlike the ID token which expires after one hour, the refresh token is long-lived (I believe it is valid for about one year). Shortly before the current ID token expires, the modern client SDKs transparently send the refresh token to this endpoint to generate a fresh ID token with a new one hour expiry, ensuring your users stay logged in. All of this happens under the hood, although each client SDK includes a method to be notified when a new ID token is generated (web, iOS, Android, C++, Unity)."_ (from an explanation of Firebase's [ID Tokens](https://medium.com/@jwngr/demystifying-firebase-auth-tokens-e0c533ed330c#c4cb))

* [Demystifying Firebase Auth Tokens](https://medium.com/@jwngr/demystifying-firebase-auth-tokens-e0c533ed330c)
* [Firebase Guildes / Manage User Sessions](https://firebase.google.com/docs/auth/admin/manage-sessions)


## Building 

This will build a PROD static site.
```
expo build:web

# This outputs the site in web-build/
```