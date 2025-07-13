import { useContext, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useMutation } from "convex/react";
import { useRouter } from "expo-router";

import { generateRecipeAI, generateRecipeImage } from "../services/AiModel";
import { api } from "../convex/_generated/api";
import { UserContext } from "../context/UserContext";

import Colors from "../shared/Colors";
import Prompt from "../shared/Prompt";
import LoadingDialog from "./LoadingDialog";

export default function RecipeOptionList({ recipeOption }) {
  const [loading, setLoading] = useState(false);

  const createRecipe = useMutation(api.Recipes.createRecipe);

  const { user } = useContext(UserContext);

  const router = useRouter();

  const onRecipeOptionSelect = async (recipe) => {
    setLoading(true);
    const prompt =
      "RecipeName: " +
      recipe?.recipeName +
      " Description:" +
      recipe?.description +
      Prompt.GENERATE_COMPLETE_RECIPE_PROMPT;

    try {
      const result = await generateRecipeAI(prompt);

      const extractedJSON = result.choices[0].message.content
        .replace("```json", "")
        .replace("```", "");

      const parsedJSON = JSON.parse(extractedJSON);

      setLoading(false);

      //Generate Recipe Image
      const imageResponse = await generateRecipeImage(parsedJSON?.imagePrompt);

      //Save to Database
      const savedRecipe = await createRecipe({
        jsonData: parsedJSON,
        imageUrl: imageResponse?.data?.image,
        recipeName: parsedJSON?.recipeName,
        uid: user?._id,
      });

      setLoading(false);

      router.push(`/recipe-detail?recipeId=${savedRecipe}`);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 20 }}>Select Recipe</Text>
      <View>
        {recipeOption?.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                padding: 15,
                borderWidth: 0.2,
                borderRadius: 15,
                marginTop: 15,
              }}
              onPress={() => onRecipeOptionSelect(item)}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {item?.recipeName}
              </Text>
              <Text style={{ color: Colors.GRAY }}>{item?.description}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <LoadingDialog loading={loading} />
    </View>
  );
}
