/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
// import {Text, View} from 'react-native';
import Navigation from './src/navigations';
import {LogBox, StatusBar} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#080808" />
      <Navigation />
    </>
  );
};

export default App;
