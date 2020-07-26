import * as React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { useColorScheme } from "react-native-appearance";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";

const AppStack = createStackNavigator();

const AppNavigator = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <AppStack.Navigator initialRouteName="Home">
        <AppStack.Screen name="Home" component={Home} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
