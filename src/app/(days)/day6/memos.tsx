import MemoListItem from "@/components/day6/MemoListItem";
import { Audio } from "expo-av";
import { Recording } from "expo-av/build/Audio";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

export default function MemosScreen() {
  const [recording, setRecording] = useState<Recording>();
  const [memos, setMemos] = useState<string[]>([]);

  const metering = useSharedValue(-100);

  const [permissionResponse, requestPermission] = Audio.usePermissions();

  async function startRecording() {
    try {
      if (permissionResponse.status !== "granted") {
        console.log("Requesting permission..");
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log("Recording started");

      recording.setOnRecordingStatusUpdate((status) => {
        console.log(status.metering);
        metering.value = status.metering || -100;
      });
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    if (!recording) {
      return;
    }
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI();
    console.log("Recording stopped and stored at", uri);

    if (uri) {
      setMemos((existingMemos) => [uri, ...existingMemos]);
    }
  }

  const animatedRedCircle = useAnimatedStyle(() => ({
    width: withTiming(recording ? "60%" : "100%"),
    borderRadius: withTiming(recording ? 5 : 35),
  }));

  const animatedRecordWave = useAnimatedStyle(() => {
    const size = withSpring(
      interpolate(metering.value, [-160, -60, 0], [0, 0, -100])
    );
    return { top: size, bottom: size, left: size, right: size };
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        renderItem={({ item }) => <MemoListItem uri={item} />}
      />

      <View style={styles.footer}>
        <View>
          <Animated.View style={[styles.recordWave, animatedRecordWave]} />
          <Pressable
            style={styles.recordButton}
            onPress={recording ? stopRecording : startRecording}
          >
            <Animated.View style={[styles.redCircle, animatedRedCircle]} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  footer: {
    backgroundColor: "white",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },

  recordButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: "#ecf0f1",
    padding: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  recordWave: {
    backgroundColor: "#ff000055",
    position: "absolute",
    top: -20,
    bottom: -20,
    right: -20,
    left: -20,
    borderRadius: 1000,
  },
  redCircle: {
    backgroundColor: "#ff0050",
    aspectRatio: 1,
    borderRadius: 35,
  },
});
