import { View, Text } from "react-native";
import React from "react";
import Searchbar from "./components/Searchbar";
import Weather from "./components/Weather";
const API_KEY = "0cb673ded64d558cc8e4652e007745b3";
const API =
  "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

export default function App() {
  return (
    <View>
      <Searchbar />
      <Weather />
    </View>
  );
}
