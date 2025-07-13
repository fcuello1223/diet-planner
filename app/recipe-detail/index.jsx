import { FlatList, Platform, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "convex/react";

import { api } from "../../convex/_generated/api";
import RecipeIntro from "../../components/RecipeIntro";
import RecipeIngredients from "../../components/RecipeIngredients";
import RecipeSteps from "../../components/RecipeSteps";
import Colors from "../../shared/Colors";
import Button from "../../components/Button";

export default function RecipeDetail() {
  const { recipeId: routeId } = useLocalSearchParams();

  const recipeId = routeId ?? "j972vx9t9n4xybepfrsnbcvrg57kkvg7";

  const recipeDetails = useQuery(
    api.Recipes.getRecipeById,
    recipeId ? { id: recipeId } : "skip"
  );

  console.log("Recipe ID:\n", recipeId);
  console.log("\n\n");
  console.log("Recipe Detail:\n", recipeDetails);

  return (
    <FlatList
      data={[]}
      renderItem={() => null}
      ListHeaderComponent={
        <View
          style={{
            padding: 20,
            paddingTop: Platform.OS === "ios" ? 40 : 30,
            backgroundColor: Colors.WHITE,
            height: "100%",
          }}
        >
          <RecipeIntro recipeDetails={recipeDetails} />
          <RecipeIngredients recipeDetails={recipeDetails} />
          <RecipeSteps recipeDetails={recipeDetails} />
          <View style={{ marginTop: 15 }}>
            <Button title="Add To Meal" />
          </View>
        </View>
      }
    ></FlatList>
  );
}
