import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Link, Stack, useRouter } from "expo-router";
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
  const router = useRouter();
  const handlePress = () => {
    router.push("/day6/memos");
  };
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen
        options={{ title: "Day 06: Microphone and Audio Playback Memos" }}
      />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Button title="Go to memos" onPress={handlePress} />
    </SafeAreaView>
  );
};

export default DayDetailScreens;
