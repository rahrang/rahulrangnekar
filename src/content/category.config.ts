import { file } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const categorySchema = z.object({
  title: z.string(),
});

export type Category = z.infer<typeof categorySchema>;

export const categoryCollection = defineCollection({
  loader: file('src/content/categories.json'),
  schema: categorySchema,
});
