import { TextStyle } from "react-native";
import { COLORS } from "./colors";

export const TYPOGRAPHY = {
  h1: {
    fontSize: 32,
    fontWeight: "700",
    color: COLORS.text,
  } as TextStyle,
  h2: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.text,
  } as TextStyle,
  h3: {
    fontSize: 20,
    fontWeight: "600",
    color: COLORS.text,
  } as TextStyle,
  bodyLarge: {
    fontSize: 16,
    fontWeight: "400",
    color: COLORS.text,
  } as TextStyle,
  body: {
    fontSize: 14,
    fontWeight: "400",
    color: COLORS.text,
  } as TextStyle,
  caption: {
    fontSize: 12,
    fontWeight: "400",
    color: COLORS.textSecondary,
  } as TextStyle,
  small: {
    fontSize: 10,
    fontWeight: "400",
    color: COLORS.textSecondary,
  } as TextStyle,
};
