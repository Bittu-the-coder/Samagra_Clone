import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";
import { Pressable, ScrollView } from "react-native-gesture-handler";

function ProfileScreen() {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 8,
            marginBottom: 20,
            marginRight: 40,
          }}
        >
          <Image
            source={require("../assets/user.jpg")}
            style={styles.profileImage}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Alice Smith
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>2022021667</Text>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>CSE-D</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            width: "90%",
            marginBottom: 10,
          }}
        >
          <View
            style={{
              marginBottom: 10,
              borderBottomWidth: 1,
              padding: 5,
              paddingBottom: 10,
              borderBottomColor: "#eee",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#666" }}>
                Email
              </Text>
              <Ionicons
                name="shield-checkmark-outline"
                size={24}
                color="green"
              />
            </View>
            <Text style={{ fontSize: 14, color: "#888" }}>Alice@ai.com</Text>
          </View>
          <View
            style={{
              marginBottom: 10,
              borderBottomWidth: 1,
              padding: 5,
              paddingBottom: 10,
              borderBottomColor: "#eee",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#666" }}>
              Id Card
            </Text>
            <Text style={{ fontSize: 14, color: "#888" }}>
              Click to show your virtual identification card
            </Text>
          </View>
          <View
            style={{
              marginBottom: 10,
              borderBottomWidth: 1,
              padding: 5,
              paddingBottom: 10,
              borderBottomColor: "#eee",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#666" }}>
              Emergency Contact
            </Text>
            <Text style={{ fontSize: 14, color: "#888" }}>+91 1234567890</Text>
          </View>
          <View
            style={{
              marginBottom: 10,
              borderBottomWidth: 1,
              padding: 5,
              paddingBottom: 10,
              borderBottomColor: "#eee",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#666" }}>
              Phone Number
            </Text>
            <Text style={{ fontSize: 14, color: "#888" }}>+91 1234567890</Text>
          </View>
          <View
            style={{
              marginBottom: 10,
              borderBottomWidth: 1,
              padding: 5,
              paddingBottom: 10,
              borderBottomColor: "#eee",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#666" }}>
              Change Password
            </Text>
            <Text style={{ fontSize: 14, color: "#888" }}>
              Change the login password for your app
            </Text>
          </View>
          <View
            style={{
              marginBottom: 10,
              borderBottomWidth: 1,
              padding: 5,
              paddingBottom: 10,
              borderBottomColor: "#eee",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#666" }}>
              Change Email Address
            </Text>
            <Text style={{ fontSize: 14, color: "#888" }}>
              Email address is used for resetting and changing password
            </Text>
          </View>
          <View
            style={{
              marginBottom: 10,
              borderBottomWidth: 1,
              padding: 5,
              paddingBottom: 10,
              borderBottomColor: "#eee",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#666" }}>
              Change the profile photo
            </Text>
            <Text style={{ fontSize: 14, color: "#888" }}>
              Change the profile photo
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#777",
            alignSelf: "flex-start",
            marginLeft: 20,
          }}
        >
          Follow us on
        </Text>
        <View style={{ flexDirection: "row", marginBottom: 20, marginTop: 15 }}>
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              alignItems: "center",
            }}
          >
            <Ionicons
              name="logo-instagram"
              size={24}
              color="#c13584"
              style={{ marginRight: 8 }}
            />
            <Text style={{ fontSize: 16, color: "#666", fontWeight: "600" }}>
              Instagram
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 8,
            }}
          >
            <Ionicons
              name="mail"
              size={24}
              color="#dd4b39"
              style={{ marginRight: 8 }}
            />
            <Text style={{ fontSize: 16, color: "#666", fontWeight: "600" }}>
              Support
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 8,
            }}
          >
            <Ionicons
              name="logo-linkedin"
              size={24}
              color="#0077b5"
              style={{ marginRight: 8 }}
            />
            <Text style={{ fontSize: 16, color: "#666", fontWeight: "600" }}>
              Linkedin
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <Pressable
            style={[
              styles.button,
              {
                borderWidth: 1,
                borderColor: "#ccc",
                width: "100%",
                alignSelf: "center",
              },
            ]}
            onPress={() => navigation.navigate("Home")}
          >
            <Feather name="refresh-cw" size={24} color="black" />
            <Text style={styles.buttonText}>Check for updates</Text>
          </Pressable>
          <Pressable
            style={[
              styles.button,
              {
                width: "100%",
                alignSelf: "center",
                backgroundColor: "#007bff",
              },
            ]}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={[styles.buttonText, { color: "#fff" }]}>Logout</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = {
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  button: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    alignSelf: "center",
  },
};

export default ProfileScreen;
