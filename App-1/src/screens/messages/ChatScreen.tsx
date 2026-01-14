import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { SPACING, BORDER_RADIUS } from "../../constants/spacing";
import { MESSAGES, Message } from "../../constants/mockData";
import CustomHeader from "../../components/navigation/CustomHeader";
import MessageBubble from "../../components/cards/MessageBubble";
import { useNavigation } from "@react-navigation/native";

const ChatScreen = () => {
  const [messages, setMessages] = useState<Message[]>(MESSAGES);
  const [inputText, setInputText] = useState("");
  const navigation = useNavigation();

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: inputText,
        senderId: "me",
        timestamp: new Date(),
        isSent: true,
      };
      setMessages((prev) => [...prev, newMessage]);
      setInputText("");
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <CustomHeader
        title="Jane Smith"
        showBack
        variant="chat"
        rightComponent={
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Ionicons name="call-outline" size={24} color={COLORS.text} />
            <Ionicons name="videocam-outline" size={24} color={COLORS.text} />
          </View>
        }
      />

      <FlatList
        data={messages}
        renderItem={({ item }) => <MessageBubble message={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
        style={styles.inputContainerWrapper}
      >
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.attachButton}>
            <Ionicons name="add" size={24} color={COLORS.textSecondary} />
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            placeholder="Type something..."
            value={inputText}
            onChangeText={setInputText}
            placeholderTextColor={COLORS.textLight}
          />

          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Ionicons name="send" size={20} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  listContent: {
    padding: SPACING.lg,
  },
  inputContainerWrapper: {
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    backgroundColor: COLORS.background,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
  },
  attachButton: {
    padding: SPACING.sm,
  },
  input: {
    flex: 1,
    marginHorizontal: SPACING.sm,
    fontSize: 16,
    color: COLORS.text,
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: COLORS.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChatScreen;
