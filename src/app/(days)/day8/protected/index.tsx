import { View, Text } from "react-native";
import React from "react";

const ProtectedScreen = () => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontFamily: "InterBold", fontSize: 30 }}>Hello There</Text>
      <Text style={{ fontFamily: "InterBold", fontSize: 20, color: "gray" }}>
        You should see this page only if you are Authenticated
      </Text>
    </View>
  );
};

export default ProtectedScreen;
