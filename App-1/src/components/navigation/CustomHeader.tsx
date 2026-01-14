import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { SPACING } from "../../constants/spacing";
import { TYPOGRAPHY } from "../../constants/typography";
import { IMAGES } from "../../constants/images";

interface CustomHeaderProps {
  title?: string;
  showBack?: boolean;
  showProfile?: boolean;
  showNotification?: boolean;
  variant?: "default" | "search" | "chat";
  onBackPress?: () => void;
  rightComponent?: React.ReactNode;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  showBack = false,
  showProfile = false,
  showNotification = false,
  variant = "default",
  onBackPress,
  rightComponent,
}) => {
  const navigation = useNavigation();

  const handleBack = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {showBack ? (
          <TouchableOpacity onPress={handleBack} style={styles.iconButton}>
            <Ionicons name="chevron-back" size={24} color={COLORS.text} />
          </TouchableOpacity>
        ) : showProfile ? (
          <View style={styles.profileContainer}>
            <Image source={{ uri: IMAGES.USER_AVATAR }} style={styles.avatar} />
            <Text style={styles.greeting}>Hi, Leonardo</Text>
          </View>
        ) : null}
      </View>

      <View style={styles.centerContainer}>
        {title && <Text style={[styles.title, TYPOGRAPHY.h3]}>{title}</Text>}
      </View>

      <View style={styles.rightContainer}>
        {rightComponent}
        {showNotification && (
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color={COLORS.text}
            />
            <View style={styles.badge} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    backgroundColor: COLORS.background,
    // Add safe area top padding if needed via SafeAreaView in parent or spacer
  },
  leftContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  centerContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: SPACING.sm,
  },
  iconButton: {
    padding: SPACING.xs,
    borderRadius: SPACING.sm,
    backgroundColor: COLORS.backgroundSecondary,
  },
  title: {
    textAlign: "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.sm,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  greeting: {
    ...TYPOGRAPHY.body,
    fontWeight: "600",
  },
  badge: {
    position: "absolute",
    top: SPACING.xs,
    right: SPACING.xs,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.error,
    borderWidth: 1.5,
    borderColor: COLORS.background,
  },
});

export default CustomHeader;
