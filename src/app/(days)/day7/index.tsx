import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Link, Stack } from "expo-router";
import React from "react";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# Tinder Swipe
Let's Build Tinder Swipe Animationin React Native Using Reanimated

📚 Today's Agenda :
- Implement the tinder card
- Animate the card swipe
- React Native Reanimated
`;

const DayDetailScreens = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 07: Tinder Swipe APP" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day7/tinder" asChild>
        <Button title="Go to Tinder" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailScreens;
