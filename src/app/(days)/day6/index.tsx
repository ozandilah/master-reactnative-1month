import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Link, Stack } from "expo-router";
import React from "react";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# Voice Memos

Work with the microphone and audio playback

📚 Today's Agenda :
- Use Expo AV to record audios
- Create an audio player
- (Attemp) to build an audio Waveform animation
`;

const DayDetailScreens = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 05: AirBNB Maps" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day6/memos" asChild>
        <Button title="Go to memos" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailScreens;
