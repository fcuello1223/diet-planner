import { useState } from "react";
import { View, Text } from "react-native";

import { HugeiconsIcon } from "@hugeicons/react-native";
import { CalendarAdd01Icon } from "@hugeicons/core-free-icons";

import Colors from "../shared/Colors";
import Button from "./Button";

export default function TodayMealPlan() {
  const [mealPlan, setMealPlan] = useState();

  return (
    <View style={{ marginTop: 15 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Today's Meal Plan
      </Text>
      {!mealPlan && (
        <View
          style={{
            display: "flex",
            alignItems: "center",
            padding: 20,
            backgroundColor: Colors.WHITE,
            marginTop: 15,
            borderRadius: 15,
          }}
        >
          <HugeiconsIcon
            icon={CalendarAdd01Icon}
            size={40}
            color={Colors.PRIMARY}
          />
          <Text style={{ fontSize: 18, color: Colors.GRAY, marginBottom: 20 }}>
            You Don't Have Any Meal Plan For Today!
          </Text>
          <Button title="Create New Meal Plan" />
        </View>
      )}
    </View>
  );
}
