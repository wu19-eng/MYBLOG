// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  // 项目站：<username>.github.io/<repo>/
  site: 'https://wu19-eng.github.io',
  base: '/MYBLOG/',
  output: 'static',
  // Markdown 公式渲染：文章里用 $...$（行内）和 $$...$$（行间）写 LaTeX 公式
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
