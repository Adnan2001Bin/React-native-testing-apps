import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/home/HomeScreen";
import CalendarScreen from "../screens/calendar/CalendarScreen";
import SearchScreen from "../screens/search/SearchScreen";
import MessagesScreen from "../screens/messages/MessagesScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import { TabParamList } from "./types";
import { COLORS } from "../constants/colors";
import { SPACING } from "../constants/spacing";

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === "ios" ? 88 : 60,
          paddingTop: SPACING.xs,
          paddingBottom: Platform.OS === "ios" ? 28 : 8,
          backgroundColor: COLORS.background,
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.05,
          shadowRadius: 10,
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textLight,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "500",
          marginTop: -4,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Calendar":
              iconName = focused ? "calendar" : "calendar-outline";
              break;
            case "Search":
              iconName = focused ? "search" : "search-outline";
              break;
            case "Messages":
              iconName = focused
                ? "chatbubble-ellipses"
                : "chatbubble-ellipses-outline";
              break;
            case "Profile":
              iconName = focused ? "person" : "person-outline";
              break;
            default:
              iconName = "help";
          }

          // Search tab custom styling (middle big button)
          if (route.name === "Search") {
            return (
              <Ionicons
                name={focused ? "search" : "search-outline"}
                size={28}
                color={color}
                style={{
                  marginBottom: 4,
                }}
              />
            );
          }

          return <Ionicons name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{ tabBarLabel: "Calendar" }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIconStyle: {
            // Additional styling if we wanted a floating button, but keeping it simple for now as per "Tabs (in order): Home, Calendar, Search, Message, Profile"
          },
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{ tabBarLabel: "Messages" }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: "Profile" }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
