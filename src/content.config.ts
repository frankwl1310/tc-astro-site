import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const hubspotHowTo = defineCollection({
  loader: glob({
    base: "./src/content/hubspot-how-to",
    pattern: "**/*.md",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** Optional permalink; defaults to filename-based id from the collection. */
    slug: z.string().optional(),
    /** Path under /public or absolute image URL for og:image & Article image */
    heroImage: z.string().optional(),
    author: z
      .object({
        name: z.string(),
        url: z.string().url().optional(),
      })
      .optional(),
  }),
});

export const collections = {
  "hubspot-how-to": hubspotHowTo,
};
