import { defineCollection, z } from "astro:content";

export const categorySchema = z.object({
  title: z.string(),
});

export type Category = z.infer<typeof categorySchema>;

export const categoryCollection = defineCollection({
  type: "data",
  schema: categorySchema,
});
