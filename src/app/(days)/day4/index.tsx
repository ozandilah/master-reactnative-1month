import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Link, Stack, useRouter } from "expo-router";
import React from "react";
import { Button, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# Animated Splash Screen

📚 Today's Agenda :
- Use Lottie animations in React Native
- Configure the Splash Screen
- Animate the Splash Screen
`;

const DayDetailScreens = () => {
  const router = useRouter();
  const handlePressAnimation = () => {
    router.push("/day4/animation");
  };
  const handlePressSplash = () => {
    router.push("/day4/splash");
  };
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 04: Splash Screen" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Button title="Go to animation" onPress={handlePressAnimation} />

      <Button title="Splashscreen Animation" onPress={handlePressSplash} />
    </SafeAreaView>
  );
};

export default DayDetailScreens;
