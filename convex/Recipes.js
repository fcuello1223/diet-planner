import { v } from "convex/values";

import { mutation, query } from "./_generated/server";

export const createRecipe = mutation({
  args: {
    jsonData: v.any(),
    uid: v.id("Users"),
    imageUrl: v.string(),
    recipeName: v.string(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db.insert("Recipes", {
      jsonData: args.jsonData,
      uid: args.uid,
      imageUrl: args.imageUrl,
      recipeName: args.recipeName,
    });

    return result;
  },
});

export const getRecipeById = query({
  args: { id: v.id("Recipes") },
  handler: async (ctx, args) => {
    console.log("Fetching recipe with ID:", args.id);
    const recipe = await ctx.db.get(args.id);
    if (!recipe) {
      console.log("⚠️ No recipe found!");
    }
    return recipe;
  },
});
