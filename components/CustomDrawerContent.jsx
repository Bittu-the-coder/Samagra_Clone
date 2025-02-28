// src/components/CustomDrawerContent.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Home");

  const buttons = [
    { title: "Home", icon: "home", screen: "Home" },
    { title: "Attendance", icon: "book-reader", screen: "Attendance" },
    { title: "Resources", icon: "book-open", screen: "Resources" },
    { title: "Results", icon: "trophy", screen: "Results" },
    { title: "Notices", icon: "sticky-note", screen: "Notices" },
    { title: "Assignments", icon: "swatchbook", screen: "Assignments" },
    { title: "Jobs", icon: "briefcase", screen: "Jobs" },
    { title: "Team", icon: "users", screen: "Team" },
    { title: "Profile", icon: "user", screen: "Profile" },
  ];

  const handlePress = (screen) => {
    setActiveTab(screen);
    screen === "Home"
      ? navigation.navigate("Main", { screen: "Home" })
      : navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/user.jpg")}
          style={styles.profileImage}
        />
        <Text style={styles.greeting}>Hello, Alice</Text>
      </View>

      {/* Menu Items */}
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.drawerItem,
            activeTab === button.screen && styles.activeDrawerItem,
          ]}
          onPress={() => handlePress(button.screen)}
          activeOpacity={0.7}
        >
          <FontAwesome5 name={button.icon} size={24} color="#333" />
          <Text style={styles.drawerItemText}>{button.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  activeDrawerItem: {
    backgroundColor: "#e3f2fd",
  },
  drawerItemText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default CustomDrawerContent;
