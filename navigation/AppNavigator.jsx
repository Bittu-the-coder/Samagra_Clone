// src/navigation/AppNavigator.js
import * as React from "react";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import CustomDrawerContent from "../components/CustomDrawerContent";
import { AuthContext } from "../context/AuthContext";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Assignments from "../screens/AssignmentsScreen";
import Attendance from "../screens/AttendanceScreen";
import Results from "../screens/ResultsScreen";
import Resources from "../screens/ResourcesScreen";
import Notices from "../screens/NoticesScreen";
import Jobs from "../screens/JobsScreen";
import Team from "../screens/TeamScreen";
import SignInScreen from "../screens/Auth/SignInScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Notifications from "../screens/NotificationsScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ route, navigation }) => ({
        headerShown: route.name !== "Home" && route.name !== "Notifications",
        drawerPosition: "left",
        drawerType: "front",
        drawerStyle: {
          backgroundColor: "#fff",
          width: "70%",
          borderRightWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerLeft: () => (
          <Pressable
            style={{ marginLeft: 15, marginRight: 10 }}
            onPress={() => navigation.openDrawer()}
          >
            <Ionicons name="menu" size={30} color="#000" />
          </Pressable>
        ),
      })}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Assignments" component={Assignments} />
      <Drawer.Screen name="Attendance" component={Attendance} />
      <Drawer.Screen name="Results" component={Results} />
      <Drawer.Screen name="Resources" component={Resources} />
      <Drawer.Screen name="Notices" component={Notices} />
      <Drawer.Screen name="Jobs" component={Jobs} />
      <Drawer.Screen name="Team" component={Team} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
};

const AppNavigator = () => {
  const navigation = React.useRef(null);
  const { isAuthenticated } = React.useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <>
            <Stack.Screen
              name="Main"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: "#fff" },
                headerShadowVisible: false,
                headerTitleStyle: {
                  marginLeft: 15,
                },
                // headerLeft: () => (
                //   <Pressable
                //     style={{ marginLeft: 15, marginRight: 10 }}
                //     onPress={() =>
                //       navigation.dispatch(DrawerActions.openDrawer())
                //     }
                //   >
                //     <Ionicons name="menu" size={30} color="#000" />
                //   </Pressable>
                // ),
              }}
            />
            <Stack.Screen
              name="Assignments"
              component={Assignments}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: "#fff" },
                headerShadowVisible: false,
                headerTitleStyle: {
                  marginLeft: 15,
                },
              }}
            />
            <Stack.Screen
              name="Attendance"
              component={Attendance}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: "#fff" },
                headerShadowVisible: false,
                headerTitleStyle: {
                  marginLeft: 15,
                },
              }}
            />
            <Stack.Screen
              name="Results"
              component={Results}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: "#fff" },
                headerShadowVisible: false,
                headerTitleStyle: {
                  marginLeft: 15,
                },
              }}
            />
            <Stack.Screen
              name="Resources"
              component={Resources}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: "#fff" },
                headerShadowVisible: false,
                headerTitleStyle: {
                  marginLeft: 15,
                },
              }}
            />
            <Stack.Screen
              name="Notices"
              component={Notices}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: "#fff" },
                headerShadowVisible: false,
                headerTitleStyle: {
                  marginLeft: 15,
                },
              }}
            />
            <Stack.Screen
              name="Jobs"
              component={Jobs}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: "#fff" },
                headerShadowVisible: false,
                headerTitleStyle: {
                  marginLeft: 15,
                },
              }}
            />
            <Stack.Screen
              name="Team"
              component={Team}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: "#fff" },
                headerShadowVisible: false,
                headerTitleStyle: {
                  marginLeft: 15,
                },
              }}
            />
            <Stack.Screen
              name="Notifications"
              component={Notifications}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
