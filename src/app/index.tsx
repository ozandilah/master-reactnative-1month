import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import DayListItem from "../components/core/DayListItem";

// splashscreen disini dia itu menyembunyikan screen berikut nya atau datanya di sembunyikan
SplashScreen.preventAutoHideAsync();
const days = [...Array(25)].map((val, index) => index + 1);
export default function HomeScreen() {
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
    <View style={styles.container}>
      <FlatList
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({ item }) => <DayListItem day={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    gap: 10,
  },
  column: {
    gap: 10,
  },
});
