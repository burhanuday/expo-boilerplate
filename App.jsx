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

export default function App() {
  const scheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <AppearanceProvider>
        <PaperProvider theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
          <AppNavigator />
          <StatusBar />
        </PaperProvider>
      </AppearanceProvider>
    </SafeAreaProvider>
  );
}
