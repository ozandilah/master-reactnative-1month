import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Link, Stack } from "expo-router";
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
`;

const DayDetailScreens = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          title: "Day 08: Authentication React Native Using AWS Amplify V6",
        }}
      />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day8/awsamplify" asChild>
        <Button title="Go to AWS Amplify Page" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailScreens;
