# 个人静态博客

学习笔记 · 项目作品集 · 生活随笔 · 求职展示。纯静态站点：Markdown 写作，Astro 构建，GitHub Pages 托管，无后端。

> 按需求：本骨架**不含私密内容模块**，所有内容均公开。

## 快速开始

```bash
npm install     # 安装依赖
npm run dev     # 本地预览（默认 http://localhost:4321）
npm run build   # 构建到 dist/
npm run preview # 本地预览构建产物
```

需要 Node.js 18.17+（推荐 22）。本机未安装 Git，推送到 GitHub 前需先安装。

## 目录结构

```
├─ src/
│  ├─ content/                    # 全部 Markdown 内容
│  │  ├─ notes/                   # 学习笔记
│  │  │  ├─ electrical/           # 电气专业课
│  │  │  ├─ math/                 # 考研数一
│  │  │  ├─ simulink/             # Simulink 仿真
│  │  │  └─ python/               # Python 笔记
│  │  ├─ projects/                # 项目作品集
│  │  │  ├─ course-design/        # 课程设计
│  │  │  ├─ simulation/           # 仿真项目
│  │  │  └─ competition/          # 竞赛
│  │  └─ life/                    # 生活随笔（不含私密模块）
│  │     ├─ essays/               # 随笔
│  │     ├─ reading/              # 读书
│  │     └─ photos/               # 照片
│  ├─ layouts/                    # Base / PostLayout / PageLayout
│  ├─ components/                 # Header / Footer
│  └─ pages/                      # 首页、各列表页、详情页、标签页、关于我
├─ public/                        # 静态资源（favicon、照片放 public/images/）
├─ .github/workflows/deploy.yml   # GitHub Actions 自动部署
├─ astro.config.mjs
└─ package.json
```

## 写作指南

在对应分类目录下新建 `.md` 文件，Frontmatter 必填字段：

| 字段 | 说明 | 适用 |
| --- | --- | --- |
| `title` | 标题（必填） | 全部 |
| `date` | 日期（必填） | 全部 |
| `category` | 分类，见下方枚举 | 全部 |
| `description` | 摘要，显示在列表页 | 全部 |
| `tags` | 标签数组，用于标签聚合页 | 笔记 / 生活 |
| `tech` | 技术栈数组 | 项目 |
| `status` | 项目状态，如"已完成" | 项目 |
| `repo` | 代码仓库 URL（可选） | 项目 |

分类枚举：

- 笔记：`electrical`（电气专业课）/ `math`（考研数一）/ `simulink`（Simulink 仿真）/ `python`（Python 笔记）
- 项目：`course-design`（课程设计）/ `simulation`（仿真项目）/ `competition`（竞赛）
- 生活：`essays`（随笔）/ `reading`（读书）/ `photos`（照片）

写作建议：

- **笔记**：目录下自带模板 `example-*.md`，复制改内容即可；正文用 `##` 分节，会自动生成"目录"。
- **项目**：上半部分写项目介绍（背景 / 方案 / 成果，成果尽量量化），下半部分单独写"踩坑复盘"（问题 → 原因 → 解决 → 经验）。
- **照片**：图片放入 `public/images/`，正文用 `![说明](/images/xxx.jpg)` 引用。

## 部署（GitHub Pages）

1. 在 GitHub 新建仓库（设为 **Public**）。
2. 本机安装 Git 后初始化并推送：

```bash
git init
git add .
git commit -m "init: 站点骨架"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

3. 仓库 Settings → Pages → **Source 选择 "GitHub Actions"**（本项目自带 workflow，push 即自动构建部署）。
4. 若仓库名不是 `<username>.github.io`（项目站），需修改 `astro.config.mjs` 中的 `base: '/'` 为 `base: '/<repo>/'`，并把 `site` 改为 `https://<username>.github.io/<repo>/`。

## 定制清单（上线前必改）

- [ ] `astro.config.mjs`：`site` 地址
- [ ] `src/layouts/Base.astro`、`src/layouts/PostLayout.astro`、`src/layouts/PageLayout.astro`、`src/pages/index.astro`、`src/pages/tags/[tag].astro` 中的【站点名】
- [ ] `src/pages/index.astro`：姓名、简介、邮箱
- [ ] `src/components/Footer.astro`：邮箱
- [ ] `src/pages/about.md`：个人简介、求职方向、技能栈
- [ ] `public/favicon.svg`：站点图标
- [ ] 删除 `src/content/` 下的 5 篇示例文章，替换为真实内容

## 路线图（可选增强，不阻塞上线）

- [ ] giscus 评论（GitHub Discussions，无后端）
- [ ] pagefind 站内搜索
- [ ] RSS 订阅
- [ ] 公式渲染（KaTeX）
- [ ] 暗色模式
