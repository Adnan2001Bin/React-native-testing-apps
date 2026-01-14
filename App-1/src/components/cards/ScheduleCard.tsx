import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { IMAGES } from "../../constants/images";
import { COLORS } from "../../constants/colors";
import { SPACING, BORDER_RADIUS } from "../../constants/spacing";
import { TYPOGRAPHY } from "../../constants/typography";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface ScheduleCardProps {
  schedule: {
    id: string;
    placeName: string;
    location: string;
    date: string;
    image: string;
  };
  onPress: () => void;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({ schedule, onPress }) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(0.98);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[styles.container, animatedStyle]}
    >
      <Image source={{ uri: schedule.image }} style={styles.image} />

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.date}>{schedule.date}</Text>
        </View>
        <Text style={[styles.title, TYPOGRAPHY.h3]} numberOfLines={1}>
          {schedule.placeName}
        </Text>
        <View style={styles.locationContainer}>
          <Ionicons
            name="location-outline"
            size={14}
            color={COLORS.textSecondary}
          />
          <Text style={[styles.location, TYPOGRAPHY.caption]}>
            {schedule.location}
          </Text>
        </View>
      </View>

      <View style={styles.arrow}>
        <Ionicons
          name="chevron-forward"
          size={20}
          color={COLORS.textSecondary}
        />
      </View>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.background,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: BORDER_RADIUS.sm,
  },
  content: {
    flex: 1,
    marginLeft: SPACING.md,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 2,
  },
  date: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  title: {
    fontSize: 16,
    marginBottom: 2,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    color: COLORS.textSecondary,
    marginLeft: 2,
  },
  arrow: {
    padding: SPACING.xs,
  },
});

export default ScheduleCard;
