import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
type Props = {
  day: number;
};

export default function DayListItem({ day }: Props) {
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
