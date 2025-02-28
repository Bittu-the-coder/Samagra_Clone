import { StyleSheet, Text, View } from "react-native";
export default function Assignments() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16, fontWeight: "500", color: "#333" }}>
        No Assignments Found
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
