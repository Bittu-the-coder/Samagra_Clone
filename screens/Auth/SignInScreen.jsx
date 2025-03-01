import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  TextInput,
  ToastAndroid,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import OrDivider from "../../components/OrDivider";
import { AuthContext } from "../../context/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const SignInScreen = () => {
  const navigation = useNavigation();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = async () => {
    // Check for missing fields
    if (!email || !password) {
      ToastAndroid.show(
        "Please enter both email and password.",
        ToastAndroid.SHORT
      );
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      ToastAndroid.show("Logged in successfully!", ToastAndroid.SHORT);
    } catch (error) {
      // Handle specific Firebase auth errors
      switch (error.code) {
        case "auth/invalid-email":
          ToastAndroid.show("Invalid email format.", ToastAndroid.SHORT);
          break;
        case "auth/user-not-found":
          ToastAndroid.show(
            "No user found with this email.",
            ToastAndroid.SHORT
          );
          break;
        case "auth/wrong-password":
          ToastAndroid.show("Incorrect password.", ToastAndroid.SHORT);
          break;
        case "auth/too-many-requests":
          ToastAndroid.show(
            "Too many attempts. Try again later.",
            ToastAndroid.SHORT
          );
          break;
        default:
          Alert.alert("Sign-In Error", error.message); // Generic fallback
          break;
      }
    }
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
        <TextInput
          placeholder="University Roll No. or Email"
          style={styles.inputText}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            secureTextEntry={!showPassword}
            style={[styles.inputText, { flex: 1 }]}
            value={password}
            onChangeText={setPassword}
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
