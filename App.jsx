import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./src/navigation/AppNavigator";
import { StatusBar } from "expo-status-bar";
import { AppearanceProvider } from "react-native-appearance";

import { Provider as ReduxProvider } from "react-redux";
import store from "./src/store/store";

import {
  useFonts,
  Inter_100Thin,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import ThemeProvider from "./theme";
import { AppLoading } from "expo";

if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ReduxProvider store={store}>
        <SafeAreaProvider>
          <AppearanceProvider>
            <ThemeProvider>
              <AppNavigator />
              <StatusBar />
            </ThemeProvider>
          </AppearanceProvider>
        </SafeAreaProvider>
      </ReduxProvider>
    );
  }
}
