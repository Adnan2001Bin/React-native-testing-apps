import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Place } from "../../constants/mockData";
import { COLORS } from "../../constants/colors";
import { SPACING, BORDER_RADIUS } from "../../constants/spacing";
import { TYPOGRAPHY } from "../../constants/typography";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface PlaceCardProps {
  place: Place;
  onPress: () => void;
  variant?: "vertical" | "horizontal";
}

const PlaceCard: React.FC<PlaceCardProps> = ({
  place,
  onPress,
  variant = "vertical",
}) => {
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

  if (variant === "horizontal") {
    return (
      <AnimatedPressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[styles.containerHorizontal, animatedStyle]}
      >
        <Image source={{ uri: place.image }} style={styles.imageHorizontal} />
        <View style={styles.infoContainerHorizontal}>
          <View>
            <Text style={[styles.title, TYPOGRAPHY.h3]} numberOfLines={1}>
              {place.name}
            </Text>
            <View style={styles.locationContainer}>
              <Ionicons
                name="location-outline"
                size={14}
                color={COLORS.textSecondary}
              />
              <Text style={[styles.location, TYPOGRAPHY.caption]}>
                {place.location}
              </Text>
            </View>
          </View>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={14} color={COLORS.accent} />
            <Text style={[styles.rating, TYPOGRAPHY.caption]}>
              {place.rating}
            </Text>
          </View>
        </View>
      </AnimatedPressable>
    );
  }

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[styles.container, animatedStyle]}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: place.image }} style={styles.image} />
        <TouchableOpacity style={styles.favoriteButton}>
          <Ionicons name="bookmark-outline" size={20} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Text style={[styles.title, TYPOGRAPHY.h3]} numberOfLines={1}>
          {place.name}
        </Text>

        <View style={styles.locationContainer}>
          <Ionicons
            name="location-outline"
            size={16}
            color={COLORS.textSecondary}
          />
          <Text style={[styles.location, TYPOGRAPHY.body]} numberOfLines={1}>
            {place.location}
          </Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={16} color={COLORS.accent} />
            <Text style={styles.ratingText}>{place.rating}</Text>
          </View>
          <View style={styles.usersPreview}>
            {/* Simulate user avatars */}
            <View
              style={[
                styles.userDot,
                { backgroundColor: "#FF5733", zIndex: 3, left: 0 },
              ]}
            />
            <View
              style={[
                styles.userDot,
                { backgroundColor: "#33FF57", zIndex: 2, left: 15 },
              ]}
            />
            <View
              style={[
                styles.userDot,
                { backgroundColor: "#3357FF", zIndex: 1, left: 30 },
              ]}
            />
            <Text style={[styles.moreUsers, { marginLeft: 45 }]}>+50</Text>
          </View>
        </View>
      </View>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    backgroundColor: COLORS.background,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.sm,
    marginRight: SPACING.md,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: SPACING.sm, // space for shadow
  },
  containerHorizontal: {
    flexDirection: "row",
    alignItems: "center",
    padding: SPACING.sm,
    backgroundColor: COLORS.background,
    borderRadius: BORDER_RADIUS.md,
    marginBottom: SPACING.md,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: BORDER_RADIUS.md,
  },
  imageHorizontal: {
    width: 70,
    height: 70,
    borderRadius: BORDER_RADIUS.md,
  },
  favoriteButton: {
    position: "absolute",
    top: SPACING.sm,
    right: SPACING.sm,
    backgroundColor: "rgba(0,0,0,0.2)",
    padding: SPACING.xs,
    borderRadius: BORDER_RADIUS.full,
  },
  infoContainer: {
    marginTop: SPACING.sm,
  },
  infoContainerHorizontal: {
    flex: 1,
    marginLeft: SPACING.md,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.sm,
  },
  location: {
    color: COLORS.textSecondary,
    marginLeft: 4,
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontWeight: "600",
    color: COLORS.text,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  rating: {
    fontWeight: "600",
  },
  usersPreview: {
    flexDirection: "row",
    alignItems: "center",
    height: 24,
  },
  userDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.white,
    position: "absolute",
  },
  moreUsers: {
    fontSize: 10,
    color: COLORS.textSecondary,
  },
});

export default PlaceCard;
