import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

interface TinderInterface {
  user: {
    image: string;
    name: string;
  };
  numOfCards: number;
  curIndex: number;
}

export const tinderCardWith = Dimensions.get("screen").width * 0.8;
const TinderCard = ({ user, numOfCards, curIndex }: TinderInterface) => {
  return (
    <View
      style={[
        styles.card,
        {
          zIndex: numOfCards - curIndex,
          opacity: 1 - curIndex * 0.2,
          transform: [
            { translateY: -curIndex * 30 },
            { scale: 1 - curIndex * 0.05 },
          ],
        },
      ]}
    >
      <Image
        style={[StyleSheet.absoluteFillObject, styles.image]}
        source={{ uri: user.image }}
      />
      <LinearGradient
        // Background Linear Gradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={[StyleSheet.absoluteFillObject, styles.overflay]}
      />
      <View style={styles.footer}>
        <Text style={styles.name}> {user.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: tinderCardWith,
    aspectRatio: 1 / 1.67,
    borderRadius: 15,
    justifyContent: "flex-end",
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    borderRadius: 15,
    flex: 1,
  },
  overflay: {
    top: "50%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  footer: {
    padding: 10,
  },
  name: {
    fontSize: 24,
    color: "white",
    fontFamily: "InterBold",
  },
});

export default TinderCard;
