import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Searchbar from "./components/Searchbar";
import Weather from "./components/Weather";

export default function App() {
  const [savedName, setSavedName] = useState("");
  function cityNameHandler(cityName) {
    setSavedName(cityName);
  }
  return (
    <View style={styles.container}>
      <Searchbar cityName={cityNameHandler} />
      <Weather cityName={savedName} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
