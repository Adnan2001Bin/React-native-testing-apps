import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { colors } from "../constants/colors";
import FadeInView from "../components/animation/FadeInView";
import HomeIcon from "../components/ui/HomeIcon";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FadeInView duration={1000} style={styles.content}>
        <View style={styles.iconContainer}>
          <HomeIcon size={64} color={colors.blckPrimary} />
        </View>
        <Text style={styles.welcomeText}>Welcome to BLCK</Text>
        <Text style={styles.subText}>Your premium experience awaits.</Text>
      </FadeInView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.blckPrimary,
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: colors.textSecondary,
  },
});

export default HomeScreen;
