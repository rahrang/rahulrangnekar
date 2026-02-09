import { file } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const projectSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  href: z.string().min(1).startsWith('/'),
});

export type Project = z.infer<typeof projectSchema>;

export const projectCollection = defineCollection({
  loader: file('src/content/projects.json'),
  schema: projectSchema,
});
