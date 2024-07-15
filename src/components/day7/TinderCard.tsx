import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  SharedValue,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

interface TinderInterface {
  user: {
    image: string;
    name: string;
  };
  numOfCards: number;
  index: number;
  activeIndex: SharedValue<number>;
  onResponse: (a: boolean) => void;
}
const screenWidth = Dimensions.get("screen").width;
export const tinderCardWith = screenWidth * 0.8;
const TinderCard = ({
  user,
  numOfCards,
  index,
  activeIndex,
  onResponse,
}: TinderInterface) => {
  const translationX = useSharedValue(0);

  const animatedCard = useAnimatedStyle(() => ({
    opacity: interpolate(
      activeIndex.value,
      [index - 1, index, index + 1],
      [1 - 1 / 5, 1, 1]
    ),
    transform: [
      {
        scale: interpolate(
          activeIndex.value,
          [index - 1, index, index + 1],
          [0.95, 1, 1]
        ),
      },
      {
        translateY: interpolate(
          activeIndex.value,
          [index - 1, index, index + 1],
          [-30, 0, 0]
        ),
      },
      {
        translateX: translationX.value,
      },
      {
        rotateZ: `${interpolate(
          translationX.value,
          // [-tinderCardWith / 2, 0, tinderCardWith / 2],
          [-screenWidth / 2, 0, screenWidth / 2],
          // [-30, 0, 30]
          [-15, 0, 15]
        )}deg`,
      },
    ],
  }));
  const gesture = Gesture.Pan()
    .onChange((event) => {
      translationX.value = event.translationX;
      activeIndex.value = interpolate(
        Math.abs(translationX.value),
        [0, 500],
        [index, index + 0.8]
      );
    })
    .onEnd((event) => {
      if (Math.abs(event.velocityX) > 400) {
        translationX.value = withSpring(Math.sign(event.velocityX) * 500, {
          velocity: event.velocityX,
        });
        activeIndex.value = withSpring(index + 1);
        runOnJS(onResponse)(event.velocityX > 0);
      } else {
        translationX.value = withSpring(0);
      }
    });
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[
          styles.card,
          animatedCard,
          {
            zIndex: numOfCards - index,
            opacity: 1 - index * 0.2,
          },
        ]}
      >
        <Image
          style={[StyleSheet.absoluteFillObject, styles.image]}
          source={{ uri: user.image }}
        />
        <LinearGradient
          // Background Linear Gradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={[StyleSheet.absoluteFillObject, styles.overflay]}
        />
        <View style={styles.footer}>
          <Text style={styles.name}> {user.name}</Text>
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  card: {
    width: tinderCardWith,
    aspectRatio: 1 / 1.67,
    borderRadius: 15,
    justifyContent: "flex-end",
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    borderRadius: 15,
    flex: 1,
  },
  overflay: {
    top: "50%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  footer: {
    padding: 10,
  },
  name: {
    fontSize: 24,
    color: "white",
    fontFamily: "InterBold",
  },
});

export default TinderCard;
