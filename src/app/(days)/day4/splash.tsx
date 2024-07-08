import { View, Text, Button } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import { Stack } from "expo-router";
const SplashScreen = () => {
  const animation = useRef<LottieView>(null);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      {/* Stack screen berfungsi untuk menghilangkan header agar full screen animasi nya */}
      <Stack.Screen options={{ headerShown: false }} />
      <LottieView
        ref={animation}
        // autoPlay
        style={{
          width: "80%",
          maxWidth: 400,
          height: 200,
          //   backgroundColor: "#eee",
        }}
        source={require("@/assets/lottie/netflix.json")}
      />
    </View>
  );
};

export default SplashScreen;
