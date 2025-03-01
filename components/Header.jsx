import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { auth, db } from "../firebaseConfig"; // Import Firebase auth and firestore

import { doc, getDoc } from "firebase/firestore";

const Header = ({ onMenuPress, route }) => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("User");

  const justLoggedIn = route?.params?.justLoggedIn || false;

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            const name = userDoc.data().fullName;
            setFullName(name);
            if (justLoggedIn) {
              ToastAndroid.show(`Welcome, ${name}!`, ToastAndroid.LONG);
            }
          } else {
            console.log("No such document!");
          }
        } else {
          console.log("No user is signed in.");
        }
      } catch (error) {
        console.error("Error fetching user name:", error);

        setFullName("User");
      }
    };

    fetchUserName();
  }, [justLoggedIn]);

  useEffect(() => {
    if (justLoggedIn) {
      ToastAndroid.show(`Welcome, ${fullName}!`, ToastAndroid.LONG);
    }
  }, [justLoggedIn, fullName]);
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
        <Text style={styles.greeting}>Hello, {fullName.split(" ")[0]} !</Text>
      </View>

      {/* Notification Bell (Outlined & Light Grey) */}
      <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
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
    marginTop: 10,
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
