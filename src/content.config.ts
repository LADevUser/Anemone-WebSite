import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const journal = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		draft: z.boolean().default(false),
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		status: z.string(),
		audience: z.string().optional(),
		focus: z.string().optional(),
		repository: z.string().url().optional(),
		order: z.number(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { journal, projects };
