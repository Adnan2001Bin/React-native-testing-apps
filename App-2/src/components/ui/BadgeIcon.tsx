import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { colors } from "../../constants/colors";

interface BadgeIconProps {
  size?: number;
  textTop?: string;
  textBottom?: string;
}

const BadgeIcon: React.FC<BadgeIconProps> = ({
  size = 100,
  textTop,
  textBottom,
}) => {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      {/* Scalloped BG Approximation - just a decorated circle */}
      <Svg width={size} height={size} viewBox="0 0 100 100">
        <Circle
          cx="50"
          cy="50"
          r="48"
          fill={colors.white}
          stroke={colors.beige}
          strokeWidth="2"
        />
        <Circle cx="50" cy="50" r="40" fill={colors.blckPrimary} />

        {/* Diamond/Gem Center */}
        <Path
          d="M50 25 L75 50 L50 75 L25 50 Z"
          fill={colors.blckGold}
          opacity={0.8}
        />
        <Path d="M50 25 L65 50 L50 75 L35 50 Z" fill="#FFE5B4" opacity={0.5} />
      </Svg>

      {textTop && (
        <View style={styles.textTopContainer}>
          <Text style={styles.badgeText}>{textTop}</Text>
        </View>
      )}

      {textBottom && (
        <View style={styles.textBottomContainer}>
          <Text style={styles.badgeText}>{textBottom}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  textTopContainer: {
    position: "absolute",
    top: 5,
  },
  textBottomContainer: {
    position: "absolute",
    bottom: 5,
  },
  badgeText: {
    fontSize: 8,
    fontWeight: "700",
    color: colors.blckPrimary,
    textAlign: "center",
  },
});

export default BadgeIcon;
