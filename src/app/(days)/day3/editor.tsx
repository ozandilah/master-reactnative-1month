import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Markdown from "react-native-markdown-display";
const copy = `# h1 Heading 8-)

**This is some bold text!**

This is normal text

### h3 Subheading

* Item 1
* Item 2
* Item 3

#### h4 Sub-subheading

This is a paragraph of text. It can be as long as you want it to be. It can also contain **bold** or *italic* text.

##### h5 Sub-sub-subheading

This is another paragraph of text. It can also contain **bold** or *italic* text.

###### h6 Sub-sub-sub-subheading

This is the last paragraph of text. It can also contain **bold** or *italic* text.

\`\`\`javascript
const helloWorld = () => {
  console.log("Hello World");
}
\`\`\``;

const EditorScreen = () => {
  return (
    <View style={styles.page}>
      <Markdown>{copy}</Markdown>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
  },
});

export default EditorScreen;
