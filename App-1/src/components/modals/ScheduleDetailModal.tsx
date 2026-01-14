import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import AnimatedModal from "./AnimatedModal";
import { TYPOGRAPHY } from "../../constants/typography";
import { COLORS } from "../../constants/colors";
import { SPACING, BORDER_RADIUS } from "../../constants/spacing";
import { Ionicons } from "@expo/vector-icons";

interface ScheduleDetailModalProps {
  visible: boolean;
  onClose: () => void;
  schedule: any; // Ideally types would be shared
}

const ScheduleDetailModal: React.FC<ScheduleDetailModalProps> = ({
  visible,
  onClose,
  schedule,
}) => {
  if (!schedule) return null;

  return (
    <AnimatedModal visible={visible} onClose={onClose}>
      <View style={styles.container}>
        <Text style={[styles.title, TYPOGRAPHY.h2]}>Booking Details</Text>

        <View style={styles.card}>
          <Image source={{ uri: schedule.image }} style={styles.image} />
          <View style={styles.cardContent}>
            <Text style={TYPOGRAPHY.h3}>{schedule.placeName}</Text>
            <Text style={[TYPOGRAPHY.caption, { marginTop: 4 }]}>
              {schedule.location}
            </Text>
          </View>
        </View>

        {/* Timeline */}
        <View style={styles.timeline}>
          <View style={styles.timelineItem}>
            <View style={styles.dot} />
            <View style={styles.timelineContent}>
              <Text style={TYPOGRAPHY.bodyLarge}>Check In</Text>
              <Text style={TYPOGRAPHY.body}>{schedule.date}, 10:00 AM</Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.timelineItem}>
            <View style={styles.dot} />
            <View style={styles.timelineContent}>
              <Text style={TYPOGRAPHY.bodyLarge}>Check Out</Text>
              <Text style={TYPOGRAPHY.body}>30 January 2026, 12:00 PM</Text>
            </View>
          </View>
        </View>

        {/* Confirm Button */}
        <TouchableOpacity style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>Trip Details</Text>
        </TouchableOpacity>
      </View>
    </AnimatedModal>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPACING.lg,
  },
  title: {
    textAlign: "center",
    marginBottom: SPACING.lg,
  },
  card: {
    flexDirection: "row",
    padding: SPACING.md,
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: BORDER_RADIUS.md,
    marginBottom: SPACING.xl,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: BORDER_RADIUS.sm,
  },
  cardContent: {
    marginLeft: SPACING.md,
    justifyContent: "center",
  },
  timeline: {
    marginLeft: SPACING.md,
    marginBottom: SPACING.xl,
  },
  timelineItem: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.info,
    marginTop: 6,
  },
  line: {
    width: 2,
    height: 30,
    backgroundColor: COLORS.border,
    marginLeft: 5,
    marginVertical: 4,
  },
  timelineContent: {
    marginLeft: SPACING.lg,
  },
  button: {
    backgroundColor: COLORS.info,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ScheduleDetailModal;
