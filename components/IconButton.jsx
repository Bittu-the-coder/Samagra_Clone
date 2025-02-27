import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

function IconButton({
  icon = "",
  onPress = {},
  title = "",
  style = {},
  color = "black",
}) {
  return (
    <View style={styles.container}>
      <FontAwesome5 name={icon} size={24} color={color} onPress={onPress} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = {
  text: {
    fontSize: 10,
    textAlign: "center",
    color: "#888",
    marginTop: 5,
    fontWeight: "500",
  },
  container: {
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e8e9f7",
    borderRadius: 12,
  },
};

export default IconButton;
