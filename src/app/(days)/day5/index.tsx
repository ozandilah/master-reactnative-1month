import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Link, Stack, useRouter } from "expo-router";
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

const DayDetailScreens = () => {
  const router = useRouter();
  const handlePress = () => {
    router.push("/day5/airbnb");
  };
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 05: AirBNB Maps" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Button title="Go to AirBNB Maps" onPress={handlePress} />
    </SafeAreaView>
  );
};

export default DayDetailScreens;
