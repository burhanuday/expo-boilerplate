import React from "react";
import { TextInput, Text, useTheme } from "react-native-paper";
import { View, StyleSheet } from "react-native";

const Input = ({ placeholder, label, errorMessage, onChange, value, touched, name, ...props }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={(val) => onChange(name, val)}
        value={value[name]}
        error={!!errorMessage[name]}
        label={label}
        touched={touched[name]}
        {...props}
      />
      {errorMessage[name] && touched[name] && (
        <Text style={[{ color: colors.error }]}>{errorMessage[name]}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 7,
  },
});

export default Input;
