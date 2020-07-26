import React from "react";
import { StyleSheet } from "react-native";
import { Surface, Subheading, Button } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter } from "@actions/counter";

export default function App() {
  return (
    <Surface style={styles.container}>
      <Subheading>Subheading</Subheading>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
});
