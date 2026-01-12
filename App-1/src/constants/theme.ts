import { Dimensions } from "react-native";
import { COLORS } from "./colors";

const { width, height } = Dimensions.get("window");

export const SIZES = {
  // Global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 24,
  padding2: 36,

  // Font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,

  // App dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: "System",
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
    fontWeight: "800",
  },
  h1: {
    fontFamily: "System",
    fontSize: SIZES.h1,
    lineHeight: 36,
    fontWeight: "700",
  },
  h2: {
    fontFamily: "System",
    fontSize: SIZES.h2,
    lineHeight: 30,
    fontWeight: "700",
  },
  h3: {
    fontFamily: "System",
    fontSize: SIZES.h3,
    lineHeight: 22,
    fontWeight: "600",
  },
  h4: { fontFamily: "System", fontSize: SIZES.h4, lineHeight: 22 },
  body1: { fontFamily: "System", fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontFamily: "System", fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: "System", fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontFamily: "System", fontSize: SIZES.body4, lineHeight: 22 },
};

export const ANIMATION = {
  // Durations (ms)
  short: 300,
  medium: 500,
  long: 800,
  welcomeDuration: 2500,

  // Delays
  delayShort: 100,
  delayMedium: 300,
};

const appTheme = { COLORS, SIZES, FONTS, ANIMATION };

export { COLORS };
export default appTheme;
