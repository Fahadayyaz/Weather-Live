import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";

const Searchbar = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <View style={{ flexDirection: "row" }}>
          <TextInput />
          <Feather name="search" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  contentContainer: {
    width: "90%",
    height: "100%",
    backgroundColor: "lightblue",
    flexDirection: "row",
  },
});
