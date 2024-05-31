import { defineCollection, reference, z } from 'astro:content';

export const postSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  published: z.boolean(),
  publishDate: z.coerce.date().optional(),
  category: reference('categories'),
});

export type Post = z.infer<typeof postSchema>;

export const postCollection = defineCollection({
  type: 'content',
  schema: postSchema,
});
