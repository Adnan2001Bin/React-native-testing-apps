import React from "react";
import { View, Text, StyleSheet, FlatList, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { COLORS } from "../../constants/colors";
import { SPACING } from "../../constants/spacing";
import { TYPOGRAPHY } from "../../constants/typography";
import { CONVERSATIONS, Conversation } from "../../constants/mockData";
import CustomHeader from "../../components/navigation/CustomHeader";
import ConversationCard from "../../components/cards/ConversationCard";
import { RootStackParamList } from "../../navigation/types";

const MessagesScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const renderConversationItem = ({
    item,
    index,
  }: {
    item: Conversation;
    index: number;
  }) => (
    <Animated.View entering={FadeInUp.delay(index * 100).duration(500)}>
      <ConversationCard
        conversation={item}
        onPress={() => navigation.navigate("Chat", { conversationId: item.id })}
      />
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

      <CustomHeader
        title="Messages"
        showNotification
        rightComponent={
          <View style={styles.editButton}>{/* Could be an edit icon */}</View>
        }
      />

      <FlatList
        data={CONVERSATIONS}
        renderItem={renderConversationItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  listContent: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.xl,
  },
  editButton: {
    width: 24,
  },
});

export default MessagesScreen;
