import { View, Text, ViewStyle, StyleSheet } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";
interface MarkerProps {
  apartment: any;
  onPress: () => void;
  containerStyle?: ViewStyle;
}
const CustomMarker = ({ apartment, onPress, containerStyle }: MarkerProps) => {
  return (
    <Marker
      onPress={onPress}
      coordinate={{
        latitude: apartment.latitude,
        longitude: apartment.longitude,
      }}
    >
      <View style={[styles.card, containerStyle]}>
        <Text style={{ fontFamily: "InterBold" }}>Rp {apartment.price}K</Text>
      </View>
    </Marker>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
  },
});
export default CustomMarker;
