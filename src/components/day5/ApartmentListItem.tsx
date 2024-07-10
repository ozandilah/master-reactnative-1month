import { View, Text, StyleSheet, Image, ViewStyle } from "react-native";
import React from "react";
import apartments from "@/assets/data/day5_airbnb/appartments.json";

interface ApartmentListProps {
  apartment: (typeof apartments)[0];
  containerStyle?: ViewStyle;
}

const ApartmentListItem = ({
  apartment,
  containerStyle,
}: ApartmentListProps) => {
  //   const splitText = (text: string | any[], maxLength: number) => {
  //     let lines = [];
  //     for (let i = 0; i < text.length; i += maxLength) {
  //       lines.push(text.slice(i, i + maxLength));
  //     }
  //     return lines;
  //   };
  //   const titleLines = splitText(apartment.title, 18);

  return (
    <View style={[styles.card, containerStyle]}>
      <Image source={{ uri: apartment.image }} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{apartment.title}</Text>

        <Text style={styles.description}>
          Stay at this apartment for an affordable price
        </Text>
        <View style={styles.footer}>
          <Text style={styles.title}>IDR {apartment.price}/night </Text>
          <Text style={styles.stars}>
            ★ {apartment.rating} ({apartment.numberOfStars})
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    width: 150,
    aspectRatio: 1,
  },
  rightContainer: {
    padding: 10,
    flex: 1,
  },
  title: {
    fontFamily: "InterBold",
    marginBottom: 10,
    fontSize: 16,
  },
  description: {
    color: "gray",
  },
  price: {
    fontFamily: "InterBold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
  },
  stars: {},
});

export default ApartmentListItem;
