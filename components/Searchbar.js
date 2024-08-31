import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";

const Searchbar = () => {
  return (
    <View style={styles.searchBar}>
      <TextInput placeholder="Enter Your City Name" />
      <Feather name="search" size={24} color="black" />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1.5,
    borderColor: "black",
    borderRadius: 10,
    width: Dimensions.get("screen").width - 80,
    padding: 10,
  },
});
