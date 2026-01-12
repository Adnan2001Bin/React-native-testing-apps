import React, { useEffect } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
} from "react-native-reanimated";
import { COLORS } from "../../constants/theme";

interface PaginationDotsProps {
  total: number;
  current: number;
  activeColor?: string;
  inactiveColor?: string;
}

const Dot = ({ active }: { active: boolean }) => {
  const width = useSharedValue(8);
  const opacity = useSharedValue(0.3);

  useEffect(() => {
    width.value = withTiming(active ? 20 : 8, { duration: 300 });
    opacity.value = withTiming(active ? 1 : 0.3, { duration: 300 });
  }, [active]);

  const style = useAnimatedStyle(() => ({
    width: width.value,
    opacity: opacity.value,
  }));

  return (
    <Animated.View
      style={[styles.dot, style, { backgroundColor: COLORS.white }]}
    />
  );
};

const PaginationDots: React.FC<PaginationDotsProps> = ({ total, current }) => {
  return (
    <View style={styles.container}>
      {[...Array(total)].map((_, index) => (
        <Dot key={index} active={index === current} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

export default PaginationDots;
