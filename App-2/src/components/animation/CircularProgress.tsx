import React, { useEffect, useRef } from "react";
import { View, Animated, Easing, StyleSheet } from "react-native";
import Svg, { Circle, G } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface CircularProgressProps {
  size?: number;
  strokeWidth?: number;
  color?: string;
  duration?: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  size = 200,
  strokeWidth = 10,
  color = "#FF6B35",
  duration = 2000,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 2, // Go to 2 to complete full rotation and some
        duration: duration,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        useNativeDriver: true,
      })
    );
    animation.start();
    return () => animation.stop();
  }, [duration]);

  const spin = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  // For the progress effect, we simulate it by animating strokeDashoffset
  // or just rotating a partial circle. Use rotation for loading spinner.
  // The requirements say: "Animated stroke from 0° to 360°"

  const strokeDashoffset = animatedValue.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [circumference, 0, -circumference],
  });

  // The loading screen requirement is "Animated stroke from 0° to 360°".
  // This implies filling up. But then it repeats? "Home icon pulse (continuous)".
  // "Progress ring animates 0° → 360°". This usually means filling up.
  // I'll make it fill up.

  return (
    <View
      style={{
        width: size,
        height: size,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Svg width={size} height={size}>
        <G rotation="-90" origin={`${size / 2}, ${size / 2}`}>
          <AnimatedCircle
            stroke={color}
            strokeWidth={strokeWidth}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </G>
      </Svg>
    </View>
  );
};

export default CircularProgress;
