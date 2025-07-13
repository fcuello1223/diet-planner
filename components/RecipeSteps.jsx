import { View, Text, FlatList } from "react-native";
import Colors from "../shared/Colors";

export default function RecipeSteps({ recipeDetails }) {
  const steps = recipeDetails?.jsonData?.steps;

  return (
    <View style={{ marginTop: 15 }}>
      <Text>Directions</Text>
      <FlatList
        data={steps}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 5,
                padding: 10,
                marginTop: 10,
                flex: 1,
                alignItems: "center",
                borderWidth: 0.3,
                borderRadius: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  backgroundColor: Colors.PRIMARY,
                  padding: 10,
                  borderRadius: 99,
                  paddingHorizontal: 15,
                  color: Colors.WHITE,
                }}
              >
                {index + 1}
              </Text>
              <Text style={{ fontSize: 18, flex: 1, flexShrink: 1 }}>
                {item}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}
