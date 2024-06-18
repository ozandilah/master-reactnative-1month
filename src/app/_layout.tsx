import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
  useFonts,
} from "@expo-google-fonts/amatic-sc";
import { Inter_900Black } from "@expo-google-fonts/inter";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [fontLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fontLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded, fontError]);

  //   tujuan nya agar pada saat di render atau dimuat ketika gagal maka akan mengembalikan nilai load tag indikator
  if (!fontLoaded && !fontError) {
    return null;
  }
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen name="index" options={{ title: "Kang Ozan" }} />
    </Stack>
  );
}
