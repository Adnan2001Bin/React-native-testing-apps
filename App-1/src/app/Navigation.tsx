import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/welcome/WelcomeScreen";
import OnboardingScreen from "../screens/onboarding/OnboardingScreen";
import TabNavigator from "../navigation/TabNavigator";
import ChatScreen from "../screens/messages/ChatScreen";
import { RootStackParamList } from "../navigation/types";

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
