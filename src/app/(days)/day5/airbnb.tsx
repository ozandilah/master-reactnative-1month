import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Stack } from "expo-router";
import apartments from "@/assets/data/day5_airbnb/appartments.json";
import CustomMarker from "@/components/day5/CustomMarker";
import ApartmentListItem from "@/components/day5/ApartmentListItem";

export default function AirbnbScreen() {
  const [selectedApartment, setSelectedApartment] = useState(null);
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -6.2088,
          longitude: 106.8456,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {apartments.map((apartment: any) => (
          <CustomMarker
            apartment={apartment}
            key={apartment.id}
            onPress={() => setSelectedApartment(apartment)}
          />
        ))}
      </MapView>
      {/* Display selected Apartment */}
      {selectedApartment && <ApartmentListItem apartment={selectedApartment} />}
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
