import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const DayDetailScreens = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 02" }} />
      <Text>DayDetailScreens</Text>
    </View>
  );
};

export default DayDetailScreens;
