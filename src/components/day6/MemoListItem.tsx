import { View, Text } from "react-native";
import React from "react";

interface MemoListProps {
  uri: string;
}
const MemoListItem = ({ uri }: MemoListProps) => {
  return (
    <View>
      <Text>MemoListItem</Text>
    </View>
  );
};

export default MemoListItem;
