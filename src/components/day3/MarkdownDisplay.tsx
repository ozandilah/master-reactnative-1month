import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { PropsWithChildren } from "react";
import Markdown from "react-native-markdown-display";

const MarkdownDisplay = ({ children }: PropsWithChildren) => {
  return (
    <ScrollView style={styles.page} contentInsetAdjustmentBehavior="automatic">
      <Markdown style={markdownStyles}>{children}</Markdown>
    </ScrollView>
  );
};

const markdownStyles = StyleSheet.create({
  heading1: {
    fontFamily: "InterBlack",
    color: "#212020",
    marginTop: 15,
    marginBottom: 10,

    lineHeight: 40,
  },
  heading2: {
    fontFamily: "InterBold",
    color: "#404040",

    lineHeight: 30,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
});
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    padding: 10,
  },
});

export default MarkdownDisplay;
