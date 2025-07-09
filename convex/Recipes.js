import { v } from "convex/values";

import { mutation } from "./_generated/server";

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
