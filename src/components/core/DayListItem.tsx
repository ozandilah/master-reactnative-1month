import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface DayProps {
  day: number;
}

export default function DayListItem({ day }: DayProps) {
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
    backgroundColor: "#111",
    flex: 1,
    aspectRatio: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#fff",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 75,
    fontFamily: "AmaticBold",
  },
});
