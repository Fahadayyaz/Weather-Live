import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";

const Searchbar = () => {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.textInput} placeholder="Search city" />
        <Feather name="search" size={24} color="black" />
      </View>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  contentContainer: {
    width: "100%",
    padding: 10,
    backgroundColor: "lightblue",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
});
