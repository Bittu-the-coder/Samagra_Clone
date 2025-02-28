// src/screens/NotificationsScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NotificationsScreen = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    console.log("Going back...");
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <MaterialIcons name="keyboard-arrow-left" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Notifications</Text>
      </View>
      {/* Your notifications content goes here */}
      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          color: "#333",
          alignSelf: "center",
        }}
      >
        No notifications right now
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 60,
  },
});

export default NotificationsScreen;
