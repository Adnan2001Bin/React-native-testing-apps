import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  withDelay,
  Easing,
  withSequence,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

interface ParticleProps {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color?: string;
}

const Particle: React.FC<ParticleProps> = ({
  x,
  y,
  size,
  duration,
  delay,
  color = "#d4af37",
}) => {
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(1, { duration: duration / 2 }),
          withTiming(0, { duration: duration / 2 })
        ),
        -1,
        true
      )
    );

    translateY.value = withDelay(
      delay,
      withRepeat(
        withTiming(-50, { duration: duration, easing: Easing.linear }),
        -1,
        false
      )
    );
  }, [delay, duration]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          left: x,
          top: y,
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: color,
        },
        animatedStyle,
      ]}
    />
  );
};

interface FloatingParticlesProps {
  count?: number;
  areaWidth?: number;
  areaHeight?: number;
}

const FloatingParticles: React.FC<FloatingParticlesProps> = ({
  count = 20,
  areaWidth = width,
  areaHeight = height,
}) => {
  const particles = Array.from({ length: count }).map((_, i) => ({
    key: i,
    x: Math.random() * areaWidth,
    y: Math.random() * areaHeight,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 2000 + 3000,
    delay: Math.random() * 2000,
  }));

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {particles.map((p) => (
        <Particle
          key={p.key}
          x={p.x}
          y={p.y}
          size={p.size}
          duration={p.duration}
          delay={p.delay}
        />
      ))}
    </View>
  );
};

export default FloatingParticles;
