import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OrDivider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>or</Text>
      <View style={styles.line} />
    </View>
  );
};
export const Divider = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20, // Adjust spacing as needed
    width: "90%", // Adjust width as needed
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc", // Color of the line
  },
  text: {
    marginHorizontal: 10, // Space between text and lines
    color: "#666", // Text color
    fontSize: 16, // Text size
  },
});

export default OrDivider;
