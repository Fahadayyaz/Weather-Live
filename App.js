import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import Searchbar from "./components/Searchbar";
import Weather from "./components/Weather";

export default function App() {
  const [savedName, setSavedName] = useState("");
  const [backgroundImg, setBackgroundImg] = useState(null); // Changed to null for conditional rendering

  function cityNameHandler(cityName) {
    setSavedName(cityName);
  }

  function backgroundHandler(background) {
    setBackgroundImg(background);
    console.log({ backgroundImg });
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImg} // Use 'source' instead of 'background'
        resizeMode="cover"
        style={styles.container}
      >
        <Searchbar cityName={cityNameHandler} />
        <Weather cityName={savedName} background={backgroundHandler} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("screen").width,
  },
});
