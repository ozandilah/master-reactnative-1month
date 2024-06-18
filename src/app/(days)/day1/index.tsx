import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const DayDetailScreens = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 01" }} />
      <Text style={{ fontFamily: "AmaticBold", fontSize: 100 }}>
        DayDetailScreens
      </Text>
    </View>
  );
};

export default DayDetailScreens;
