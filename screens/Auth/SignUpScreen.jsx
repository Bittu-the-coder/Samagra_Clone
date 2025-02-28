import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons"; // For visibility icons
import OrDivider from "../../components/OrDivider";
import { ScrollView } from "react-native-gesture-handler";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility

  const handleSignUp = () => {
    // Simulate a successful sign-up
    navigation.navigate("Home"); // Navigate to Home after sign-up
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword); // Toggle confirm password visibility
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
          />
          <Text style={styles.title}>Sign Up</Text>
        </View>
        <Text style={{ marginBottom: 20, fontSize: 16, color: "#888" }}>
          Create your account
        </Text>
        <TouchableOpacity style={styles.googleButton}>
          <Image
            source={require("../../assets/google-icon.png")}
            style={{ width: 40, height: 40 }}
          />
          <Text style={{ color: "black", marginLeft: 10, fontSize: 16 }}>
            Continue with Google
          </Text>
        </TouchableOpacity>
        <OrDivider />
        <View style={{ width: "90%", marginBottom: 10 }}>
          {/* Full Name Input */}
          <TextInput placeholder="Full Name" style={styles.inputText} />

          {/* University Roll No. Input */}
          <TextInput
            placeholder="University Roll No."
            style={styles.inputText}
          />

          {/* Email Input */}
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            style={styles.inputText}
          />

          {/* Password Input with Visibility Icon */}
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Password"
              secureTextEntry={!showPassword} // Toggle secureTextEntry
              style={[styles.inputText, { flex: 1 }]} // Take up remaining space
            />
            {/* Visibility Icon */}
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={styles.visibilityIcon}
            >
              <MaterialIcons
                name={showPassword ? "visibility" : "visibility-off"} // Toggle icon
                size={24}
                color="#888"
              />
            </TouchableOpacity>
          </View>

          {/* Confirm Password Input with Visibility Icon */}
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry={!showConfirmPassword} // Toggle secureTextEntry
              style={[styles.inputText]} // Take up remaining space
            />
            {/* Visibility Icon */}
            <TouchableOpacity
              onPress={toggleConfirmPasswordVisibility}
              style={styles.visibilityIcon}
            >
              <MaterialIcons
                name={showConfirmPassword ? "visibility" : "visibility-off"} // Toggle icon
                size={24}
                color="#888"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Sign Up Button */}
        <Pressable onPress={handleSignUp} style={styles.button}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
            Sign Up
          </Text>
        </Pressable>

        {/* Sign In Link */}
        <Pressable onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.signInText}>
            Already have an account?
            <Text style={styles.signInLink}>Sign In</Text>
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  inputText: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    color: "#888",
    fontSize: 16,
    fontWeight: "500",
  },
  passwordContainer: {
    flexDirection: "row", // Align input and icon horizontally
    alignItems: "center", // Center items vertically
    marginBottom: 10,
    backgroundColor: "#f9f9f9", // Match input background
    borderRadius: 10,
    justifyContent: "space-between", // Space between input and icon
  },
  visibilityIcon: {
    padding: 10, // Add padding for better touch area
  },
  signInText: {
    marginTop: 10,
    color: "#888",
    marginBottom: 20,
  },
  signInLink: {
    color: "#007BFF",
  },
  googleButton: {
    flexDirection: "row",
    padding: 8,
    borderRadius: 25, // Rounded corners
    width: "90%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
    marginBottom: 5,
  },
});

export default SignUpScreen;
