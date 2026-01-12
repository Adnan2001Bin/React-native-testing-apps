import React from "react";
import { Text as RNText, TextStyle, StyleProp, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants/theme";

interface TextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  variant?:
    | "largeTitle"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "body1"
    | "body2"
    | "body3"
    | "body4";
  color?: string;
  align?: "left" | "center" | "right";
}

const Text: React.FC<TextProps> = ({
  children,
  style,
  variant = "body3",
  color = COLORS.white,
  align = "left",
}) => {
  const textStyles: StyleProp<TextStyle> = [
    FONTS[variant],
    { color, textAlign: align },
    style,
  ];

  return <RNText style={textStyles}>{children}</RNText>;
};

export default Text;
