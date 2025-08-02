import { glob } from 'astro/loaders';
import {
  defineCollection,
  reference,
  z,
  type CollectionEntry,
} from 'astro:content';

const postSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  seoDescription: z.string().optional(),
  seoKeywords: z.string().array().optional(),
  published: z.boolean(),
  publishDate: z.coerce.date().optional(),
  category: reference('categories'),
});

export type Post = CollectionEntry<'posts'>;

export const postCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/posts' }),
  schema: postSchema,
});

export const postIdToSlug = (id: string) => {
  return id.split('/')[1];
};
