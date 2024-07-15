import TinderCard from "@/components/day7/TinderCard";
import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";

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
  const activeIndex = useSharedValue(0);
  const translationX = useSharedValue(0);

  const gesture = Gesture.Pan()
    .onBegin((event) => console.log("onBegin:"))
    .onStart((event) => console.log("onStart:"))
    .onChange((event) => {
      translationX.value = event.translationX;
    })
    .onEnd((event) => console.log("onEnd:"))
    .onFinalize((event) => console.log("onFinalize:"));
  return (
    <GestureDetector gesture={gesture}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Stack.Screen options={{ headerShown: false }} />

        {dummuUsers.map((user, index) => (
          <TinderCard
            user={user}
            key={user.id}
            numOfCards={dummuUsers.length}
            index={index}
            activeIndex={activeIndex}
            translationX={translationX}
          />
        ))}
      </View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({});

export default TinderScreen;
