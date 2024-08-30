import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Weather = ({ city, temperature, condition }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.temperature}>{temperature}°C</Text>
      <Text style={styles.condition}>{condition}</Text>
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
    padding: 20,
    backgroundColor: "lightblue",
    borderRadius: 10,
  },
  city: {
    fontSize: 24,
    fontWeight: "bold",
  },
  temperature: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#ff6347",
  },
  condition: {
    fontSize: 20,
    fontStyle: "italic",
  },
});
