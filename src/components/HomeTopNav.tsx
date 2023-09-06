import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";

const HomeTopNav = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: "35%",
        margin: 2,
        height: "10%",
        alignItems: "center",
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 22, color: "blue" }}>
        CONTACTS
      </Text>
    </View>
  );
};

export default HomeTopNav;
