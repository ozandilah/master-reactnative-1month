import { View, Text } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";
interface MarkerProps {
  apartment: any;
  onPress: () => void;
}
const CustomMarker = ({ apartment, onPress }: MarkerProps) => {
  return (
    <Marker
      onPress={onPress}
      coordinate={{
        latitude: apartment.latitude,
        longitude: apartment.longitude,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 5,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 20,
        }}
      >
        <Text style={{ fontFamily: "InterBold" }}>Rp {apartment.price}K</Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
