import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Link, Stack } from "expo-router";
import React from "react";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# AirBNB Maps Using React Native

📚 Today's Agenda :
- Use Maps in React Native & Expo
- Render Custom Markers On The Map
- Use Bottom Sheet To Render a List of Items
`;

const AirBNBScreen = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 05: AirBNB Maps" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day5_airbnb/airbnb" asChild>
        <Button title="Go to AirBNB Maps" />
      </Link>
    </SafeAreaView>
  );
};

export default AirBNBScreen;
