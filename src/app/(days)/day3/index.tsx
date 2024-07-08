import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Link, Stack } from "expo-router";
import React from "react";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# Markdown

Integrate Markdown content in ***React Native**

📚 Today's Agenda :
- Introduction to Makdown
- Markdown Syntax Overview
- Setting Up React Native for Markdown
- Implementing Markdown Rendering
- Styling Markdown Content
- Using Markdown in React Native Components
- Recap and Q&A Session
`;

const DayDetailScreens = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 03: Markdown" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day3/editor" asChild>
        <Button title="Go to editor" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailScreens;
