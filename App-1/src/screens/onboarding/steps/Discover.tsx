import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  FadeInDown,
  ZoomIn,
  FadeInUp,
  ReduceMotion,
} from "react-native-reanimated";
import Text from "../../../components/ui/Text";
import { COLORS, SIZES } from "../../../constants/theme";

const Discover = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentArea}>
        {/* Main Card */}
        <Animated.View
          entering={ZoomIn.duration(800).delay(200)}
          style={styles.card}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardContent}>
            <Text
              variant="h3"
              color={COLORS.textBlack}
              style={styles.cardTitle}
            >
              The Secret Garden
            </Text>
            <Text variant="body4" color={COLORS.textGray}>
              Quito, Ecuador
            </Text>

            <View style={styles.avatarRow}>
              {[1, 2, 3, 4, 5].map((i) => (
                <View
                  key={i}
                  style={[
                    styles.avatarStack,
                    { marginLeft: i === 0 ? 0 : -10 },
                  ]}
                >
                  <Image
                    source={{
                      uri: `https://randomuser.me/api/portraits/thumb/men/${
                        i + 10
                      }.jpg`,
                    }}
                    style={styles.avatarImg}
                  />
                </View>
              ))}
              <View
                style={[
                  styles.avatarStack,
                  {
                    marginLeft: -10,
                    backgroundColor: "#E0E0E0",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                ]}
              >
                <Text
                  variant="body4"
                  color={COLORS.textBlack}
                  style={{ fontSize: 10 }}
                >
                  +16
                </Text>
              </View>
            </View>
          </View>
        </Animated.View>

        {/* Floating bubbles outside */}
        <Animated.Image
          entering={FadeInDown.delay(600).springify()}
          source={{ uri: "https://randomuser.me/api/portraits/women/65.jpg" }}
          style={[styles.floatingAvatar, { top: -20, left: 20 }]}
        />
        <Animated.Image
          entering={FadeInDown.delay(800).springify()}
          source={{
            uri: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100",
          }}
          style={[styles.floatingAvatar, { bottom: -20, right: 20 }]}
        />
      </View>

      <View style={styles.textContainer}>
        <Animated.View entering={FadeInUp.delay(500)}>
          <Text variant="largeTitle" style={styles.title}>
            See who's{"\n"}staying!
          </Text>
          <Text variant="body3" style={styles.description}>
            View travellers' profiles as soon as you book.
          </Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentArea: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  card: {
    width: "75%",
    height: 350,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
    transform: [{ rotate: "-5deg" }],
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginBottom: 10,
  },
  cardContent: {
    paddingHorizontal: 8,
  },
  cardTitle: {
    marginBottom: 4,
  },
  avatarRow: {
    flexDirection: "row",
    marginTop: 12,
  },
  avatarStack: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: COLORS.white,
    overflow: "hidden",
  },
  avatarImg: {
    width: "100%",
    height: "100%",
  },
  floatingAvatar: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: COLORS.white,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    justifyContent: "center", // Aligns closer to bottom
    paddingBottom: 40,
  },
  title: {
    fontWeight: "900",
    marginBottom: 16,
  },
  description: {
    opacity: 0.9,
  },
});

export default Discover;
