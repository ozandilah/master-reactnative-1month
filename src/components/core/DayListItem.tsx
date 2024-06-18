import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
type Props = {
  day: number;
};

export default function DayListItem({ day }: Props) {
  console.log(day);
  return (
    <Link href={`/day${day}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>
  );
}
const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F9EDE3",
    flex: 1,
    aspectRatio: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9B4521",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#9B4521",
    fontSize: 75,
    fontFamily: "AmaticBold",
  },
});
