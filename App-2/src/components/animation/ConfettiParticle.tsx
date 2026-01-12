import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withTiming, 
  withDelay,
  Easing,
  withSequence
} from 'react-native-reanimated';

interface ConfettiProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  delay: number;
  color?: string;
}

const ConfettiParticle: React.FC<ConfettiProps> = ({ startX, startY, endX, endY, delay, color = '#d4af37' }) => {
  const translateX = useSharedValue(startX);
  const translateY = useSharedValue(startY);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0);

  useEffect(() => {
    opacity.value = withDelay(delay, withTiming(1, { duration: 300 }));
    scale.value = withDelay(delay, withTiming(1, { duration: 300 }));
    
    translateX.value = withDelay(delay, withTiming(endX, { duration: 1500, easing: Easing.out(Easing.quad) }));
    translateY.value = withDelay(delay, withTiming(endY, { duration: 1500, easing: Easing.out(Easing.quad) }));
    
    // Fade out at end
    opacity.value = withDelay(delay + 1000, withTiming(0, { duration: 500 }));
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value }
      ],
    };
  });

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          width: 6,
          height: 6,
          borderRadius: 3,
          backgroundColor: color,
        },
        animatedStyle,
      ]}
    />
  );
};

export default ConfettiParticle;
