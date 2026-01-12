import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import Animated, {
  FadeInLeft,
  FadeInRight,
  FadeInUp,
} from "react-native-reanimated";
import Text from "../../../components/ui/Text";
import { COLORS, SIZES } from "../../../constants/theme";

const ChatBubble = ({
  text,
  isMe,
  delay,
  avatar,
}: {
  text: string;
  isMe?: boolean;
  delay: number;
  avatar?: string;
}) => {
  return (
    <Animated.View
      entering={
        isMe
          ? FadeInRight.delay(delay).springify()
          : FadeInLeft.delay(delay).springify()
      }
      style={[
        styles.bubbleWrapper,
        isMe ? styles.meWrapper : styles.themWrapper,
      ]}
    >
      {!isMe && avatar && (
        <Image source={{ uri: avatar }} style={styles.avatarImage} />
      )}
      <View style={[styles.bubble, isMe ? styles.meBubble : styles.themBubble]}>
        <Text
          style={[styles.bubbleText, isMe ? {} : { color: COLORS.textBlack }]}
          variant="body4"
        >
          {text}
        </Text>
      </View>
    </Animated.View>
  );
};

const ChatDemo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chatArea}>
        <ChatBubble
          text="Hey, anyone got plans today?"
          delay={500}
          isMe={false}
          avatar="https://randomuser.me/api/portraits/men/32.jpg"
        />
        <ChatBubble
          text="We're heading to the beach if anyone wants to join?"
          isMe={true}
          delay={1200}
        />
        <ChatBubble
          text="Nice! What time?"
          isMe={false}
          delay={2000}
          avatar="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <ChatBubble
          text="Leaving in 15. Meet at the fountain?"
          isMe={true}
          delay={2800}
        />
        <ChatBubble
          text="Sweet!! See you there!"
          isMe={false}
          delay={3500}
          avatar="https://randomuser.me/api/portraits/men/86.jpg"
        />
      </View>

      <View style={styles.textContainer}>
        <Animated.View entering={FadeInUp.delay(1000)}>
          <Text variant="largeTitle" style={styles.title}>
            Say hi to your{"\n"}new crew!
          </Text>
          <Text variant="body3" style={styles.description}>
            Chat on the app, make plans and meet up.
          </Text>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatArea: {
    flex: 2,
    justifyContent: "center",
    paddingHorizontal: SIZES.padding,
    paddingTop: 40,
  },
  bubbleWrapper: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "flex-end",
  },
  meWrapper: {
    justifyContent: "flex-end",
  },
  themWrapper: {
    justifyContent: "flex-start",
  },
  avatarImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.secondary,
    marginRight: 8,
  },
  bubble: {
    padding: 12,
    borderRadius: 16,
    maxWidth: "80%",
  },
  meBubble: {
    backgroundColor: "#C51C6C",
    borderBottomRightRadius: 2,
  },
  themBubble: {
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: 2,
  },
  bubbleText: {
    color: COLORS.white,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    justifyContent: "center",
    paddingBottom: 40,
  },
  title: {
    fontWeight: "900",
    marginBottom: 16,
  },
  description: {
    opacity: 0.8,
  },
});

export default ChatDemo;
