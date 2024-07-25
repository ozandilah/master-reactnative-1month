import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# Authentication using AWS Amplify V6
Authentication in React Native using AWS Amplify V6

📚 Today's Agenda :
- Set up Amplify project
- Add Authentication to app
- Build your custom Auth Screens
- Portfolio amplify aws feature
- Day Breakchain
`;

const DayDetailScreens = () => {
  const router = useRouter();
  const handlePress = () => {
    router.push("/day8/protected");
  };
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          title: "Day 08: Authentication React Native Using AWS Amplify V6",
        }}
      />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Button title="Go to AWS Amplify Page" onPress={handlePress} />
    </SafeAreaView>
  );
};

export default DayDetailScreens;
