import { View, Text, FlatList } from "react-native";
import Colors from "../shared/Colors";

export default function RecipeIngredients({ recipeDetails }) {
  const ingredients = recipeDetails?.jsonData?.ingredients;

  return (
    <View style={{ marginTop: 15 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Ingredients</Text>
        <Text>{ingredients?.length} items</Text>
      </View>
      <FlatList
        data={ingredients}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                marginTop: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
                <Text
                  style={{
                    padding: 7,
                    fontSize: 23,
                    backgroundColor: Colors.SECONDARY,
                    borderRadius: 99,
                  }}
                >
                  {item?.icon}
                </Text>
                <Text style={{ fontSize: 17, fontWeight: "600" }}>
                  {item?.ingredient}
                </Text>
              </View>
              <Text style={{ color: Colors.GRAY, fontSize: 16 }}>
                {item?.quantity}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}
