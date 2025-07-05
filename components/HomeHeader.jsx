// import { useContext } from "react";
import { View, Text, Image } from "react-native";

// import { UserContext } from "../context/UserContext";

export default function HomeHeader() {

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Image
        source={require("../assets/images/user.png")}
        style={{ height: 60, width: 60, borderRadius: 99 }}
      />
      <View>
        <Text style={{ fontSize: 20 }}>Hello, 👋</Text>
        <Text style={{ fontSize: 23, fontWeight: "bold" }}>Francisco</Text>
      </View>
    </View>
  );
}
