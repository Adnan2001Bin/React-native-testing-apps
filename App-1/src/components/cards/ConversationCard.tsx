import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Animated, { FadeInRight } from "react-native-reanimated";
import { Conversation } from "../../constants/mockData";
import { COLORS } from "../../constants/colors";
import { SPACING, BORDER_RADIUS } from "../../constants/spacing";
import { TYPOGRAPHY } from "../../constants/typography";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface ConversationCardProps {
  conversation: Conversation;
  onPress: () => void;
}

const ConversationCard: React.FC<ConversationCardProps> = ({
  conversation,
  onPress,
}) => {
  return (
    <AnimatedPressable onPress={onPress} style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: conversation.userAvatar }}
          style={styles.avatar}
        />
        {conversation.online && <View style={styles.onlineBadge} />}
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={[styles.name, TYPOGRAPHY.h3]}>
            {conversation.userName}
          </Text>
          <Text style={styles.time}>{conversation.timestamp}</Text>
        </View>
        <View style={styles.messageRow}>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {conversation.lastMessage}
          </Text>
          {conversation.unread > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>{conversation.unread}</Text>
            </View>
          )}
        </View>
      </View>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border, // Divider
    alignItems: "center",
  },
  avatarContainer: {
    position: "relative",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  onlineBadge: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.success,
    borderWidth: 2,
    borderColor: COLORS.background,
  },
  content: {
    flex: 1,
    marginLeft: SPACING.md,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
  },
  time: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  messageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  lastMessage: {
    flex: 1,
    color: COLORS.textSecondary,
    marginRight: SPACING.sm,
  },
  unreadBadge: {
    backgroundColor: COLORS.primary, // Using primary purple
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    minWidth: 20,
    alignItems: "center",
  },
  unreadText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default ConversationCard;
