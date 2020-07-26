if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}

import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./src/navigation/AppNavigator";
import { StatusBar } from "expo-status-bar";
import {
  DarkTheme,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";

import { Provider as ReduxProvider } from "react-redux";
import store from "./src/store/store";

export default function App() {
  const scheme = useColorScheme();

  return (
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <AppearanceProvider>
          <PaperProvider theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
            <AppNavigator />
            <StatusBar />
          </PaperProvider>
        </AppearanceProvider>
      </SafeAreaProvider>
    </ReduxProvider>
  );
}
