import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 学习笔记：src/content/notes/<文章>.md
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
  }),
});

// 项目作品集：src/content/projects/<文章>.md
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    date: z.coerce.date(),
    tech: z.array(z.string()).default([]),
    status: z.string().default('已完成'),
    repo: z.string().url().optional(),
  }),
});

// 生活随笔：src/content/life/<文章>.md（本骨架不含私密模块）
const life = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/life' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { notes, projects, life };
