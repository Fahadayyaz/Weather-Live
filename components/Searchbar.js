import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";

const Searchbar = (props) => {
  const [name, setName] = useState("");

  function cityNameHandler(cityName) {
    setName(cityName);
  }
  function nameEnterHandler() {
    props.cityName(name);
  }

  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Enter Your City Name"
        onChangeText={cityNameHandler}
      />
      <Feather
        name="search"
        size={24}
        color="black"
        onPress={nameEnterHandler}
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1.5,
    borderColor: "black",
    borderRadius: 10,
    width: Dimensions.get("screen").width - 80,
    padding: 10,
  },
});
