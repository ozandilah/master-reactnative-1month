import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Link, Stack } from "expo-router";
import React from "react";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# Animated Splash Screen

📚 Today's Agenda :
- Use Lottie animations in React Native
- Configure the Splash Screen
- Animate the Splash Screen
`;

const DayDetailScreens = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 04: Splash Screen" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day4/animation" asChild>
        <Button title="Go to animation" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailScreens;
