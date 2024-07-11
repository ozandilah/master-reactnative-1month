import apartments from "@/assets/data/day5_airbnb/appartments.json";
import ApartmentListItem from "@/components/day5/ApartmentListItem";
import CustomMarker from "@/components/day5/CustomMarker";
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Stack } from "expo-router";
import React, { useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function AirbnbScreen() {
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: -6.2088,
    longitude: 106.8456,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  //   const gestureHandler = () => ({
  //     handleOnStart: () => {
  //       console.log("Begin Pan");
  //     },
  //     handleOnActive: () => {},
  //     handleOnEnv: () => {},
  //   });
  const snapPoints = useMemo(() => [80, "25%", "50%", "90%"], []);
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        // initialRegion={}
        region={mapRegion}
      >
        {apartments.map((apartment: any) => (
          <CustomMarker
            apartment={apartment}
            key={apartment.id}
            onPress={() => setSelectedApartment(apartment)}
            containerStyle={{
              borderColor:
                selectedApartment && selectedApartment.id === apartment.id
                  ? "white"
                  : "gray",

              backgroundColor:
                selectedApartment && selectedApartment.id === apartment.id
                  ? "#ff0050"
                  : "white",
            }}
            titleStyle={{
              color:
                selectedApartment && selectedApartment.id === apartment.id
                  ? "white"
                  : undefined,
            }}
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
        index={0}
        snapPoints={snapPoints}
        // onChange={(index) => console.log("on change Active : ", index)}
        // onAnimate={(from, to) => console.log("From : ", from + "To : ", to)}
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
