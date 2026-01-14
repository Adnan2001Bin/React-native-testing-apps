import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { SPACING, BORDER_RADIUS } from "../../constants/spacing";
import { Message } from "../../constants/mockData";

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  return (
    <View
      style={[
        styles.container,
        message.isSent ? styles.sentContainer : styles.receivedContainer,
      ]}
    >
      <Text
        style={[
          styles.text,
          message.isSent ? styles.sentText : styles.receivedText,
        ]}
      >
        {message.text}
      </Text>
      {/* Tiny timestamp could actally go here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: "80%",
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    marginBottom: SPACING.sm,
  },
  sentContainer: {
    alignSelf: "flex-end",
    backgroundColor: COLORS.primary,
    borderBottomRightRadius: 0,
  },
  receivedContainer: {
    alignSelf: "flex-start",
    backgroundColor: COLORS.backgroundSecondary,
    borderTopLeftRadius: 0,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
  },
  sentText: {
    color: COLORS.white,
  },
  receivedText: {
    color: COLORS.text,
  },
});

export default MessageBubble;
