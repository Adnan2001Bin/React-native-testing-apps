import React, { useEffect } from "react";
import { ViewStyle, StyleProp } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  Easing,
  FadeIn as ReanimatedFadeIn,
  FadeOut as ReanimatedFadeOut,
  WithTimingConfig,
} from "react-native-reanimated";

interface FadeInProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  style?: StyleProp<ViewStyle>;
  fullWidth?: boolean;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  duration = 500,
  delay = 0,
  style,
  fullWidth = false,
}) => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withDelay(
      delay,
      withTiming(1, {
        duration: duration,
        easing: Easing.out(Easing.exp),
      })
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View
      style={[style, animatedStyle, fullWidth && { width: "100%" }]}
    >
      {children}
    </Animated.View>
  );
};

export default FadeIn;
