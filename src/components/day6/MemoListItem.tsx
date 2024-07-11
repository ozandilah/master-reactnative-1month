import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Sound } from "expo-av/build/Audio";
import { AVPlaybackStatus, Audio } from "expo-av";

interface MemoListProps {
  uri: string;
}
const MemoListItem = ({ uri }: MemoListProps) => {
  const [sound, setSound] = useState<Sound>();
  const [status, setStatus] = useState<AVPlaybackStatus>();

  async function loadSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      { uri },
      undefined,
      onPlayBackStatusUpdate
    );
    setSound(sound);
  }
  useEffect(() => {
    loadSound();
  }, [uri]);

  async function onPlayBackStatusUpdate(status: AVPlaybackStatus) {
    setStatus(status);
    if (!status.isLoaded) {
      return;
    }
    if (status.didJustFinish) {
      await sound?.setStatusAsync({ positionMillis: 0 });
    }
  }

  async function playSound() {
    if (!sound) {
      return;
    }
    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const isPlaying = status?.isLoaded ? status.isPlaying : false;
  const position = status?.isLoaded ? status.positionMillis : 0;
  const duration = status?.isLoaded ? status.durationMillis : 1;
  const progres = position / duration;
  return (
    <View style={styles.container}>
      <FontAwesome5
        onPress={playSound}
        name={isPlaying ? "pause" : "play"}
        size={20}
        color={"gray"}
      />

      <View style={styles.playbackContainer}>
        <View style={styles.playbackBackground} />
        <View
          style={[styles.playbackIndicator, { left: `${progres * 100}%` }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    gap: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  playbackContainer: {
    flex: 1,
    height: 30,
    justifyContent: "center",
  },
  playbackBackground: {
    height: 3,
    backgroundColor: "gainsboro",
    borderRadius: 5,
  },
  playbackIndicator: {
    width: 10,
    aspectRatio: 1,
    borderRadius: 10,
    backgroundColor: "royalblue",
    position: "absolute",
  },
});
export default MemoListItem;
