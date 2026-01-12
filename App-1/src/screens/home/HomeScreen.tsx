import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../../components/ui/Text";
import { COLORS, SIZES } from "../../constants/theme";
import Button from "../../components/buttons/Button";

const HomeScreen = () => {
  const recommended = [
    {
      id: 1,
      name: "Bali, Indonesia",
      rating: "4.8 ★",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "Kyoto, Japan",
      rating: "4.9 ★",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      name: "Santorini, Greece",
      rating: "4.7 ★",
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text variant="h1" color={COLORS.textBlack}>
            Explore the world
          </Text>
          <Text
            variant="body3"
            color={COLORS.textGray}
            style={{ marginTop: 8 }}
          >
            Where to next?
          </Text>
        </View>

        <View style={styles.searchBar}>
          <Text color={COLORS.textGray}>Search destinations...</Text>
        </View>

        <View style={styles.section}>
          <Text
            variant="h3"
            color={COLORS.textBlack}
            style={{ marginBottom: 16 }}
          >
            Recommended
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {recommended.map((item) => (
              <View key={item.id} style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.cardImage} />
                <View style={styles.textOverlay}>
                  <Text variant="h4" color={COLORS.white}>
                    {item.name}
                  </Text>
                  <Text
                    variant="body4"
                    color={COLORS.white}
                    style={{ opacity: 0.8 }}
                  >
                    {item.rating}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text
            variant="h3"
            color={COLORS.textBlack}
            style={{ marginBottom: 16 }}
          >
            Recent
          </Text>
          <View style={[styles.card, { width: "100%" }]}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              style={styles.cardImage}
            />
            <View style={styles.textOverlay}>
              <Text variant="h3" color={COLORS.white}>
                Swiss Alps
              </Text>
              <Text
                variant="body3"
                color={COLORS.white}
                style={{ opacity: 0.8 }}
              >
                Continue exploring
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollContent: {
    padding: SIZES.padding,
  },
  header: {
    marginTop: 20,
    marginBottom: 30,
  },
  searchBar: {
    height: 50,
    backgroundColor: "#f5f5f5",
    borderRadius: SIZES.radius,
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  section: {
    marginBottom: 30,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  textOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-end",
  },
  card: {
    width: 200,
    height: 250,
    backgroundColor: "#f0f0f0",
    borderRadius: 16,
    marginRight: 16,
  },
});

export default HomeScreen;
