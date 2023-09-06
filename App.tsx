// In App.js in a new project

import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/pages/Login";
import Whichlist from "./src/pages/Whichlist";
import Order from "./src/pages/Order";
import Home from "./src/pages/Home";
import { CurrentUserContextProvider } from "./src/context/UserContext";

function HomeScreen() {
  return <Home />;
}

function ProfilScreen() {
  return <Login />;
}

function OrderScreen() {
  return <Order />;
}

const Stack = createBottomTabNavigator();

function App() {
  return (
    <CurrentUserContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name == "Home") {
                iconName = "home";
              } else if (route.name == "Login") {
                iconName = "person-outline";
              } else if (route.name == "contact") {
                iconName = "grid-outline";
              } else if (route.name == "Which List") {
                iconName = "heart-outline";
              }
              return <Ionicons name={iconName} size={25} />;
            },
          })}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="contact" component={OrderScreen} />
          <Stack.Screen name="Login" component={ProfilScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CurrentUserContextProvider>
  );
}

export default App;
