import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import Animated, {
  FadeInUp,
  FadeInDown,
  ZoomIn,
} from "react-native-reanimated";
import Text from "../../../components/ui/Text";
import { SIZES } from "../../../constants/theme";

const { width } = Dimensions.get("window");

const MeetTravellers = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* Background connecting lines simulation */}
        <Animated.View
          entering={FadeInDown.delay(300).duration(1000)}
          style={styles.networkLines}
        >
          {/* Simple representation of the network graph with dots */}
          {/* In a real app, this would be an SVG or complex view */}
          <View style={[styles.dot, { top: 50, left: 50 }]} />
          <View style={[styles.dot, { top: 150, left: 120 }]} />
          <View style={[styles.dot, { top: 100, right: 80 }]} />
          <View style={[styles.dot, { bottom: 100, left: 60 }]} />
          <View style={[styles.dot, { bottom: 150, right: 60 }]} />
        </Animated.View>

        <Animated.Image
          source={{
            uri: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2070&auto=format&fit=crop",
          }}
          style={styles.mainImage}
          entering={ZoomIn.duration(1000)}
          resizeMode="cover"
        />

        {/* Floating avatars */}
        <Animated.Image
          source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
          style={[styles.avatar, { top: "20%", left: "15%" }]}
          entering={ZoomIn.delay(500).duration(800)}
        />
        <Animated.Image
          source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
          style={[styles.avatar, { top: "30%", right: "20%" }]}
          entering={ZoomIn.delay(700).duration(800)}
        />
        <Animated.Image
          source={{ uri: "https://randomuser.me/api/portraits/women/68.jpg" }}
          style={[styles.avatar, { bottom: "30%", left: "30%" }]}
          entering={ZoomIn.delay(900).duration(800)}
        />
      </View>

      <View style={styles.textContainer}>
        <Animated.View entering={FadeInUp.delay(500)}>
          <Text variant="largeTitle" style={styles.title}>
            Meet{"\n"}travellers,{"\n"}now!
          </Text>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  networkLines: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.3,
  },
  dot: {
    position: "absolute",
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  mainImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "rgba(255,255,255,0.2)",
  },
  avatar: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#fff",
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    width: "100%",
    justifyContent: "center",
  },
  title: {
    fontWeight: "900",
  },
});

export default MeetTravellers;
