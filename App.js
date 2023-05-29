import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import TouchScreen from "./src/screens/TouchScreen";
import PinScreen from "./src/screens/PinScreen";
import HomeScreen from "./src/screens/HomeScreen";
import CardsScreen from "./src/screens/CardsScreen";
import SendRequestScreen from "./src/screens/SendRequestScreen";
import ExpoSplashScreen from "expo-splash-screen";

export default function App() {
  const AppStack = createStackNavigator();
  const TabStack = createBottomTabNavigator();

  const hideSplash = async () => {
    try {
      await ExpoSplashScreen.hideAsync();
    } catch {}
  }


  const tabBarOptions = {
    showLabel: true,

    theme: "dark",
  };

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused }) => {
      let icon = "";
      const color = focused ? "#559dff" : "#828282";
      const size = 24;

      switch (route.name) {
        case "Cards":
          icon = "credit-card";
          break;

        case "SendRequest":
          icon = "send";
          break;

        case "Home":
          icon = "dashboard";
          break;

        default:
          icon = "dashboard";
      }

      return <MaterialIcons name={icon} size={size} color={color} />;
    },
    tabBarShowLabel: true,
    tabBarStyle: [
      {
        display: "flex",
      },
      null,
    ],
  });

  const TabStackScreens = () => {
    return (
      <TabStack.Navigator screenOptions={screenOptions}>
        <TabStack.Screen
          name="Cards"
          component={CardsScreen}
          options={{
            headerShown: false,
            title: "My Cards",
            tabBarStyle: {
              backgroundColor: "#1e1e1e",
              borderTopColor: "#1e1e1e",
              paddingBottom: 32,
            },
          }}
        />
        <TabStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "#1e1e1e",
              borderTopColor: "#1e1e1e",
              paddingBottom: 32,
            },
          }}
        />
        <TabStack.Screen
          name="SendRequest"
          component={SendRequestScreen}
          options={{
            headerShown: false,
            title: "Send & Request",
            tabBarStyle: {
              backgroundColor: "#1e1e1e",
              borderTopColor: "#1e1e1e",
              paddingBottom: 32,
            },
          }}
        />
      </TabStack.Navigator>
    );
  };

  useEffect( () => {
    hideSplash();
  }, []);

  

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Touch" component={TouchScreen} />
        <AppStack.Screen name="Tabs" component={TabStackScreens} />
        <AppStack.Screen name="Pin" component={PinScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
