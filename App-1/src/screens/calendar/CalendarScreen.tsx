import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeInUp } from "react-native-reanimated";
import { COLORS } from "../../constants/colors";
import { SPACING } from "../../constants/spacing";
import { TYPOGRAPHY } from "../../constants/typography";
import { PLACES } from "../../constants/mockData";
import CustomHeader from "../../components/navigation/CustomHeader";
import CalendarComponent from "../../components/ui/CalendarComponent";
import ScheduleCard from "../../components/cards/ScheduleCard";

// Mock schedule data for UI
const SCHEDULES = [
  {
    id: "1",
    placeName: "Niladri Reservoir",
    location: "Tekergrat, Sunamgnj",
    date: "26 January 2026",
    image: PLACES[0].image,
  },
  {
    id: "2",
    placeName: "High Rech Park",
    location: "Zeero Point, Sylhet",
    date: "26 January 2026",
    image: PLACES[1].image,
  },
  {
    id: "3",
    placeName: "Darma Reservoir",
    location: "Darma, Kuningan",
    date: "26 January 2026",
    image: PLACES[2].image,
  },
];

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const renderScheduleItem = ({
    item,
    index,
  }: {
    item: any;
    index: number;
  }) => (
    <Animated.View entering={FadeInUp.delay(index * 100).duration(500)}>
      <ScheduleCard schedule={item} onPress={() => {}} />
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

      <CustomHeader title="Schedule" showNotification />

      <FlatList
        data={SCHEDULES}
        renderItem={renderScheduleItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <CalendarComponent onDateSelect={setSelectedDate} />
            <View style={styles.sectionHeader}>
              <Text style={TYPOGRAPHY.h3}>My Schedule</Text>
              <Text style={styles.viewAll}>View all</Text>
            </View>
          </>
        }
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
    paddingBottom: SPACING.xl,
    paddingHorizontal: SPACING.lg, // Added padding for list consistency
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 0, // already padded by FlatList contentContainer
    marginBottom: SPACING.md,
    marginTop: SPACING.sm,
  },
  viewAll: {
    color: COLORS.info,
    fontWeight: "600",
  },
});

export default CalendarScreen;
