import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";

import MeetTravellers from "./steps/MeetTravellers";
import ChatDemo from "./steps/ChatDemo";
import Discover from "./steps/Discover";
import Button from "../../components/buttons/Button";
import { COLORS, SIZES, ANIMATION } from "../../constants/theme";
import { RootStackParamList } from "../../navigation/types";
import Text from "../../components/ui/Text";

import PaginationDots from "../../components/ui/PaginationDots";

const TOTAL_STEPS = 3;

type OnboardingNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Onboarding"
>;

const OnboardingScreen = () => {
  const navigation = useNavigation<OnboardingNavigationProp>();
  const [currentStep, setCurrentStep] = useState(0);

  const bgProgress = useSharedValue(0);

  useEffect(() => {
    // Animate background based on step
    // Step 0: 0 (Purple)
    // Step 1: 0 (Purple)
    // Step 2: 1 (Pink)
    const targetValue = currentStep === 2 ? 1 : 0;
    bgProgress.value = withTiming(targetValue, { duration: ANIMATION.medium });
  }, [currentStep]);

  const animatedBgStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      bgProgress.value,
      [0, 1],
      [COLORS.primary, COLORS.backgroundPink]
    );
    return { backgroundColor };
  });

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      navigation.replace("Main");
    }
  };

  const renderContent = () => {
    switch (currentStep) {
      case 0:
        return <MeetTravellers />;
      case 1:
        return <ChatDemo />;
      case 2:
        return <Discover />;
      default:
        return null;
    }
  };

  return (
    <Animated.View style={[styles.container, animatedBgStyle]}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.contentContainer}>
          {/* Render current step content */}
          {/* We can key it to force re-mounting and triggering animations */}
          <View style={styles.stepWrapper} key={currentStep}>
            {renderContent()}
          </View>
        </View>

        <View style={styles.footer}>
          <PaginationDots total={TOTAL_STEPS} current={currentStep} />

          <TouchableOpacity onPress={handleNext} style={styles.nextButtonRow}>
            <Text variant="h4" style={{ fontWeight: "700", marginRight: 8 }}>
              {currentStep === TOTAL_STEPS - 1 ? "I'm ready!" : "Next"}
            </Text>
            {/* Arrow Icon would go here */}
            <Text variant="h3">→</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  stepWrapper: {
    flex: 1,
  },
  footer: {
    padding: SIZES.padding,
    paddingBottom: SIZES.padding2,
    flexDirection: "column",
    alignItems: "center",
  },
  nextButtonRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default OnboardingScreen;
