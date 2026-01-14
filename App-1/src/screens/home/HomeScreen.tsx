import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeInUp, SlideInUp } from "react-native-reanimated";
import { COLORS } from "../../constants/colors";
import { SPACING } from "../../constants/spacing";
import { TYPOGRAPHY } from "../../constants/typography";
import { PLACES, Place } from "../../constants/mockData";
import CustomHeader from "../../components/navigation/CustomHeader";
import PlaceCard from "../../components/cards/PlaceCard";
import PlaceDetailModal from "../../components/modals/PlaceDetailModal";

const HomeScreen = () => {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  const renderRecommendedItem = ({
    item,
    index,
  }: {
    item: Place;
    index: number;
  }) => (
    <Animated.View entering={FadeInUp.delay(index * 100).duration(500)}>
      <PlaceCard place={item} onPress={() => setSelectedPlace(item)} />
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

      <CustomHeader showProfile showNotification />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Hero Section */}
        <Animated.View
          entering={SlideInUp.duration(600)}
          style={styles.heroSection}
        >
          <Text style={[styles.heroTitle, TYPOGRAPHY.h1]}>Explore the</Text>
          <View style={styles.heroRow}>
            <Text style={[styles.heroTitle, TYPOGRAPHY.h1]}>Beautiful </Text>
            <Text style={[styles.heroTitleAccent, TYPOGRAPHY.h1]}>world!</Text>
            <View style={styles.underline} />
          </View>
        </Animated.View>

        {/* Recommended Places */}
        <View style={styles.sectionHeader}>
          <Text style={TYPOGRAPHY.h3}>Best Destination</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={PLACES}
          renderItem={renderRecommendedItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
          snapToInterval={250 + SPACING.md}
          decelerationRate="fast"
        />

        {/* Popular Destinations */}
        <View style={styles.sectionHeader}>
          <Text style={TYPOGRAPHY.h3}>Popular Destinations</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={PLACES}
          renderItem={renderRecommendedItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
          snapToInterval={250 + SPACING.md}
          decelerationRate="fast"
        />

        {/* Removed Grid Container */
        /* <View style={styles.gridContainer}>
             ...
           </View> */}
      </ScrollView>

      {/* Place Detail Modal */}
      <PlaceDetailModal
        visible={!!selectedPlace}
        place={selectedPlace}
        onClose={() => setSelectedPlace(null)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingBottom: SPACING.xl,
  },
  heroSection: {
    paddingHorizontal: SPACING.lg,
    marginVertical: SPACING.md,
  },
  heroTitle: {
    color: "#1F2937",
    lineHeight: 40,
  },
  heroRow: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  heroTitleAccent: {
    color: COLORS.accent,
    lineHeight: 40,
  },
  underline: {
    position: "absolute",
    bottom: 2,
    right: 0,
    width: 80,
    height: 4,
    backgroundColor: COLORS.accent,
    borderRadius: 2,
    transform: [{ rotate: "-2deg" }],
    zIndex: -1,
    opacity: 0.6,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.md,
    marginTop: SPACING.sm,
  },
  viewAll: {
    color: COLORS.primary,
    fontWeight: "600",
  },
  horizontalList: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.md,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: SPACING.lg,
    justifyContent: "space-between",
  },
  gridItem: {
    width: "100%",
    marginBottom: SPACING.md,
  },
});

export default HomeScreen;
