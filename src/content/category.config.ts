import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const categorySchema = z.object({
  title: z.string(),
});

export type Category = z.infer<typeof categorySchema>;

export const categoryCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './categories' }),
  schema: categorySchema,
});
