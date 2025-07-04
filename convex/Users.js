import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const CreateNewUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("Users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    if (user?.length == 0) {
      const data = {
        name: args.name,
        email: args.email,
        credits: 10,
      };

      await ctx.db.insert("Users", {
        ...data,
      });

      return data;
    }

    return user[0];
  },
});

export const GetUser = query({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("Users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    return user[0];
  },
});

export const UpdateUserPreference = mutation({
  args: {
    uid: v.id("Users"),
    height: v.string(),
    weight: v.string(),
    gender: v.string(),
    goal: v.string(),
    calories: v.optional(v.number()),
    protein: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db.patch(args.uid, {
      height: args.height,
      weight: args.weight,
      gender: args.gender,
      goal: args.goal,
      calories: args.calories,
      protein: args.protein
    });

    return result;
  },
});
