import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const ApartmentListItem = ({ apartment }: any) => {
  const splitText = (text: string | any[], maxLength: number) => {
    let lines = [];
    for (let i = 0; i < text.length; i += maxLength) {
      lines.push(text.slice(i, i + maxLength));
    }
    return lines;
  };
  const titleLines = splitText(apartment.title, 18);

  return (
    <View style={styles.card}>
      <Image source={{ uri: apartment.image }} style={styles.image} />
      <View style={styles.rightContainer}>
        {titleLines.map((line, index) => (
          <Text style={styles.title} key={index}>
            {line}
          </Text>
        ))}
        <View style={styles.footer}>
          <Text style={styles.title}>IDR {apartment.price} </Text>
          <Text style={styles.stars}>
            IDR {apartment.rating} ({apartment.numberOfStars})
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
    bottom: 50,
    left: 10,
    right: 10,

    flexDirection: "row",
  },
  image: {
    width: 150,
    aspectRatio: 1,
  },
  title: {
    fontFamily: "InterBold",
    marginBottom: 10,
  },
  price: {},
  rightContainer: {
    padding: 10,
  },
});

export default ApartmentListItem;
