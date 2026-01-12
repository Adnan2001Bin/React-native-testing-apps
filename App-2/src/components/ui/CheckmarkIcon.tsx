import React, { useEffect } from "react";
import Svg, { Path } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withTiming,
  Easing,
} from "react-native-reanimated";

const AnimatedPath = Animated.createAnimatedComponent(Path);

interface CheckmarkProps {
  size?: number;
  color?: string;
  delay?: number;
  duration?: number;
}

const CheckmarkIcon: React.FC<CheckmarkProps> = ({
  size = 50,
  color = "#f5e6d3",
  delay = 300,
  duration = 800,
}) => {
  const progress = useSharedValue(0);
  // Approximate length of the checkmark path
  const length = 50;

  useEffect(() => {
    progress.value = withDelay(
      delay,
      withTiming(1, { duration, easing: Easing.bezier(0.25, 0.1, 0.25, 1) })
    );
  }, [delay, duration]);

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: length - length * progress.value,
    };
  });

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <AnimatedPath
        d="M20 6L9 17L4 12"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={length}
        animatedProps={animatedProps}
      />
    </Svg>
  );
};

export default CheckmarkIcon;
