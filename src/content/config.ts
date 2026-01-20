import { defineCollection, z } from 'astro:content';

const about = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    location: z.string(),
    title: z.string(),
    subtitle: z.string(),
    paragraphs: z.array(z.string()),
    socialLinks: z.object({
      github: z.string().url(),
      linkedin: z.string().url(),
      x: z.string().url(),
    }),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    projects: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        link: z.string().url().optional(),
      })
    ),
  }),
});

const life = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    hobbies: z.array(
      z.object({
        title: z.string(),
        paragraphs: z.array(z.string()),
      })
    ),
  }),
});

export const collections = {
  about,
  projects,
  life,
};
