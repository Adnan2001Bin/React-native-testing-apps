import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  Easing,
  runOnJS,
} from "react-native-reanimated";
import { COLORS, SIZES, ANIMATION } from "../../constants/theme";
import Text from "../../components/ui/Text";
import { RootStackParamList } from "../../app/Navigation";

type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Welcome"
>;

const WelcomeScreen = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  const textTranslateX = useSharedValue(-SIZES.width);
  const logoTranslateX = useSharedValue(SIZES.width);
  const imageScale = useSharedValue(1.2);
  const imageOpacity = useSharedValue(0);

  useEffect(() => {
    // Start animations
    textTranslateX.value = withTiming(0, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
    logoTranslateX.value = withTiming(0, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });

    imageScale.value = withTiming(1, { duration: 2500 });
    imageOpacity.value = withTiming(0.4, { duration: 1000 });

    // Auto navigate
    const timer = setTimeout(() => {
      navigation.replace("Onboarding");
    }, ANIMATION.welcomeDuration);

    return () => clearTimeout(timer);
  }, []);

  const textStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: textTranslateX.value }],
  }));

  const logoStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: logoTranslateX.value }],
  }));

  const bgImageStyle = useAnimatedStyle(() => ({
    transform: [{ scale: imageScale.value }],
    opacity: imageOpacity.value,
  }));

  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Animated.Image
          source={{
            uri: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop",
          }}
          style={[styles.image, bgImageStyle]}
          resizeMode="cover"
        />
      </View>

      <View style={styles.content}>
        <Animated.View style={[styles.textContainer, textStyle]}>
          <Text variant="largeTitle" style={styles.title}>
            Meet{"\n"}travellers,{"\n"}now!
          </Text>
        </Animated.View>

        <Animated.View style={[styles.logoContainer, logoStyle]}>
          <View style={styles.logoIcon}>
            <Text variant="h2" color={COLORS.primary}>
              H
            </Text>
          </View>
          <Text variant="h2">HOSTELWORLD</Text>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: SIZES.padding,
  },
  textContainer: {
    marginBottom: 40,
  },
  title: {
    fontWeight: "900",
  },
  logoContainer: {
    position: "absolute",
    bottom: 50,
    left: SIZES.padding,
    flexDirection: "row",
    alignItems: "center",
  },
  logoIcon: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
});

export default WelcomeScreen;
