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
 |- App.tsx
 |- Index.js
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

### Check TypeScript syntax errors without runing the server

```
npx tsx
```

> [!WARNING]
> Do not change index.js to index.tsx !
> It might cause issues during the bundeling (according to the [react website](https://reactnative.dev/docs/typescript#adding-typescript-to-an-existing-project))

