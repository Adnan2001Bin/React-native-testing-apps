import React, { useEffect } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withDelay,
} from "react-native-reanimated";
import { RootStackParamList } from "../navigation/types";
import { colors } from "../constants/colors";
import CircularProgress from "../components/animation/CircularProgress";
import HomeIcon from "../components/ui/HomeIcon";

type LoadingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Loading"
>;

const LoadingScreen = () => {
  const navigation = useNavigation<LoadingScreenNavigationProp>();
  const scale = useSharedValue(0.95);
  const opacity = useSharedValue(0.3);

  useEffect(() => {
    // Pulse animation
    scale.value = withRepeat(withTiming(1.0, { duration: 1000 }), -1, true);
    opacity.value = withRepeat(withTiming(0.7, { duration: 1000 }), -1, true);

    const timer = setTimeout(() => {
      navigation.replace("OrderConfirmation");
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigation, scale, opacity]);

  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const glowStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />

      <View style={styles.centerContainer}>
        {/* Glow behind */}
        <Animated.View style={[styles.glow, glowStyle]} />

        {/* Circular Progress */}
        <CircularProgress
          size={200}
          strokeWidth={8}
          color={colors.blckAccent}
          duration={2000}
        />

        {/* Center Icon */}
        <View style={styles.iconContainer}>
          <Animated.View style={[styles.iconCircle, animatedIconStyle]}>
            <HomeIcon size={32} color={colors.white} />
          </Animated.View>
        </View>
      </View>
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
  centerContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 200,
  },
  iconContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#2a2a2a",
    justifyContent: "center",
    alignItems: "center",
    // Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  glow: {
    position: "absolute",
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "rgba(255, 107, 53, 0.2)", // Orange glow
  },
});

export default LoadingScreen;
