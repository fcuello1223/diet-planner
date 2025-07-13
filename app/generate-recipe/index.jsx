import { useState } from "react";
import { View, Text, Platform, TextInput, StyleSheet } from "react-native";

import Colors from "../../shared/Colors";
import Button from "../../components/Button";
import { generateRecipeAI } from "../../services/AiModel";
import Prompt from "../../shared/Prompt";
import RecipeOptionList from "../../components/RecipeOptionList";

export default function GenerateRecipe() {
  const [input, setInput] = useState();
  const [loading, setLoading] = useState(false);
  const [recipeOption, setRecipeOption] = useState([]);

  const generateRecipeOptions = async () => {
    setLoading(true);

    //Make AI Model Call to Generate Recipe Options
    try {
      const prompt = input + Prompt.GENERATE_RECIPE_PROMPT;

      const result = await generateRecipeAI(prompt);

      const extractedJSON = (result.choices[0].message.content).replace('```json', '').replace('```', '');
      const parsedJSON = JSON.parse(extractedJSON);

      setRecipeOption(parsedJSON);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  };

  return (
    <View
      style={{
        paddingTop: Platform.OS === "ios" ? 40 : 30,
        padding: 20,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>
        AI Recipe Generator
      </Text>
      <Text style={{ marginTop: 5, color: Colors.GRAY, fontSize: 16 }}>
        Generate Personalized Recipes Using AI
      </Text>
      <TextInput
        style={styles.textArea}
        placeholder="Please Enter Your Ingredient or Recipe Name"
        onChangeText={(val) => setInput(val)}
      />
      <View style={{ marginTop: 25 }}>
        <Button
          onPress={generateRecipeOptions}
          title="Generate Recipe"
          loading={loading}
        />
      </View>
      {recipeOption?.length > 0 && (
        <RecipeOptionList recipeOption={recipeOption} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textArea: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20,
    marginTop: 15,
    height: 150,
    textAlignVertical: "top",
    backgroundColor: Colors.WHITE,
  },
});
