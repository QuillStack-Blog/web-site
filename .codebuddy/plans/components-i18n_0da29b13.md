---
name: components-i18n
overview: 将全部组件接入统一的多语言系统，使用 `t()` 函数替换硬编码的文本和语言判断逻辑
todos:
  - id: expand-i18n-translations
    content: 扩展 i18n.ts 添加缺失的翻译键（视频标题/描述、功能名称、对比平台名、PWA 指标等）
    status: completed
  - id: migrate-comparison
    content: 重构 home/Comparison.tsx：使用 t() 函数翻译标题、表头、12个功能名称和图例说明
    status: completed
    dependencies:
      - expand-i18n-translations
  - id: migrate-video-showcase
    content: 重构 home/VideoShowcase.tsx：使用 t() 函数翻译标题、播放列表和视频内容数组
    status: completed
    dependencies:
      - expand-i18n-translations
  - id: migrate-responsive-showcase
    content: 重构 home/ResponsiveShowcase.tsx：使用 t() 函数翻译设备信息、PWA 说明和性能指标
    status: completed
    dependencies:
      - expand-i18n-translations
  - id: migrate-config-preview
    content: 重构 home/ConfigPreview.tsx：使用 t() 函数翻译标签和按钮文本
    status: completed
    dependencies:
      - expand-i18n-translations
  - id: migrate-hero
    content: 重构 home/Hero.tsx：使用 t() 函数翻译 CTA 按钮文本
    status: completed
  - id: migrate-feature-list
    content: 重构 about/FeatureList.tsx：移除硬编码语言判断，使用 t() 函数重构 features 数组
    status: completed
    dependencies:
      - expand-i18n-translations
  - id: migrate-community
    content: 重构 about/Community.tsx：移除硬编码语言判断，使用 t() 函数重构 links 数组
    status: completed
    dependencies:
      - expand-i18n-translations
  - id: migrate-file-tree
    content: 重构 about/FileTree.tsx：移除硬编码语言判断，使用 t() 函数翻译标题和描述
    status: completed
    dependencies:
      - expand-i18n-translations
  - id: migrate-floating-island
    content: 重构 layout/FloatingIsland.tsx：使用 t() 函数翻译 GitHub 文本
    status: completed
    dependencies:
      - expand-i18n-translations
---

## 用户需求

将全部组件接入多语言功能

## 产品概述

QuillStack 是一个个人博客构建工具，需要支持中文(zh)、英文(en)、繁体中文(tw)三种语言。

## 核心功能

需要修改9个组件，使它们使用统一的多语言方案：

1. **home/Comparison.tsx** - 功能对比表格（完全硬编码）
2. **home/VideoShowcase.tsx** - 视频展示组件（完全硬编码）
3. **home/ResponsiveShowcase.tsx** - 响应式展示组件（完全硬编码）
4. **home/ConfigPreview.tsx** - 配置预览组件（完全硬编码）
5. **home/Hero.tsx** - 首页英雄区域（部分硬编码）
6. **about/FeatureList.tsx** - 功能列表（硬编码语言判断）
7. **about/Community.tsx** - 社区链接（硬编码语言判断）
8. **about/FileTree.tsx** - 项目文件树（硬编码语言判断）
9. **layout/FloatingIsland.tsx** - 浮动导航（部分硬编码）

## 现有实现

- 使用 `src/lib/i18n.ts` 存储翻译内容
- 包含 `translations` 对象和 `t(key, language)` 函数
- 组件通过 `useApp()` hook 获取 `language` 状态

## 技术栈

- Next.js (React + TypeScript)
- Tailwind CSS
- framer-motion 动画库
- shadcn/ui 组件库

## 实现方案

1. **扩展 i18n.ts 翻译文件**：添加所有缺失的翻译键，包括视频标题/描述、功能对比表格内容、PWA 性能指标等
2. **重构硬编码组件**：将硬编码文本替换为 `t()` 函数调用
3. **统一代码模式**：

- 导入 `useApp` 和 `t` from 相应模块
- 使用 `{ t('key', language) }` 模式替换硬编码文本
- 动态内容数组（如 features、videos）通过 `t()` 获取翻译

## 实施注意事项

- 遵循现有代码模式：已使用 `useApp()` 和 `t()` 的组件保持一致
- 动态数组内容（features、videos、devices）需要从硬编码值改为翻译键
- 确保三种语言（zh/en/tw）都有完整翻译