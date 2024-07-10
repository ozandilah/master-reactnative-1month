import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const ApartmentListItem = ({ apartment }: any) => {
  //   const splitText = (text: string | any[], maxLength: number) => {
  //     let lines = [];
  //     for (let i = 0; i < text.length; i += maxLength) {
  //       lines.push(text.slice(i, i + maxLength));
  //     }
  //     return lines;
  //   };
  //   const titleLines = splitText(apartment.title, 18);

  return (
    <View style={styles.card}>
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
    position: "absolute",
    bottom: 70,
    left: 10,
    right: 10,
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
