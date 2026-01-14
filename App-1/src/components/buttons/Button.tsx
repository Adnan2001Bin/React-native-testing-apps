import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

interface ButtonProps {
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  variant?: "primary" | "secondary" | "transparent";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  style,
  labelStyle,
  variant = "primary",
}) => {
  let backgroundColor = COLORS.white;
  let textColor = COLORS.primary;

  if (variant === "secondary") {
    backgroundColor = COLORS.secondary;
    textColor = COLORS.white;
  } else if (variant === "transparent") {
    backgroundColor = "transparent";
    textColor = COLORS.white;
  }

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.label, { color: textColor }, labelStyle]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: SIZES.radius,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 120,
  },
  label: {
    fontSize: 16,
    fontWeight: "700",
  },
});

export default Button;
