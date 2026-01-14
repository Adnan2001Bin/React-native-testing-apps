import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  FadeInRight,
  FadeInUp,
} from "react-native-reanimated";
import { COLORS } from "../../constants/colors";
import { SPACING, BORDER_RADIUS } from "../../constants/spacing";
import { TYPOGRAPHY } from "../../constants/typography";
import { PLACES, Place } from "../../constants/mockData";
import PlaceCard from "../../components/cards/PlaceCard";
import PlaceDetailModal from "../../components/modals/PlaceDetailModal";

const FILTERS = ["All", "Hostels", "Hotels", "Apartments", "Tours", "Villas"];

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  const renderFilterItem = ({ item }: { item: string }) => {
    const isActive = activeFilter === item;
    return (
      <TouchableOpacity
        onPress={() => setActiveFilter(item)}
        style={[styles.filterChip, isActive && styles.filterChipActive]}
      >
        <Text style={[styles.filterText, isActive && styles.filterTextActive]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderResultItem = ({
    item,
    index,
  }: {
    item: Place;
    index: number;
  }) => (
    <Animated.View
      entering={FadeInUp.delay(index * 50).springify()}
      style={{ marginBottom: SPACING.md }}
    >
      <PlaceCard
        place={item}
        variant="horizontal"
        onPress={() => setSelectedPlace(item)}
      />
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

      {/* Search Header */}
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={20}
            color={COLORS.textSecondary}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Search..."
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor={COLORS.textLight}
          />
          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => setSearchText("")}>
              <Ionicons
                name="close-circle"
                size={20}
                color={COLORS.textLight}
              />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options-outline" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      {/* Filter Chips */}
      <View style={styles.filterContainer}>
        <FlatList
          data={FILTERS}
          renderItem={renderFilterItem}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: SPACING.lg }}
        />
      </View>

      {/* Results or Recent */}
      <View style={styles.content}>
        <View style={styles.sectionHeader}>
          <Text style={TYPOGRAPHY.h3}>
            {searchText ? "Search Results" : "Recent Searches"}
          </Text>
          {!searchText && <Text style={styles.clearAll}>Clear all</Text>}
        </View>

        <FlatList
          data={PLACES} // Mock filtering
          renderItem={renderResultItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>

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
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    gap: SPACING.sm,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: BORDER_RADIUS.lg,
    paddingHorizontal: SPACING.md,
    height: 50,
  },
  searchIcon: {
    marginRight: SPACING.sm,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: COLORS.text,
  },
  filterButton: {
    width: 50,
    height: 50,
    borderRadius: BORDER_RADIUS.lg,
    backgroundColor: COLORS.primary, // Using primary purple as per design
    justifyContent: "center",
    alignItems: "center",
  },
  filterContainer: {
    marginBottom: SPACING.md,
  },
  filterChip: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
    borderRadius: BORDER_RADIUS.full,
    backgroundColor: COLORS.backgroundSecondary,
    marginRight: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  filterChipActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  filterText: {
    color: COLORS.textSecondary,
    fontWeight: "500",
  },
  filterTextActive: {
    color: COLORS.white,
  },
  content: {
    flex: 1,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.sm,
  },
  clearAll: {
    color: COLORS.error,
  },
  listContent: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.xl,
  },
});

export default SearchScreen;
