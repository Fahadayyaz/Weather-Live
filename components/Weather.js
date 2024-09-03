import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";
import {
  clear_day,
  clear_night,
  cloud_day,
  cloud_night,
  haze_day,
  haze_night,
  rain_day,
  rain_night,
  snow_day,
  snow_night,
} from "../assets/backgrounds/index";

const API_KEY = "0cb673ded64d558cc8e4652e007745b3";

const Weather = (props) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [icon, setIcon] = useState("");
  const [background, setBackground] = useState("");

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
    getWeatherData(props.cityName);
    const iconOBJ = {
      snow: <FontAwesome name="snowflake-o" size={48} color="black" />,
      clear: <Feather name="sun" size={48} color="black" />,
      rain: <Ionicons name="rainy" size={48} color="black" />,
      haze: <Fontisto name="day-haze" size={48} color="black" />,
      cloud: <Entypo name="cloud" size={48} color="black" />,
    };
    if (weatherData != null) {
      const now = new Date();
      const sunrise = new Date(weatherData.sys.sunrise * 1000);
      const sunset = new Date(weatherData.sys.sunset * 1000);
      const isDayTime = now > sunrise && now < sunset;

      switch (weatherData.weather[0].main) {
        case "Snow":
          setIcon(iconOBJ.snow);
          isDayTime ? setBackground(snow_day) : setBackground(snow_night);
          break;
        case "Clear":
          setIcon(iconOBJ.clear);
          isDayTime ? setBackground(clear_day) : setBackground(clear_night);
          break;
        case "Rain":
          setIcon(iconOBJ.rain);
          isDayTime ? setBackground(rain_day) : setBackground(rain_night);
          break;
        case "Haze":
          setIcon(iconOBJ.haze);
          isDayTime ? setBackground(haze_day) : setBackground(haze_night);
          break;
        case "Clouds":
          setIcon(iconOBJ.cloud);
          isDayTime ? setBackground(cloud_day) : setBackground(cloud_night);
          break;
        default:
          setIcon(iconOBJ.haze);
          isDayTime ? setBackground(haze_day) : setBackground(haze_night);
      }
      props.background(background);
    }
  }, [props.cityName]);

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
        <Text style={styles.deg}>
          {(weatherData.main.temp - 273.15).toFixed(0)}°C
        </Text>
        <Text style={styles.cityName}>{weatherData.name}</Text>
        <View style={styles.icon}>
          <View>
            <Text>Humidity: {weatherData.main.humidity}%</Text>
            <Text>
              Temperature: {(weatherData.main.temp - 273.15).toFixed(0)}°C
            </Text>
          </View>
          <View>
            <Text>{icon}</Text>
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
