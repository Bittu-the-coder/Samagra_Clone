import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const Header = ({ onMenuPress }) => {
  return (
    <View style={styles.header}>
      {/* Hamburger Menu */}
      <TouchableOpacity onPress={onMenuPress}>
        <Ionicons name="menu" size={30} color="black" />
      </TouchableOpacity>

      {/* Profile Image & Greeting */}
      <View style={styles.profileContainer}>
        <View style={styles.imageWrapper}>
          <Image
            source={require("../assets/user.jpg")}
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.greeting}>Hello, Alice</Text>
      </View>

      {/* Notification Bell (Outlined & Light Grey) */}
      <TouchableOpacity>
        <FontAwesome name="bell-o" size={25} color="#aaa" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginTop: 30,
    width: "95%",
    alignSelf: "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 70,
  },
  imageWrapper: {
    width: 45,
    height: 45,
    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 100,
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  greeting: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Header;
