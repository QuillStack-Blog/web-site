---
name: multilingual-fix-plan
overview: 修复项目中所有还未接入多语言的硬编码文本，包括布局文件、配置预览组件、浮动导航和社区组件
todos:
  - id: fix-layout-metadata
    content: 修复 app/layout.tsx metadata 硬编码，添加 document.title 动态更新逻辑
    status: completed
  - id: fix-floating-island-text
    content: 修复 FloatingIsland.tsx Logo alt 和品牌名硬编码
    status: completed
  - id: fix-community-desc
    content: 修复 Community.tsx 链接描述 emoji 硬编码
    status: completed
  - id: fix-config-preview-text
    content: 修复 ConfigPreview.tsx 预览区域示例文本硬编码
    status: completed
  - id: add-missing-i18n-keys
    content: 添加缺失的 i18n 翻译键
    status: completed
---

## Product Overview

将网站剩余的硬编码文本接入多语言系统

## Core Features

- app/layout.tsx: 修复 metadata 硬编码问题（由于是服务端组件，需要特殊处理）
- FloatingIsland.tsx: Logo alt 文本和品牌名使用翻译
- Community.tsx: 链接描述 emoji 使用翻译键
- ConfigPreview.tsx: 预览区域示例文本使用翻译键

## Tech Stack

- Frontend: Next.js + React + TypeScript
- i18n: 自定义 `t()` 函数 + `useApp()` hook
- 语言: zh / en / tw 三种语言

## Implementation Approach

1. **layout.tsx metadata**: 由于 metadata 是服务端渲染，无法使用 useApp()。方案是保持默认中文作为 fallback，但在 client component 中通过动态更新 document.title 来实现实时语言切换

2. **其他组件**: 简单地将硬编码文本替换为 `t('key', language)` 调用

## Directory Structure

修改的文件：

- src/app/layout.tsx
- src/components/layout/FloatingIsland.tsx
- src/components/about/Community.tsx
- src/components/home/ConfigPreview.tsx
- src/lib/i18n.ts