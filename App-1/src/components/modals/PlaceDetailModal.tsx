import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Place } from "../../constants/mockData";
import AnimatedModal from "./AnimatedModal";
import { COLORS } from "../../constants/colors";
import { SPACING, BORDER_RADIUS } from "../../constants/spacing";
import { TYPOGRAPHY } from "../../constants/typography";

const { width } = Dimensions.get("window");

interface PlaceDetailModalProps {
  visible: boolean;
  place: Place | null;
  onClose: () => void;
}

const PlaceDetailModal: React.FC<PlaceDetailModalProps> = ({
  visible,
  place,
  onClose,
}) => {
  if (!place) return null;

  return (
    <AnimatedModal visible={visible} onClose={onClose}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Gallery / Main Image */}
        <Animated.View
          entering={FadeInDown.duration(400)}
          style={styles.imageContainer}
        >
          <Image source={{ uri: place.image }} style={styles.image} />
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={24} color={COLORS.text} />
          </TouchableOpacity>
        </Animated.View>

        {/* Content */}
        <View style={styles.content}>
          <Animated.View entering={FadeInDown.duration(400).delay(100)}>
            <Text style={[styles.title, TYPOGRAPHY.h2]}>{place.name}</Text>
            <View style={styles.locationContainer}>
              <Ionicons
                name="location-outline"
                size={16}
                color={COLORS.textSecondary}
              />
              <Text style={[styles.location, TYPOGRAPHY.body]}>
                {place.location}
              </Text>
            </View>
          </Animated.View>

          {/* Rating and Price */}
          <Animated.View
            entering={FadeInDown.duration(400).delay(200)}
            style={styles.statsRow}
          >
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={18} color={COLORS.accent} />
              <Text style={[styles.rating, TYPOGRAPHY.bodyLarge]}>
                {place.rating}
              </Text>
              <Text style={styles.reviews}>({place.reviews})</Text>
            </View>
            <Text style={styles.priceContainer}>
              <Text style={[styles.price, TYPOGRAPHY.h3]}>${place.price}</Text>
              <Text style={styles.priceUnit}>/Person</Text>
            </Text>
          </Animated.View>

          {/* Amenities */}
          <Animated.View
            entering={FadeInDown.duration(400).delay(300)}
            style={styles.section}
          >
            <View style={styles.amenitiesRow}>
              <View style={styles.amenityItem}>
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                  }}
                  style={styles.amenityImage}
                />
                {/* Using random images for amenities placeholders as specified in designs usually */}
              </View>
              <View style={styles.amenityItem}>
                <Ionicons name="wifi" size={24} color={COLORS.textSecondary} />
              </View>
              <View style={styles.amenityItem}>
                <Ionicons
                  name="restaurant"
                  size={24}
                  color={COLORS.textSecondary}
                />
              </View>
              <View style={styles.amenityItem}>
                <Ionicons name="bed" size={24} color={COLORS.textSecondary} />
              </View>
              <View style={styles.amenityMore}>
                <Text style={styles.moreText}>+12</Text>
              </View>
            </View>
          </Animated.View>

          {/* Description */}
          <Animated.View
            entering={FadeInDown.duration(400).delay(400)}
            style={styles.section}
          >
            <Text style={[styles.sectionTitle, TYPOGRAPHY.h3]}>
              About Destination
            </Text>
            <Text
              style={[styles.description, TYPOGRAPHY.body]}
              numberOfLines={4}
            >
              {place.description} You will get a complete travel package on the
              beaches. Packages in the form of airline tickets, recommended
              Hotel rooms, Transportation.
            </Text>
            <TouchableOpacity>
              <Text style={styles.readMore}>Read More</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ScrollView>

      {/* Footer Button */}
      <Animated.View
        entering={FadeInDown.duration(400).delay(500)}
        style={styles.footer}
      >
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </Animated.View>
    </AnimatedModal>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
  },
  imageContainer: {
    height: 250,
    width: "100%",
    borderTopLeftRadius: BORDER_RADIUS.lg,
    borderTopRightRadius: BORDER_RADIUS.lg,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeButton: {
    position: "absolute",
    top: SPACING.md,
    right: SPACING.md,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 15,
    padding: 4,
  },
  content: {
    padding: SPACING.lg,
  },
  title: {
    marginBottom: SPACING.xs,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.lg,
  },
  location: {
    color: COLORS.textSecondary,
    marginLeft: SPACING.xs,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SPACING.lg,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  rating: {
    fontWeight: "700",
  },
  reviews: {
    color: COLORS.textSecondary,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  price: {
    color: COLORS.primary,
  },
  priceUnit: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  section: {
    marginBottom: SPACING.lg,
  },
  amenitiesRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: SPACING.md,
  },
  amenityItem: {
    width: 40,
    height: 40,
    borderRadius: BORDER_RADIUS.sm,
    backgroundColor: COLORS.backgroundSecondary,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  amenityImage: {
    width: "100%",
    height: "100%",
  },
  amenityMore: {
    width: 40,
    height: 40,
    borderRadius: BORDER_RADIUS.sm,
    backgroundColor: COLORS.backgroundSecondary,
    justifyContent: "center",
    alignItems: "center",
  },
  moreText: {
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.textSecondary,
  },
  sectionTitle: {
    marginBottom: SPACING.sm,
  },
  description: {
    lineHeight: 22,
    color: COLORS.textSecondary,
  },
  readMore: {
    color: COLORS.accent,
    fontWeight: "600",
    marginTop: 4,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: SPACING.lg,
    backgroundColor: COLORS.background,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  bookButton: {
    backgroundColor: COLORS.info, // Blue button from screenshot
    paddingVertical: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: "center",
  },
  bookButtonText: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 16,
  },
});

export default PlaceDetailModal;
