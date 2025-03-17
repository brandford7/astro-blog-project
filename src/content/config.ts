import { defineCollection, z } from "astro:content";

// Post collection schema
const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      id: z.string().optional(),
      title: z.string(),
      meta_title: z.string().optional(),
      description: z.string().optional(),
      date: z.date().optional(),
      image: image(),
      authors: z.array(z.string()).default(["admin"]),
      categories: z.array(z.string()).default(["others"]),
      tags: z.array(z.string()).default(["others"]),
      canonical: z.string().optional(),
      draft: z.boolean().optional(),
    }),
});

// Author collection schema
const authorsCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    social: z
      .object({
        facebook: z.string().optional(),
        twitter: z.string().optional(),
        instagram: z.string().optional(),
      })
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const aboutCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
    // Additional fields for an About page
    bio: z.string().optional(),
    social: z
      .object({
        facebook: z.string().optional(),
        twitter: z.string().optional(),
        instagram: z.string().optional(),
        linkedin: z.string().optional(),
      })
      .optional(),
    draft: z.boolean().optional(),
  }),
});


// Export collections
export const collections = {
  pages: pagesCollection,
  authors: authorsCollection,
  about: aboutCollection,
  posts: postsCollection,
};
