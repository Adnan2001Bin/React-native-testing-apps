import React, { useEffect } from "react";
import { ViewStyle, StyleProp } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
  withSpring,
} from "react-native-reanimated";

interface ScaleViewProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  fromScale?: number;
  toScale?: number;
  style?: StyleProp<ViewStyle>;
  type?: "timing" | "spring";
}

const ScaleView: React.FC<ScaleViewProps> = ({
  children,
  duration = 500,
  delay = 0,
  fromScale = 0,
  toScale = 1,
  style,
  type = "timing",
}) => {
  const scale = useSharedValue(fromScale);

  useEffect(() => {
    if (type === "spring") {
      scale.value = withDelay(delay, withSpring(toScale));
    } else {
      scale.value = withDelay(delay, withTiming(toScale, { duration }));
    }
  }, [delay, duration, toScale, type]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <Animated.View style={[style, animatedStyle]}>{children}</Animated.View>
  );
};

export default ScaleView;
