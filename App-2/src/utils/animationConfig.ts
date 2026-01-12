import { ViewStyle } from "react-native";

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  useNativeDriver?: boolean;
}

export const defaultAnimationConfig: AnimationConfig = {
  duration: 300,
  delay: 0,
  useNativeDriver: true,
};

export const commonStyles: { [key: string]: ViewStyle } = {
  absoluteFill: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
};
