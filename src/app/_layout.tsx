import { GestureHandlerRootView } from "react-native-gesture-handler";

import AnimatedSplashScreen from "@/components/day4/AnimatedSplashScreen";
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
  useFonts,
} from "@expo-google-fonts/amatic-sc";
import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import Animated, { FadeIn } from "react-native-reanimated";

// SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [appReady, setAppReady] = useState(false);
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);
  const [fontLoaded, fontError] = useFonts({
    Inter: Inter_400Regular,
    InterSemi: Inter_600SemiBold,
    InterBlack: Inter_900Black,
    InterBold: Inter_700Bold,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fontLoaded || fontError) {
      //   SplashScreen.hideAsync();
      setAppReady(true);
    }
  }, [fontLoaded, fontError]);

  const showAnimatedSplash = !appReady || !splashAnimationFinished;
  if (showAnimatedSplash) {
    return (
      <AnimatedSplashScreen
        onAnimationFinish={(isCancelled) => {
          if (!isCancelled) {
            setSplashAnimationFinished(true);
          }
        }}
      />
    );
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Animated.View style={{ flex: 1 }} entering={FadeIn}>
        <Stack screenOptions={{}}>
          <Stack.Screen name="index" options={{ title: "Kang Ozan" }} />
        </Stack>
      </Animated.View>
    </GestureHandlerRootView>
  );
}
