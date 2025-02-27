import React from "react";
import { Image, Text, View } from "react-native";

function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", top: 0 }}>
        <Image
          source={require("../assets/user.jpg")}
          style={styles.profileImage}
        />
        <View>
          <Text>Alice Smith</Text>
          <Text>2024021667</Text>
          <Text>CSE-D</Text>
        </View>
      </View>
    </View>
  );
}

const styles = {
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
};

export default ProfileScreen;
