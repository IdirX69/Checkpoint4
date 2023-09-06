import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const SearchBar = () => {
  return (
    <View
      style={{
        width: "90%",
        height: "7%",
        borderRadius: 8,
        marginLeft: "5%",
        flexDirection: "row",
        backgroundColor: "white",
      }}
    >
      <TextInput
        placeholder="Search contact"
        style={{ width: "90%", height: "100%", padding: 8 }}
      />
      <View style={{ justifyContent: "center" }}>
        <Ionicons name={"search-outline"} size={25} />
      </View>
    </View>
  );
};

export default SearchBar;
