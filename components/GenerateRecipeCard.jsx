import { Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Colors from "../shared/Colors";
import Button from "./Button";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";

export default function GenerateRecipeCard() {
  return (
    <LinearGradient
      colors={[Colors.BLUE, Colors.PRIMARY]}
      style={{ marginTop: 15, padding: 15, borderRadius: 10 }}
    >
      <Text style={{ fontSize: 23, fontWeight: "bold", color: Colors.WHITE }}>
        Need Meal Ideas?✨
      </Text>
      <Text
        style={{
          fontSize: 18,
          color: Colors.WHITE,
          opacity: 0.8,
          marginTop: 7,
        }}
      >
        Let Our AI Generate Personalized Recipes Just For You!
      </Text>
      <TouchableOpacity
        style={{
          padding: 12,
          backgroundColor: Colors.WHITE,
          marginTop: 10,
          borderRadius: 8,
          width: 190,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 7
        }}
      >
        <Text style={{ fontSize: 18, color: Colors.PRIMARY }}>
          Generate With AI
        </Text>
        <HugeiconsIcon icon={ArrowRight02Icon} color={Colors.PRIMARY} />
      </TouchableOpacity>
    </LinearGradient>
  );
}
