import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { Stack } from "expo-router";
export default function AirbnbScreen() {
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="1bd Apartment"
          description="Hello There"
        />
        <Marker
          coordinate={{ latitude: 37.78625, longitude: -122.4124 }}
          title="2bd Apartment"
          description="Hello There"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
