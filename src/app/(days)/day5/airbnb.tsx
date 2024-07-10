import { View, Text, StyleSheet } from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Stack } from "expo-router";
import apartments from "@/assets/data/day5_airbnb/appartments.json";
import CustomMarker from "@/components/day5/CustomMarker";
import ApartmentListItem from "@/components/day5/ApartmentListItem";
import BottomSheet, {
  BottomSheetView,
  BottomSheetFlatList,
} from "@gorhom/bottom-sheet";
import { FlatList } from "react-native-gesture-handler";

export default function AirbnbScreen() {
  const [selectedApartment, setSelectedApartment] = useState(null);
  // ref
  //   const bottomSheetRef = useRef<BottomSheet>(null);
  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const snapPoints = useMemo(() => [80, "25%", "50%", "90%"], []);
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
      {selectedApartment && (
        <View>
          <ApartmentListItem
            apartment={selectedApartment}
            containerStyle={{
              position: "absolute",
              bottom:
                typeof snapPoints[0] === "number" ? snapPoints[0] + 10 : 100,
              left: 10,
              right: 10,
            }}
          />
        </View>
      )}

      <BottomSheet
        //   ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        // enablePanDownToClose
        // onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text style={styles.listTitle}>Over {apartments.length} places</Text>
          <BottomSheetFlatList
            data={apartments}
            contentContainerStyle={{ gap: 10, padding: 10 }}
            renderItem={({ item }) => <ApartmentListItem apartment={item} />}
          />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    flex: 1,
  },
  listTitle: {
    textAlign: "center",
    fontFamily: "InterSemi",
    fontSize: 16,
    marginVertical: 5,
    marginBottom: 20,
  },
});
