import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import SignInScreen from "../screens/Auth/SignInScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";
import CustomDrawerContent from "../components/CustomDrawerContent"; // Your custom menu component
import ProfileScreen from "../screens/ProfileScreen";

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />} // Use your custom menu
        screenOptions={({ route }) => ({
          headerShown: route.name !== "Home", // Hide header only on Home screen
          drawerPosition: "left", // Drawer position (left or right)
          drawerType: "front", // Drawer type (front, back, slide, permanent)
        })}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="SignIn" component={SignInScreen} />
        <Drawer.Screen name="SignUp" component={SignUpScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
