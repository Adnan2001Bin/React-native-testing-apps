import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Switch,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInUp } from "react-native-reanimated";
import { COLORS } from "../../constants/colors";
import { SPACING, BORDER_RADIUS } from "../../constants/spacing";
import { TYPOGRAPHY } from "../../constants/typography";
import { IMAGES } from "../../constants/images";
import CustomHeader from "../../components/navigation/CustomHeader";

const MENU_ITEMS = [
  { icon: "person-outline", label: "Personal Information" },
  { icon: "calendar-outline", label: "My Bookings" },
  { icon: "card-outline", label: "Payment Methods" },
  { icon: "notifications-outline", label: "Notifications" },
  { icon: "shield-checkmark-outline", label: "Privacy & Security" },
  { icon: "help-circle-outline", label: "Help & Support" },
];

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

      <CustomHeader
        title="Profile"
        rightComponent={
          <TouchableOpacity>
            <Ionicons name="settings-outline" size={24} color={COLORS.text} />
          </TouchableOpacity>
        }
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: IMAGES.USER_AVATAR }} style={styles.avatar} />
            <TouchableOpacity style={styles.editAvatarButton}>
              <Ionicons name="camera" size={16} color={COLORS.white} />
            </TouchableOpacity>
          </View>
          <Text style={[styles.name, TYPOGRAPHY.h2]}>Leonardo</Text>
          <Text style={[styles.location, TYPOGRAPHY.body]}>New York, USA</Text>
          <Text style={[styles.memberSince, TYPOGRAPHY.caption]}>
            Member since 2019
          </Text>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={[styles.statValue, TYPOGRAPHY.h3]}>24</Text>
            <Text style={[styles.statLabel, TYPOGRAPHY.caption]}>Trips</Text>
          </View>
          <View style={styles.verticalDivider} />
          <View style={styles.statItem}>
            <Text style={[styles.statValue, TYPOGRAPHY.h3]}>158</Text>
            <Text style={[styles.statLabel, TYPOGRAPHY.caption]}>Reviews</Text>
          </View>
          <View style={styles.verticalDivider} />
          <View style={styles.statItem}>
            <Text style={[styles.statValue, TYPOGRAPHY.h3]}>639</Text>
            <Text style={[styles.statLabel, TYPOGRAPHY.caption]}>Friends</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {MENU_ITEMS.map((item, index) => (
            <Animated.View key={index} entering={FadeInUp.delay(index * 50)}>
              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuIconContainer}>
                  <Ionicons
                    name={item.icon as any}
                    size={22}
                    color={COLORS.text}
                  />
                </View>
                <Text style={[styles.menuLabel, TYPOGRAPHY.bodyLarge]}>
                  {item.label}
                </Text>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={COLORS.textLight}
                />
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={24} color={COLORS.error} />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
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
  profileHeader: {
    alignItems: "center",
    marginBottom: SPACING.lg,
  },
  avatarContainer: {
    position: "relative",
    marginBottom: SPACING.md,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editAvatarButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: COLORS.primary,
    padding: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.background,
  },
  name: {
    marginBottom: 4,
  },
  location: {
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  memberSince: {
    color: COLORS.textLight,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around", // Distributed evenly
    alignItems: "center",
    paddingVertical: SPACING.lg,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.backgroundSecondary, // Subtle border
    backgroundColor: COLORS.background,
    marginHorizontal: SPACING.lg,
    marginBottom: SPACING.lg,
  },
  statItem: {
    alignItems: "center",
    width: "30%",
  },
  statValue: {
    color: COLORS.primary,
    fontWeight: "700",
  },
  statLabel: {
    color: COLORS.textSecondary,
  },
  verticalDivider: {
    width: 1,
    height: 30,
    backgroundColor: COLORS.border,
  },
  menuContainer: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.lg,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.backgroundSecondary,
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: COLORS.backgroundSecondary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: SPACING.md,
  },
  menuLabel: {
    flex: 1,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: SPACING.md,
    marginBottom: SPACING.xl,
    gap: SPACING.sm,
  },
  logoutText: {
    color: COLORS.error,
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ProfileScreen;
