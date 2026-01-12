import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";

interface CenterLayoutProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const CenterLayout: React.FC<CenterLayoutProps> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
});

export default CenterLayout;
