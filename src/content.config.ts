import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 学习笔记：src/content/notes/<分类>/<文章>.md
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    date: z.coerce.date(),
    category: z.enum(['electrical', 'math', 'simulink', 'python']),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
  }),
});

// 项目作品集：src/content/projects/<分类>/<文章>.md
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    date: z.coerce.date(),
    category: z.enum(['course-design', 'simulation', 'competition']),
    tech: z.array(z.string()).default([]),
    status: z.string().default('已完成'),
    repo: z.string().url().optional(),
  }),
});

// 生活随笔：src/content/life/<分类>/<文章>.md（本骨架不含私密模块）
const life = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/life' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    date: z.coerce.date(),
    category: z.enum(['essays', 'reading', 'photos']),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { notes, projects, life };
