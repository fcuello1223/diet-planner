import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import Colors from "@/shared/Colors";

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 13,
        backgroundColor: Colors.PRIMARY,
        width: "100%",
        borderRadius: 15,
      }}
    >
      <Text style={{ fontSize: 18, color: Colors.WHITE, textAlign: "center" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
