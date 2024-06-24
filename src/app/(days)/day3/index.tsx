import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const DayDetailScreens = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 03: Markdown" }} />
      <Text>Day Detail Screen</Text>

      <Link href="/day3/editor" asChild>
        <Button title="Go to editor" />
      </Link>
    </View>
  );
};

export default DayDetailScreens;
