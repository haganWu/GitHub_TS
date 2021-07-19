/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import Navigator from "./src/navigator";
import {
  Platform,
  SafeAreaView,
  NativeModules,
  StatusBar, StyleSheet,
} from "react-native";

const { StatusBarManager } = NativeModules;
const App = () => {
  let statusBarHeight;
  if (Platform.OS === "ios") {
    StatusBarManager.getHeight((height: number) => {
      console.log("height11:", height);
      statusBarHeight = height;
    });
  } else {
    statusBarHeight = StatusBar.currentHeight;
  }
  return (
    <SafeAreaView style={[styles.container, { marginTop: statusBarHeight }]}>
      <Navigator />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
