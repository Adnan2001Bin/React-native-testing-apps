import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoadingScreen from "../screens/LoadingScreen";
import OrderConfirmationScreen from "../screens/OrderConfirmationScreen";
import OrderSuccessScreen from "../screens/OrderSuccessScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Loading"
        screenOptions={{
          headerShown: false,
          animation: "fade", // Use simple fade for screen transitions to let custom animations shine
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen
          name="OrderConfirmation"
          component={OrderConfirmationScreen}
        />
        <Stack.Screen name="OrderSuccess" component={OrderSuccessScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
