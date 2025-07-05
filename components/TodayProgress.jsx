import { View, Text } from "react-native";
import moment from "moment/moment";
import { useContext } from "react";

import Colors from "../shared/Colors";

import { UserContext } from "../context/UserContext";

export default function TodayProgress() {
  const { user } = useContext(UserContext);

  return (
    <View style={{ marginTop: 15, padding: 15, backgroundColor: Colors.WHITE, borderRadius: 10 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Today's Goal</Text>
        <Text style={{ fontSize: 18 }}>{moment().format("MMM D, yyyy")}</Text>
      </View>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 10,
          color: Colors.PRIMARY,
        }}
      >
        1200/{user?.calories} Calories
      </Text>
      <Text style={{ fontSize: 16, textAlign: "center", marginTop: 2 }}>
        You're Doing Great!
      </Text>
      <View
        style={{
          backgroundColor: Colors.GRAY,
          height: 10,
          borderRadius: 99,
          marginTop: 15,
          opacity: 0.7,
        }}
      >
        <View
          style={{
            backgroundColor: Colors.PRIMARY,
            width: "50%",
            height: 10,
            borderRadius: 99,
          }}
        ></View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 5
        }}
      >
        <Text>Calories Consumed</Text>
        <Text>Keep It Up! 🔥</Text>
      </View>
    </View>
  );
}
