import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import { colors } from "../constants/colors";
import BadgeIcon from "../components/ui/BadgeIcon";
import FloatingParticles from "../components/animation/FloatingParticles";
import ConfettiParticle from "../components/animation/ConfettiParticle";
import FadeInView from "../components/animation/FadeInView";
import ScaleView from "../components/animation/ScaleView";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withDelay,
  Easing,
  interpolate,
} from "react-native-reanimated";

type OrderSuccessScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "OrderSuccess"
>;

const { width, height } = Dimensions.get("window");

const OrderSuccessScreen = () => {
  const navigation = useNavigation<OrderSuccessScreenNavigationProp>();
  const [showConfetti, setShowConfetti] = useState(false);

  // Badge rotation wobble
  const rotate = useSharedValue(0);

  useEffect(() => {
    setShowConfetti(true);

    // Wobble animation
    rotate.value = withDelay(
      200,
      withRepeat(
        withTiming(1, { duration: 2000, easing: Easing.inOut(Easing.sin) }),
        -1,
        true
      )
    );
  }, []);

  const badgeAnimatedStyle = useAnimatedStyle(() => {
    const rotation = interpolate(rotate.value, [0, 1], [-3, 3]); // -3deg to 3deg
    return {
      transform: [{ rotate: `${rotation}deg` }],
    };
  });

  const generateConfetti = () => {
    const particles = [];
    const centerX = width / 2;
    const centerY = height * 0.25 + 50; // Badge center approx

    for (let i = 0; i < 40; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 150 + 50;
      const endX = Math.cos(angle) * distance;
      const endY = Math.sin(angle) * distance;

      particles.push(
        <ConfettiParticle
          key={i}
          startX={0}
          startY={0}
          endX={endX}
          endY={endY}
          delay={Math.random() * 500 + 300}
          color={Math.random() > 0.5 ? colors.blckGold : colors.blckAccent}
        />
      );
    }
    return (
      <View
        style={{
          position: "absolute",
          left: centerX,
          top: centerY,
          width: 0,
          height: 0,
        }}
      >
        {particles}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />

      {/* Background Particles */}
      <FloatingParticles count={15} />

      <View style={styles.content}>
        {/* Badge Section */}
        <ScaleView duration={800} type="spring" fromScale={0.3} toScale={1}>
          <Animated.View style={[styles.badgeWrapper, badgeAnimatedStyle]}>
            <BadgeIcon size={140} textTop="ON TIME" textBottom="GUARANTEE" />
          </Animated.View>
        </ScaleView>

        {showConfetti && generateConfetti()}

        {/* Text Section */}
        <View style={styles.textContainer}>
          <FadeInView delay={500} duration={600}>
            <Text style={styles.successText}>Your BLCK order is placed!</Text>
          </FadeInView>

          <View style={styles.benefitsList}>
            <FadeInView delay={800} duration={500} style={styles.benefitItem}>
              <View style={styles.bullet} />
              <Text style={styles.benefitText}>₹44 SAVED</Text>
            </FadeInView>

            <FadeInView delay={1000} duration={500} style={styles.benefitItem}>
              <View style={styles.bullet} />
              <Text style={styles.benefitText}>ON-TIME GUARANTEE</Text>
            </FadeInView>
          </View>
        </View>
      </View>

      <FadeInView delay={2000} style={styles.buttonContainer}>
        <PrimaryButton
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </FadeInView>
    </View>
  );
};

// React.interpolate wrapper for Reanimated v2/3 interpolation logic if needed
// Actually, interpolate in Reanimated is imported as `interpolate`
// But here I used React.interpolate which doesn't exist. I should use useDerivedValue or standard logic.
// I'll fix the interpolation.

/*FIXME: interpolation*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingTop: "25%", // 25% from top
  },
  badgeWrapper: {
    marginBottom: 30,
    zIndex: 10,
  },
  textContainer: {
    alignItems: "center",
    zIndex: 20,
  },
  successText: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: 24,
    textAlign: "center",
  },
  benefitsList: {
    width: "100%",
    paddingHorizontal: 40,
  },
  benefitItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: "#FAFAFA",
    padding: 12,
    borderRadius: 8,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.blckGold,
    marginRight: 10,
  },
  benefitText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    paddingHorizontal: 20,
  },
});

export default OrderSuccessScreen;
