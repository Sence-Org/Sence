import { z, defineCollection } from "astro:content";

const posts = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string()
    })
});
export const collections = { posts };