import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TinderCard from "@/components/day7/TinderCard";
import { Stack } from "expo-router";

const dummuUsers = [
  {
    id: 1,
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/1.jpg",
    name: "Dani",
  },
  {
    id: 2,
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/2.jpg",
    name: "Jon",
  },
  {
    id: 3,
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/3.jpg",
    name: "Dani",
  },
  {
    id: 4,
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/4.jpeg",
    name: "Alice",
  },
  {
    id: 5,
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/5.jpg",
    name: "Dani",
  },
  {
    id: 6,
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/6.jpg",
    name: "Kelsey",
  },
];
const TinderScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen options={{ headerShown: false }} />
      {dummuUsers.map((user, index) => (
        <TinderCard
          user={user}
          key={user.id}
          numOfCards={dummuUsers.length}
          curIndex={index}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default TinderScreen;
