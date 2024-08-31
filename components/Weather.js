import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
const API_KEY = "0cb673ded64d558cc8e4652e007745b3";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";

const Weather = () => {
  // <FontAwesome name="snowflake-o" size={24} color="black" /> snow
  // <Feather name="sun" size={24} color="black" /> clear
  // <Ionicons name="rainy" size={24} color="black" /> rain
  // <Fontisto name="day-haze" size={24} color="black" /> haze
  // <Entypo name="cloud" size={24} color="black" /> cloud
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getWeatherData(cityName) {
    setLoading(true);
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

    let res = await fetch(API);

    if (res.status == 200) {
      res = await res.json();
      setWeatherData(res);
    } else {
      setWeatherData(null);
    }
    setLoading(false);
  }

  useEffect(() => {
    getWeatherData("London");
    if (weatherData != null) {
      console.log(weatherData);
    }
  }, []);

  if (loading) {
    <ActivityIndicator size="large" />;
  } else if (weatherData == null) {
    return (
      <Text style={{ marginTop: 20, fontSize: 24, textAlign: "center" }}>
        Enter City Name
      </Text>
    );
  } else {
    return (
      <View>
        <Text style={styles.deg}>{weatherData.wind.deg}°</Text>
        <Text style={styles.cityName}>{weatherData.name}</Text>
        <View style={styles.icon}>
          <View>
            <Text>Humidity: {weatherData.main.humidity}</Text>
            <Text>Temprature: {weatherData.main.temp}</Text>
          </View>
          <View>
            <Text>Icon</Text>
          </View>
        </View>
      </View>
    );
  }
};

export default Weather;

const styles = StyleSheet.create({
  deg: {
    fontSize: 80,
    textAlign: "center",
    marginTop: "30%",
    color: "black",
  },
  cityName: {
    textAlign: "center",
    fontSize: 20,
  },
  icon: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width - 50,
    height: "50%",
    alignItems: "center",
  },
});
