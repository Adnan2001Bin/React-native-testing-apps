import React, { useEffect } from "react";
import { ViewStyle, StyleProp } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  Easing,
} from "react-native-reanimated";

interface SlideInProps {
  children: React.ReactNode;
  from?: "left" | "right" | "top" | "bottom";
  duration?: number;
  delay?: number;
  style?: StyleProp<ViewStyle>;
  offset?: number;
}

const SlideIn: React.FC<SlideInProps> = ({
  children,
  from = "bottom",
  duration = 600,
  delay = 0,
  style,
  offset = 100,
}) => {
  const opacity = useSharedValue(0);
  const translate = useSharedValue(offset);

  useEffect(() => {
    translate.value = withDelay(
      delay,
      withTiming(0, {
        duration: duration,
        easing: Easing.out(Easing.exp),
      })
    );
    opacity.value = withDelay(
      delay,
      withTiming(1, {
        duration: duration,
      })
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    const transform = [];

    if (from === "bottom" || from === "top") {
      // Correcting initial value logic for simplify
      // Actually, let's keep it simple: we animate TO 0.
      // Initial value should be set based on direction.
      // But useEffect sets the TARGET.
      // Wait, I initialized translate to `offset`.
      // If from bottom, positive offset moves it down.
      // If from top, negative offset moves it up.
    }

    let translateY = 0;
    let translateX = 0;

    if (from === "bottom") translateY = translate.value;
    if (from === "top") translateY = -translate.value;
    if (from === "right") translateX = translate.value;
    if (from === "left") translateX = -translate.value;

    return {
      opacity: opacity.value,
      transform: [{ translateX }, { translateY }],
    };
  });

  return (
    <Animated.View style={[style, animatedStyle]}>{children}</Animated.View>
  );
};

export default SlideIn;
