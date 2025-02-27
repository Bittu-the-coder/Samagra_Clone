import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();

  const buttons = [
    {
      title: "Home",
      icon: "home",
      onPress: () => handleMenuPress(),
    },
    {
      title: "Attendance",
      icon: "book-reader",
      onPress: () => handleMenuPress(),
    },
    {
      title: "Resources",
      icon: "book-open",
      onPress: () => handleMenuPress(),
    },
    {
      title: "Results",
      icon: "trophy",
      onPress: () => handleMenuPress(),
    },
    {
      title: "Notices",
      icon: "sticky-note",
      onPress: () => handleMenuPress(),
    },
    {
      title: "Assignments",
      icon: "swatchbook",
      onPress: () => handleMenuPress(),
    },
    {
      title: "Jobs",
      icon: "briefcase",
      onPress: () => handleMenuPress(),
    },
    {
      title: "Team",
      icon: "users",
      onPress: () => handleMenuPress(),
    },
    {
      title: "Profile",
      icon: "user",
      onPress: () => navigation.navigate("Profile"),
    },
  ];

  const handleMenuPress = () => {
    ToastAndroid.show("Menu Pressed", ToastAndroid.SHORT);
  };
  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={button.onPress}
        >
          <FontAwesome5 name={button.icon} size={20} color="black" />
          <Text style={styles.buttonText}>{button.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  buttonText: {
    marginLeft: 20,
    fontSize: 17,
    fontWeight: "500",
    color: "#888",
  },
});

export default CustomDrawerContent;
