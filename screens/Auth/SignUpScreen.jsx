import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import OrDivider from "../../components/OrDivider";
import { ScrollView } from "react-native-gesture-handler";
import { auth, db, createUserWithEmailAndPassword } from "../../firebaseConfig";

import { doc, setDoc } from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = async () => {
    if (!fullName || !rollNo || !email || !password || !confirmPassword) {
      Alert.alert("Error", "All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }
    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // Save user info in Firestore
      await setDoc(doc(db, "users", user.uid), {
        fullName,
        rollNo,
        email,
      });
      Alert.alert("Success", "Account created successfully!");
      navigation.navigate("Main");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
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
          <TextInput
            placeholder="Full Name"
            style={styles.inputText}
            value={fullName}
            onChangeText={setFullName}
          />

          {/* University Roll No. Input */}
          <TextInput
            placeholder="University Roll No."
            style={styles.inputText}
            value={rollNo}
            onChangeText={setRollNo}
          />

          {/* Email Input */}
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            style={styles.inputText}
            value={email}
            onChangeText={setEmail}
          />
          {/* Password Input with Visibility Icon */}

          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Password"
              secureTextEntry={!showPassword}
              style={[styles.inputText, { flex: 1 }]}
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.visibilityIcon}
            >
              <MaterialIcons
                name={showPassword ? "visibility" : "visibility-off"}
                size={24}
                color="#888"
              />
            </TouchableOpacity>
          </View>

          {/* Confirm Password Input */}

          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry={!showConfirmPassword}
              style={[styles.inputText, { flex: 1 }]}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />

            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              style={styles.visibilityIcon}
            >
              <MaterialIcons
                name={showConfirmPassword ? "visibility" : "visibility-off"}
                size={24}
                color="#888"
              />
            </TouchableOpacity>
          </View>

          {/* <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Password"
              secureTextEntry={!showPassword} // Toggle secureTextEntry
              style={[styles.inputText, { flex: 1 }]} // Take up remaining space
            />
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

          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry={!showConfirmPassword} // Toggle secureTextEntry
              style={[styles.inputText]} // Take up remaining space
            />
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
          </View> */}
        </View>

        {/* Sign Up Button */}
        <Pressable onPress={() => handleSignUp()} style={styles.button}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
            Sign Up
          </Text>
        </Pressable>

        {/* Sign In Link */}
        <Pressable onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.signInText}>
            Already have an account?
            <Text style={styles.signInLink}> Sign In</Text>
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
