import LottieView from "lottie-react-native";
import React, { useRef } from "react";
import { View } from "react-native";
import Animated, { FadeOut, ZoomOut } from "react-native-reanimated";

const AnimatedLottie = Animated.createAnimatedComponent(LottieView);
const AnimatedSplashScreen = ({
  onAnimationFinish = (isCancelled) => {},
}: {
  onAnimationFinish?: (isCancelled: boolean) => void;
}) => {
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
      <AnimatedLottie
        exiting={ZoomOut}
        ref={animation}
        autoPlay
        onAnimationFinish={onAnimationFinish}
        loop={false}
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

export default AnimatedSplashScreen;
