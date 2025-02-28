// src/screens/HomeScreen.js
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ToastAndroid,
} from "react-native";
import Header from "../components/Hander";
import IconButton from "../components/IconButton";
import Notice from "../components/Notice";

const HomeScreen = ({ navigation }) => {
  const handleMenuPress = () => {
    ToastAndroid.show("Menu Pressed", ToastAndroid.SHORT);
  };

  const buttons = [
    {
      title: "Attendance",
      icon: "book-reader",
      onPress: () => navigation.navigate("Attendance"),
    },
    {
      title: "Resources",
      icon: "book-open",
      onPress: () => navigation.navigate("Resources"),
    },
    {
      title: "Results",
      icon: "trophy",
      onPress: () => navigation.navigate("Results"),
    },
    {
      title: "Notices",
      icon: "sticky-note",
      onPress: () => navigation.navigate("Notices"),
    },
    {
      title: "Assignments",
      icon: "swatchbook",
      onPress: () => navigation.navigate("Assignments"),
    },
  ];

  const recentNotices = [
    {
      title: "Revised schedule for MINOR DEGREE EXAMINATION",
      date: "March 5, 2025",
      for: "2nd and 3rd Year",
    },
    {
      title: "Revised schedule for minor test-1",
      date: "March 5, 2025",
      for: "Final Year(8th sem)",
    },
    {
      title: "Revised schedule for minor test-1",
      date: "March 5, 2025",
      for: "Third Year(6th sem)",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header onMenuPress={() => navigation.openDrawer()} />
      {/* Campus Image */}
      <Image
        source={require("../assets/campus.jpg")}
        style={styles.campusImage}
      />
      {/* Buttons */}
      <View style={styles.buttonContainer}>
        {buttons.map((button, index) => (
          <IconButton
            key={index}
            title={button.title}
            icon={button.icon}
            onPress={button.onPress}
          />
        ))}
      </View>
      {/* Notice Section */}
      <View style={styles.noticeSection}>
        <Text style={styles.noticeTitle}>Recent Notices</Text>
        <ScrollView>
          {recentNotices.map((notice, index) => (
            <Notice
              key={index}
              title={notice.title}
              date={notice.date}
              forWhom={notice.for}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  campusImage: {
    width: "93%",
    height: 150,
    resizeMode: "cover",
    marginBottom: 5,
    alignSelf: "center",
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
    width: "95%",
    alignSelf: "center",
  },
  noticeSection: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },
  noticeTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
    alignSelf: "center",
  },
});

export default HomeScreen;
