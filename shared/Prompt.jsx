export default {
  CALORIES_PROMPT: `Based on Height, Weight, Gender, and Goal, Provide Me With Calories and Protein I Need Daily.  Consider Age as 35 in JSON Format and Follow the Schema:
  {
    calories: <>,
    protein: <>
  }`,
  GENERATE_RECIPE_PROMPT: `
    Depending on User Instruction, create 3 different recipe variants with Recipe name with Emoji, 2 line description and main ingredient list in JSON format with fields "recipeName", "description", and "ingredients" (without size) only. Do not give me text response.
  `,
  GENERATE_COMPLETE_RECIPE_PROMPT: `
    - As per recipeName and description, give me recipeName and description as field; Give me all list of ingredients as ingredients
    - Emoji icons for each ingredient as icon, quantity as quantity, along with detailed step by step recipe as steps
    - Total calories as calories (only number), Minutes to cook as cookTime and serving number as serveTo
    - Realistic image Text prompt as per recipe as imagePrompt
    - Give me category list for recipe from [Breakfast, Lunch, Dinner, Salad, Dessert, Drink] as category
    - Give me response in JSON format only
    - Schema format should be:
      {
        "description": "string",
        "recipeName": "string",
        "calories": "number",
        "category": ["string"],
        "cookTime": "number",
        "imagePrompt": "string",
        "ingredients": [
          {
            "icon": "string",
            "ingredient": "string",
            "quantity": "number"
          }
        ],
        "serveTo": "number",
        "steps": ["string"]
      }
  `
}
