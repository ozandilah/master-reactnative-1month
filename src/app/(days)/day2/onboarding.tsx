import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInRight,
  SlideOutLeft,
} from "react-native-reanimated";
const onBoardingSteps = [
  {
    icon: "hand-holding-heart",
    title: "Donate for Palestine",
    description:
      "Help our brothers and sisters in Palestine by donating through this app. Every contribution you make is highly meaningful.",
  },
  {
    icon: "chart-line",
    title: "Track Donations",
    description:
      "Monitor the progress of your donations and see how your contributions are making a positive impact on the Palestinian community.",
  },
  {
    icon: "hands-helping",
    title: "Join the Community",
    description:
      "Join a caring community and collaborate to support Palestine through various activities and campaigns.",
  },
];
export default function OnBoardingScreen() {
  const [screenIndex, setScreenIndex] = useState(0);
  const data = onBoardingSteps[screenIndex];

  const onContinue = () => {
    //   kita buat login button screen onboarding jika sudah terakhir maka tidak akan error
    const isLastScreen = screenIndex === onBoardingSteps.length - 1;

    if (isLastScreen) {
      endOnBoarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };
  const onBack = () => {
    //   kita buat login button screen onboarding jika sudah terakhir maka tidak akan error
    const firstScreen = screenIndex === 0;

    if (firstScreen) {
      endOnBoarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const endOnBoarding = () => {
    setScreenIndex(0);
    router.back();
  };
  const swipeForward = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd(onContinue);
  const swipeBack = Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack);

  const swipes = Gesture.Simultaneous(swipeBack, swipeForward);

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
      <GestureDetector gesture={swipes}>
        <View style={styles.pageContent} key={screenIndex}>
          <View style={styles.stepIndicatorContainer}>
            {onBoardingSteps.map((step, index) => (
              <View
                style={[
                  styles.stepIndicator,
                  {
                    backgroundColor: index === screenIndex ? "#CEF202" : "gray",
                  },
                ]}
                key={index}
              />
            ))}
          </View>
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <FontAwesome5
              style={styles.image}
              name={data.icon}
              size={150}
              color="#CEF202"
            />
          </Animated.View>
          <View style={styles.footer}>
            <Animated.Text
              entering={SlideInRight}
              exiting={SlideOutLeft}
              style={styles.title}
            >
              {data.title}
            </Animated.Text>
            <Animated.Text
              entering={SlideInRight.delay(50)}
              exiting={SlideOutLeft}
              style={styles.description}
            >
              {data.description}
            </Animated.Text>
            <View style={styles.buttonsRow}>
              <Text onPress={endOnBoarding} style={styles.buttonText}>
                Skip
              </Text>

              <Pressable onPress={onContinue} style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#15141A",
  },
  pageContent: { padding: 20, flex: 1 },
  image: {
    alignSelf: "center",
    margin: 20,
    marginTop: 70,
  },
  title: {
    color: "#FDFDFD",
    fontSize: 50,
    fontFamily: "InterBlack",
    letterSpacing: 1.3,
    marginVertical: 10,
  },
  description: {
    color: "gray",
    fontSize: 20,
    fontFamily: "Inter",
    lineHeight: 28,
  },
  footer: {
    marginTop: "auto",
  },
  buttonsRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "#302E38",
    borderRadius: 50,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "#FDFDFD",
    fontFamily: "InterSemi",
    fontSize: 16,
    padding: 15,
    paddingHorizontal: 25,
  },
  stepIndicatorContainer: {
    flexDirection: "row",
    gap: 8,
    marginHorizontal: 15,
  },
  stepIndicator: {
    flex: 1,
    height: 3,
    backgroundColor: "gray",
    borderRadius: 10,
  },
});
