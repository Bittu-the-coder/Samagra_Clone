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

const SignInScreen = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleSignIn = () => {
    // Simulate a successful sign-in
    navigation.navigate("Home"); // Navigate to Home after sign-in
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  const handleForgotPassword = () => {
    // Navigate to the forgot password screen
    navigation.navigate("ForgotPassword");
  };

  const handleSignUp = () => {
    // Navigate to the sign-up screen
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>Sign In</Text>
      </View>
      <Text style={{ marginBottom: 20, fontSize: 16, color: "#888" }}>
        Enter your credentials
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
        {/* University Roll No. Input */}
        <TextInput placeholder="University Roll No." style={styles.inputText} />

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

        {/* Forgot Password Link */}
        <TouchableOpacity style={{ alignSelf: "flex-end" }}>
          <Text style={{ color: "#888" }}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      {/* Log In Button */}
      <Pressable onPress={handleSignIn} style={styles.button}>
        <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
          Log In
        </Text>
      </Pressable>

      {/* Sign Up Link */}
      <Pressable onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.signUpText}>
          Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
      </Pressable>
    </View>
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
  },
  visibilityIcon: {
    padding: 10, // Add padding for better touch area
  },
  signUpText: {
    marginTop: 20,
    color: "#888",
  },
  signUpLink: {
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
    marginBottom: 10,
  },
});

export default SignInScreen;
