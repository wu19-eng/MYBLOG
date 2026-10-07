# 小九的博客（MYBLOG）

学习笔记 · 项目作品集 · 生活随笔 · 求职展示。纯静态站点：Markdown 写作，Astro 构建，GitHub Pages 托管，无后端。

线上地址：**https://wu19-eng.github.io/MYBLOG/**

## 快速开始

```bash
npm install     # 装依赖（只需一次）
npm run dev     # 本地预览 http://localhost:4321/MYBLOG/
npm run build   # 构建到 dist/
```

## 目录结构（只需关心 content 和 public）

```
src/
├─ content/                  ← ★ 文章都放这里（.md 文件）
│  ├─ notes/                 # 学习笔记：所有笔记直接放这个文件夹
│  ├─ projects/              # 项目作品集：所有项目直接放这个文件夹
│  └─ life/                  # 生活随笔：所有随笔直接放这个文件夹
public/
└─ images/                   ← ★ 照片文件放这里
```

**规则：一个 .md 文件 = 一篇文章。文件名会成为网址。**

---

## 内容编写教程（最简单版）

### 一、添加一篇学习笔记

1. 打开 `src/content/notes/` 文件夹
2. 新建一个 `.md` 文件，名字随意，建议英文短名，如 `simulink-quickstart.md`
3. 把下面的内容粘进去，改掉【】里的部分：

```markdown
---
title: Simulink 建模入门
date: 2026-10-07
tags: [Simulink, 建模]
description: 一句话摘要，显示在列表页
---

正文从这里开始。用 ## 分节，网站会自动生成目录。
```

4. 保存，然后发布（见下方"发布"）。

### 二、添加一个项目

在 `src/content/projects/` 下新建 `.md`，用这个模板：

```markdown
---
title: 110kV 变电站主接线设计
date: 2026-10-07
tech: [变电站, 继电保护]
status: 已完成
description: 项目一句话简介
---

## 项目介绍

背景、方案、成果（尽量写清数字，如成绩、指标）。

## 踩坑复盘

问题 → 原因 → 解决 → 经验。
```

### 三、添加一篇随笔（含读书、照片）

在 `src/content/life/` 下新建 `.md`，用这个模板：

```markdown
---
title: 今天的一件小事
date: 2026-10-07
tags: [随笔]
description: 摘要（可省略这一行）
---

正文。
```

**放照片**：图片文件放进 `public/images/`，正文里写：

```markdown
![照片说明](/MYBLOG/images/照片文件名.jpg)
```

注意：图片引用必须带 `/MYBLOG/` 前缀（本地预览和线上一致）。

### 四、修改文章

用任何编辑器打开对应 `.md` 文件直接改即可：标题、正文、标签都能改。保存后执行"发布"。

- 改 `title` = 改文章标题；改 `date` = 换排序位置（最新在前）。

### 五、删除文章

直接删除那个 `.md` 文件，再执行"发布"。

### 六、发布（所有添加/修改/删除的最后一步）

在项目文件夹打开命令行，执行：

```bash
git add -A
git commit -m "更新：说明一下改了什么"
git push
```

约 1~2 分钟后自动部署上线，无需手动构建。

### 七、本地预览（发布前检查用）

```bash
npm run dev
```

浏览器打开 http://localhost:4321/MYBLOG/ ，改完文件刷新即可看到效果，确认没问题再 push。

### 八、字段速查表

| 字段 | 必填 | 作用 | 适用板块 |
| --- | --- | --- | --- |
| `title` | ✅ | 文章标题 | 全部 |
| `date` | ✅ | 日期，格式 `YYYY-MM-DD` | 全部 |
| `tags` | 可选 | 标签，`[]` 内逗号分隔，用于标签页 | 全部 |
| `description` | 可选 | 列表页摘要 | 全部 |
| `tech` | 可选 | 技术栈 | 项目 |
| `status` | 可选 | 状态，如"已完成" | 项目 |
| `repo` | 可选 | 代码仓库网址 | 项目 |

---

## 部署（已完成，留档备查）

仓库已部署到 **https://wu19-eng.github.io/MYBLOG/**。原理：push 到 `main` → GitHub Actions 自动构建 → GitHub Pages 上线。以后不需要手动操作部署。

## 待办清单

- [ ] `src/pages/index.astro`：首页的【姓名】和简介改成真实信息
- [ ] `src/pages/about.md`：个人简介、求职方向、技能栈
- [ ] `public/favicon.svg`：换站点图标（当前是 "B"）
- [ ] 写第一批真实文章

## 路线图（可选增强）

- [ ] giscus 评论（GitHub Discussions，无后端）
- [ ] pagefind 站内搜索
- [ ] RSS 订阅
- [ ] 公式渲染（KaTeX）
- [ ] 暗色模式
