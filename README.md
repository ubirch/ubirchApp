# Ubirch Hybrid Mobile Application

Scan for and connects to BLE peripherals in order to do a cryptographic handshake

## Ionic 3

This project requires Ionic3

    npm install -g ionic@latest

Install Cordova just to be safe

    npm install -g cordova@latest


## iOS

Assuming you have Xcode installed

    ionic cordova run ios --device

Note: You might need to open Xcode and set the Team for code signing.

## Android

Assuming you have the Android SDK installed

    ionic cordova run android --device

Running this command will install the cordova plugins needed.

## For development on Android

    ionic cordova run android --device=deviceid --livereload --debug

-USB debugging must be activated on Android devices
-deviceid is obtained by running on terminal : adb devices
