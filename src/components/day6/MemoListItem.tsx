import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

interface MemoListProps {
  uri: string;
}
const MemoListItem = ({ uri }: MemoListProps) => {
  const progres = 40;
  return (
    <View style={styles.container}>
      <FontAwesome5 name={"play"} size={20} color={"gray"} />

      <View style={styles.playbackContainer}>
        <View style={styles.playbackBackground} />
        <View style={[styles.playbackIndicator, { left: `${progres}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    gap: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  playbackContainer: {
    flex: 1,
    height: 30,
    justifyContent: "center",
  },
  playbackBackground: {
    height: 3,
    backgroundColor: "gainsboro",
    borderRadius: 5,
  },
  playbackIndicator: {
    width: 10,
    aspectRatio: 1,
    borderRadius: 10,
    backgroundColor: "royalblue",
    position: "absolute",
  },
});
export default MemoListItem;
