# React Native Web with TypeScript Project!

### Featuring

Platforms:

- iOS
- Android
- Web

Tech Stack:

- React Native 0.63
- Typescript
- React-Navigation
- Eslint

### Preinstall

Get the env-dev.ts / env-prod.ts files from admin and put their to root/src/config/

### Web

#### Setup

```sh
yarn
```

#### Run

```sh
yarn web --reset-cache
```

#### Deploy

```sh
yarn build
```

The build destination by default:
root/build

### iOS

#### Setup

```sh
yarn
cd ios
pod install
```

#### Run

Auto:

```sh
react-native run-ios
```

Manual:
xCode -> open project (ios directory) -> switch device to iPhone -> 'Run' button

#### Deploy

xCode -> switch to Any iOS device -> Product -> Archive -> building.. -> 'Deploy' button -> follow steps

### Android

#### Setup

```sh
yarn
react-native run-android
```

#### Run

Auto:

```sh
react-native run-android
```

Manual:
Android Studio -> open project (android directory) -> run emulator -> 'Run' button

### Deploy

```sh
cd android
./gradlew clean
./gradlew app:assembleRelease
```

The APK destination by default:
root/android/app/build/outputs/apk/release/app-release.apk
