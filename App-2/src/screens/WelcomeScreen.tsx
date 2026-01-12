import React, { useEffect } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { RootStackParamList } from "../navigation/types";
import { colors } from "../constants/colors";
import { typography } from "../constants/typography";
import FadeInView from "../components/animation/FadeInView";
import ScaleView from "../components/animation/ScaleView";
import Svg, { Path } from "react-native-svg";

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Welcome"
>;

const WelcomeScreen = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Loading");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LinearGradient
        colors={colors.darkBgGradient as [string, string, ...string[]]}
        style={styles.gradient}
      >
        {/* Decorative Swirl (Static for now, animated would require complex SVG paths) */}
        <View style={styles.swirlContainer}>
          <Svg width={200} height={100} viewBox="0 0 200 100">
            <Path
              d="M10,50 Q50,0 100,50 T190,50"
              stroke={colors.blckGold}
              strokeWidth="1"
              fill="none"
              opacity={0.5}
            />
          </Svg>
        </View>

        <View style={styles.centerContent}>
          {/* Logo Section */}
          <ScaleView delay={500} duration={700} fromScale={0.8} toScale={1}>
            <FadeInView delay={500} duration={700} style={styles.logoContainer}>
              <View style={styles.diamondIcon}>
                <Svg width={24} height={24} viewBox="0 0 24 24">
                  <Path d="M12 2L22 12L12 22L2 12Z" fill={colors.blckGold} />
                </Svg>
              </View>
              <Text style={styles.logoText}>
                one <Text style={{ fontWeight: "700" }}>BLCK</Text>
              </Text>
            </FadeInView>
          </ScaleView>

          {/* Tagline */}
          <View style={styles.taglineContainer}>
            <FadeInView delay={1000} duration={800}>
              <Text style={styles.tagline}>Your elevated experience</Text>
            </FadeInView>
            <FadeInView delay={1500} duration={800}>
              <Text style={styles.taglineSub}>starts here...</Text>
            </FadeInView>
          </View>
        </View>

        {/* Bottom Badge */}
        <View style={styles.bottomContainer}>
          <FadeInView
            delay={1500}
            duration={800}
            style={{ width: "100%", alignItems: "center" }}
          >
            <View style={styles.validityBadge}>
              <Text style={styles.validityText}>Valid till 19 Mar '26</Text>
            </View>
          </FadeInView>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  swirlContainer: {
    position: "absolute",
    top: "15%",
    opacity: 0.6,
  },
  centerContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  diamondIcon: {
    marginRight: 10,
  },
  logoText: {
    fontSize: 32,
    color: "#E0E0E0", // Whitish silver
    fontFamily: "System", // Or custom font
    letterSpacing: 2,
  },
  taglineContainer: {
    alignItems: "center",
  },
  tagline: {
    fontSize: 18,
    color: "#CCCCCC",
    marginBottom: 5,
    textAlign: "center",
  },
  taglineSub: {
    fontSize: 16,
    color: "#999999",
    fontStyle: "italic",
  },
  bottomContainer: {
    // Positioned at bottom
    position: "absolute",
    bottom: 50,
    width: "100%",
    alignItems: "center",
  },
  validityBadge: {
    backgroundColor: "rgba(255,255,255,0.1)",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },
  validityText: {
    color: "#AAAAAA",
    fontSize: 12,
  },
});

export default WelcomeScreen;
