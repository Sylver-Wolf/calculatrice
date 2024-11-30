# Calculatrice

An Android scientific calculator app designed for phones.

> Currently in devloppement, personal project, do not expect quick progress.

## Project structure
```
root
 |- assets
 |  |- assets
 |- component
 |  |-components
 |- App.js
```

## Dev workflow

- To launch the dev build through USB, enable the USB debugging and USB install (to install the correct 'Expo Go').
- Make sure that adb detect your device :
```
adb devices
```
- Then run :
```
npx expo start --tunnel
```

Once the server is launched, press `a` to launch the android live environement.
