import { TextStyle } from "react-native";

export const typography: { [key: string]: TextStyle } = {
  h1: {
    fontSize: 32,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  h2: {
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 0.3,
  },
  body: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
  },
  caption: {
    fontSize: 12,
    fontWeight: "400",
    color: "#666666",
  },
  button: {
    fontSize: 16,
    fontWeight: "600",
  },
};
