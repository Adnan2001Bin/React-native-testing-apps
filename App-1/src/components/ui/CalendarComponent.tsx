import React from "react";
import { View, StyleSheet } from "react-native";
import { Calendar, DateData } from "react-native-calendars";
import { COLORS } from "../../constants/colors";
import { BORDER_RADIUS, SPACING } from "../../constants/spacing";
import { TYPOGRAPHY } from "../../constants/typography";

interface CalendarComponentProps {
  onDateSelect: (date: string) => void;
  markedDates?: any;
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({
  onDateSelect,
  markedDates,
}) => {
  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={(day: DateData) => {
          onDateSelect(day.dateString);
        }}
        markedDates={{
          ...markedDates,
          // Example of marked dates logic injection
          "2026-01-22": {
            selected: true,
            marked: true,
            selectedColor: COLORS.info,
          },
        }}
        theme={{
          backgroundColor: COLORS.background,
          calendarBackground: COLORS.background,
          textSectionTitleColor: COLORS.textSecondary,
          selectedDayBackgroundColor: COLORS.info,
          selectedDayTextColor: COLORS.white,
          todayTextColor: COLORS.info,
          dayTextColor: COLORS.text,
          textDisabledColor: COLORS.border,
          dotColor: COLORS.info,
          selectedDotColor: COLORS.white,
          arrowColor: COLORS.text,
          disabledArrowColor: COLORS.border,
          monthTextColor: COLORS.text,
          indicatorColor: COLORS.info,
          textDayFontFamily: "System",
          textMonthFontFamily: "System",
          textDayHeaderFontFamily: "System",
          textDayFontWeight: "400",
          textMonthFontWeight: "700",
          textDayHeaderFontWeight: "400",
          textDayFontSize: 16,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 14,
        }}
        enableSwipeMonths={true}
        style={styles.calendar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: BORDER_RADIUS.lg,
    overflow: "hidden",
    backgroundColor: COLORS.background,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    marginHorizontal: SPACING.lg,
    marginVertical: SPACING.md,
  },
  calendar: {
    borderRadius: BORDER_RADIUS.lg,
  },
});

export default CalendarComponent;
