import { Stack, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DayDetailScreens = () => {
  const router = useRouter();

  const handlePress = () => {
    router.push("/day2/onboarding");
  };

  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 02: On-Boarding" }} />
      <Text>Day Detail Screen</Text>
      <Button title="Go to onboarding" onPress={handlePress} />
    </SafeAreaView>
  );
};

export default DayDetailScreens;
