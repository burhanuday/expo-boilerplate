import React from "react";
import { StyleSheet } from "react-native";
import { Surface, Subheading, Button } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter } from "@actions/counter";

export default function App() {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <Surface style={styles.container}>
      <Subheading>{JSON.stringify(counter, null, 2)}</Subheading>

      <Button
        icon="camera"
        mode="contained"
        onPress={() => dispatch(incrementCounter(counter + 1))}
      >
        Press me
      </Button>
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
