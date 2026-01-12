import React, { useEffect } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import { colors } from "../constants/colors";
import CheckmarkIcon from "../components/ui/CheckmarkIcon";
import ScaleView from "../components/animation/ScaleView";
import FadeInView from "../components/animation/FadeInView";

type OrderConfirmationScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "OrderConfirmation"
>;

const OrderConfirmationScreen = () => {
  const navigation = useNavigation<OrderConfirmationScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("OrderSuccess");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />

      <View style={styles.content}>
        {/* Checkmark Section */}
        <ScaleView duration={400} type="spring" fromScale={0} toScale={1}>
          <View style={styles.iconWrapper}>
            <View style={styles.iconBackground}>
              <CheckmarkIcon size={40} color={colors.beige} delay={300} />
            </View>
            {/* Gold Ring */}
            <View style={styles.ring} />
          </View>
        </ScaleView>

        {/* Text Section */}
        <View style={styles.textContainer}>
          <FadeInView delay={500} duration={500}>
            <Text style={styles.successText}>Your BLCK order is placed!</Text>
          </FadeInView>

          <FadeInView delay={800} duration={500}>
            <View style={styles.savingsBadge}>
              <Text style={styles.savingsText}>₹44 SAVED</Text>
            </View>
          </FadeInView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center", // Vertically centered as per layout? Prompt says Icon 35% from top.
    // Let's use flex and padding to approximate 35%
    paddingTop: "35%",
  },
  content: {
    alignItems: "center",
  },
  iconWrapper: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  iconBackground: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#3d2b3a", // Dark burgundy
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  ring: {
    position: "absolute",
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: colors.blckGold,
    zIndex: 1,
    opacity: 0.6,
  },
  textContainer: {
    alignItems: "center",
  },
  successText: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: 12,
    textAlign: "center",
  },
  savingsBadge: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: "#f0f0f0",
    borderRadius: 4,
  },
  savingsText: {
    fontSize: 10,
    fontWeight: "600",
    color: colors.textSecondary,
    letterSpacing: 1,
  },
});

export default OrderConfirmationScreen;
