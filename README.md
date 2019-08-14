# React Native

This Project covers the basics of React Native installation and setup

## Getting Started
To copy this repository, run the command

## Prerequisites
* Basic installation instructions can be gotten from https://facebook.github.io/react-native/docs/getting-started and tailored to your operating system of choice

## Creating a new Application
Similar to this section in the above docs, Everything should run smoothly until you get to the section of running the application where the complications begin

## Running your React Native application
Please note that you shall require two terminal instances in order to get your application to run. In the first terminal, run the command ``` react-native start ``` to display an output like this

```console
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│  Running Metro Bundler on port 8081.                                         │
│                                                                              │
│  Keep Metro running while developing on any JS projects. Feel free to        │
│  close this tab and run your own Metro instance if you prefer.               │
│                                                                              │
│  https://github.com/facebook/react-native                                    │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘

Loading dependency graph, done.
```

after which the variations for each platform is as follows

* Android setup.
  * List all available avds by running this command ```~/Library/Android/sdk/tools/emulator -list-avds```
    * ```console
        Instrumentation_S9_API_28
        Normal_Pixel_2_API_28
        ```
  * Launch the emulator by running the either of the commands below;
    * ```~/Library/Android/sdk/tools/emulator -avd <your emulator name here>```
    * ```~/Library/Android/sdk/emulator/emulator -avd <your emulator name here>```
  * Within the second terminal instance run the command ``` react-native run-android```
  * This should fire up your App in the emulator

* iOS setup
 * When trying to run this fresh out of the *ProjectFolder/ios* directory, certain dependencies are missing.
 * You will need to drop into the above named folder and run the command ``` pod init``` if the directory doesn't exist followed by ```pod install``` to create the cocoapods dependencies.
 * Once done, open your ios workspace project and delete the build from the ios ProjectFolder followed by running the command ```react-native run-ios``` to get the welcome to effectively display

 ## Setting up Navigation
 In order to setup React Navigation, run the following Commands
 * ```npm install --save react-navigation```
 * ```npm install --save react-native-gesture-handler```
 *  At this point cd into the `ios` Directory in the application folder and run the command ```pod install``` as the Andrioid Linking is automatic. At this point the linking shall be set and the design is fully on the developer
