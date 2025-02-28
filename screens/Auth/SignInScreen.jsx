// src/screens/Auth/SignInScreen.js
import React, { useContext } from "react";
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
import { MaterialIcons } from "@expo/vector-icons";
import OrDivider from "../../components/OrDivider";
import { AuthContext } from "../../context/AuthContext";

const SignInScreen = () => {
  const navigation = useNavigation();
  const { login } = useContext(AuthContext); // Use AuthContext
  const [showPassword, setShowPassword] = React.useState(false);

  const handleSignIn = () => {
    login(); // Simulate successful login
    navigation.navigate("Home"); // Navigate to Home after sign-in
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
        <TextInput placeholder="University Roll No." style={styles.inputText} />
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            secureTextEntry={!showPassword}
            style={[styles.inputText, { flex: 1 }]}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.visibilityIcon}
          >
            <MaterialIcons
              name={showPassword ? "visibility" : "visibility-off"}
              size={24}
              color="#888"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ alignSelf: "flex-end" }}>
          <Text style={{ color: "#888" }}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <Pressable onPress={handleSignIn} style={styles.button}>
        <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
          Log In
        </Text>
      </Pressable>
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
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
  },
  visibilityIcon: {
    padding: 10,
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
    borderRadius: 25,
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
