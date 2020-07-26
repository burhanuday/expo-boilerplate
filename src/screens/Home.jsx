import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Subheading } from "react-native-paper";

export default function App() {
  return (
    <View style={styles.container}>
      <Subheading>Subheading</Subheading>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
