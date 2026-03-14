# QuillStack 项目页面与 UI 文案清单

## 页面总览

当前项目实际有 3 个路由页面：

1. `/`：首页
2. `/about`：关于页
3. `/deploy`：部署页

补充说明：

- 站点有 3 种语言：`简体中文（zh）`、`English（en）`、`繁體中文（tw）`。
- 语言由 `localStorage` 中的 `quillstack-language` 或浏览器语言决定。
- 以下内容以“当前源码实际会渲染出来的页面内容”为准。
- 某些区块没有接入多语言，因此无论切到哪种语言都会继续显示中文；这些地方已单独标注。
- 某些标题存在“翻译文本”和“实际渲染结果”不一致的情况；以下写的是“实际页面上会看到的文字”。

## 全局共享 UI（所有页面都会出现）

### 1. 顶部工具栏 TopBar

左侧区域：

- 主题切换按钮：
  - 下拉菜单固定为中文：`浅色`、`深色`、`系统`
  - 按钮 `title` 可能为：
    - `当前主题: 跟随系统`
    - `当前主题: 浅色`
    - `当前主题: 深色`
- 社交图标按钮 `title`：
  - `GitHub`
  - `RSS`

右侧区域：

- 版本标签：`v1.0.0`
- 语言切换按钮 `title`：
  - 简体中文模式：`语言`
  - English 模式：`Language`
  - 繁體中文模式：`語言`
- 语言切换下拉选项：
  - `简体中文`
  - `English`
  - `繁體中文`

### 2. 灵动岛导航 FloatingIsland

固定内容：

- Logo 文字：`QuillStack`
- 移动端展开菜单额外包含：`GitHub`

导航文案：

- 简体中文：`首页`、`部署`、`关于`
- English：`Home`、`Deploy`、`About`
- 繁體中文：`首頁`、`部署`、`關於`

## `/` 首页

页面区块顺序如下：

1. Hero
2. ScreenshotGallery
3. Features
4. UseCases
5. ThemePreview
6. ResponsiveShowcase
7. VideoShowcase
8. ConfigPreview
9. Comparison
10. Stats
11. Testimonials
12. TechStack
13. CTA

---

### 1. Hero

固定可见文字：

- 主标题：`QuillStack`
- 3D 浏览器地址栏：`your-blog.com`

多语言文案：

- 简体中文
  - Slogan：`更轻 · 更快 · 更美`
  - 副标题：`几分钟搭建，一辈子受益的个人博客`
- English
  - Slogan：`Lighter · Faster · More Beautiful`
  - 副标题：`Set up in minutes, benefit for a lifetime`
- 繁體中文
  - Slogan：`更輕 · 更快 · 更美`
  - 副标题：`幾分鐘搭建，一輩子受益的個人部落格`

图片替代文字：

- `博客预览图`

图片 URL：

- `https://quillstack.js.org/images/home/17f5d4f0fb0dc9752cb7d21eca6aab2f6d3dcfbe.png`

### 2. ScreenshotGallery

标题区：

- 简体中文
  - 角标：`截图预览`
  - 标题：`精美的预设主题 开箱即用`
  - 副标题：`精心设计的预设主题，无需配置，开箱即用`
- English
  - 角标：`Screenshots`
  - 标题：`Exquisite Default Theme Out of the Box`
  - 副标题：`Carefully designed default theme, no configuration needed, ready to use immediately`
- 繁體中文
  - 角标：`截圖預覽`
  - 标题：`精美的預設主題 開箱即用`
  - 副标题：`精心設計的預設主題，無需配置，開箱即用`

轮播图文案：

- 简体中文
  - `博客首页`：`简洁优雅的文章列表`
    - 图片 URL：`https://quillstack.js.org/images/home/e9781d3fccfa655655b5861b64457d958dfcce2e.png`
  - `文章详情`：`沉浸式的阅读体验`
    - 图片 URL：`https://quillstack.js.org/images/home/9e08e8fa7df325ccb556d2cf4cc420abf708b46e.png`
  - `分类浏览`：`轻松管理和发现内容`
    - 图片 URL：`https://quillstack.js.org/images/home/6ccb60071be8f00760a3824d9f7d0fad57de789f.png`
  - `友情链接页面`：`好朋友就要在一起`
    - 图片 URL：`https://quillstack.js.org/images/home/ba34b28aa06852bf23d5d30a4742113d49a166dc.png`
  - `深色模式`：`护眼夜间阅读`
    - 图片 URL：`https://quillstack.js.org/images/home/e7f8b9dcdb12a0a6d3253383f4b684272906ae03.png`
- English
  - `Blog Home`：`Clean and elegant article list`
    - 图片 URL：`https://quillstack.js.org/images/home/e9781d3fccfa655655b5861b64457d958dfcce2e.png`
  - `Article Detail`：`Immersive reading experience`
    - 图片 URL：`https://quillstack.js.org/images/home/9e08e8fa7df325ccb556d2cf4cc420abf708b46e.png`
  - `Category Browse`：`Easily manage and discover content`
    - 图片 URL：`https://quillstack.js.org/images/home/6ccb60071be8f00760a3824d9f7d0fad57de789f.png`
  - `Friends Link Page`：`Good friends stay together`
    - 图片 URL：`https://quillstack.js.org/images/home/ba34b28aa06852bf23d5d30a4742113d49a166dc.png`
  - `Dark Mode`：`Eye-friendly night reading`
    - 图片 URL：`https://quillstack.js.org/images/home/e7f8b9dcdb12a0a6d3253383f4b684272906ae03.png`
- 繁體中文
  - `部落格首頁`：`簡潔優雅的文章列表`
    - 图片 URL：`https://quillstack.js.org/images/home/e9781d3fccfa655655b5861b64457d958dfcce2e.png`
  - `文章詳情`：`沉浸式的閱讀體驗`
    - 图片 URL：`https://quillstack.js.org/images/home/9e08e8fa7df325ccb556d2cf4cc420abf708b46e.png`
  - `分類瀏覽`：`輕鬆管理和發現內容`
    - 图片 URL：`https://quillstack.js.org/images/home/6ccb60071be8f00760a3824d9f7d0fad57de789f.png`
  - `友情連結頁面`：`好朋友就要在一起`
    - 图片 URL：`https://quillstack.js.org/images/home/ba34b28aa06852bf23d5d30a4742113d49a166dc.png`
  - `深色模式`：`護眼夜間閱讀`
    - 图片 URL：`https://quillstack.js.org/images/home/e7f8b9dcdb12a0a6d3253383f4b684272906ae03.png`

### 3. Features

标题区实际渲染结果：

- 简体中文：`为什么选择 QuillStack？`
- English：`Why QuillStack`
- 繁體中文：`為什麼選擇 QuillStack？`

副标题：

- 简体中文：`简洁而不简单，为写作而生的博客构建工具`
- English：`Simple yet powerful, a blog builder born for writing`
- 繁體中文：`簡潔而不簡單，為寫作而生的部落格構建工具`

卡片文案：

- 简体中文
  - `极速构建`：`Next.js 驱动，秒级构建，瞬间部署`
  - `精美主题`：`精心设计的默认主题，开箱即用`
  - `轻量简洁`：`无冗余依赖，专注写作本身`
  - `极简配置`：`一个 JSON 搞定全部，零学习成本`
- English
  - `Fast Build`：`Powered by Next.js, instant build and deployment`
  - `Beautiful Themes`：`Carefully designed default theme, ready to use`
  - `Lightweight`：`No redundant dependencies, focus on writing`
  - `Minimal Config`：`One JSON file handles everything, zero learning curve`
- 繁體中文
  - `極速構建`：`Next.js 驅動，秒級構建，瞬間部署`
  - `精美主題`：`精心設計的預設主題，開箱即用`
  - `輕量簡潔`：`無冗餘依賴，專注寫作本身`
  - `極簡配置`：`一個 JSON 搞定全部，零學習成本`

卡片占位符：

- `⚡`
- `🎨`
- `🪶`
- `✨`

### 4. UseCases

这个区块没有接入多语言，所有语言下都显示以下中文：

- 标题：`多种用途，无限可能`
- 副标题：`无论是技术博客、生活随笔还是作品集，QuillStack 都能完美胜任`

6 张用途卡片：

- `技术博客`：`分享编程心得、技术教程和项目经验`
  - 图片 URL：`https://placehold.co/400x250/1f2937/f97316?text=Tech+Blog`
- `生活随笔`：`记录日常点滴、读书笔记和旅行见闻`
  - 图片 URL：`https://placehold.co/400x250/fff7ed/f97316?text=Lifestyle`
- `作品集`：`展示设计作品、项目案例和专业成就`
  - 图片 URL：`https://placehold.co/400x250/f0fdf4/22c55e?text=Portfolio`
- `开源文档`：`为开源项目创建精美的文档网站`
  - 图片 URL：`https://placehold.co/400x250/0f172a/38bdf8?text=Documentation`
- `摄影集`：`展示摄影作品，分享拍摄技巧和后期心得`
  - 图片 URL：`https://placehold.co/400x250/fdf4ff/a855f7?text=Photography`
- `创作日志`：`音乐创作、艺术创作的过程记录`
  - 图片 URL：`https://placehold.co/400x250/fff1f2/f43f5e?text=Creative`

### 5. ThemePreview

这个区块没有接入多语言，所有语言下都显示以下中文：

- 标题：`多种主题，随心切换`
- 副标题：`内置多款精美主题，一键切换，还支持自定义配色`

模拟预览区固定文字：

- 地址栏：`my-blog.com`
- 站点名：`My Blog`
- 模拟导航：`首页`、`文章`、`关于`

主题选择卡片：

- `默认橙`：`温暖活力的橙色主题`
- `深海蓝`：`沉稳专业的蓝色主题`
- `森林绿`：`自然清新的绿色主题`
- `深邃黑`：`现代感十足的深色主题`
- `薰衣草`：`优雅浪漫的紫色主题`
- `玫瑰粉`：`甜美温柔的粉色主题`

“主题特性” 面板标题：

- `主题特性`

各主题特性：

- `默认橙`
  - `渐变强调色`
  - `温暖背景`
  - `高对比度`
- `深海蓝`
  - `专业商务`
  - `清爽视觉`
  - `易于阅读`
- `森林绿`
  - `护眼配色`
  - `自然气息`
  - `舒适阅读`
- `深邃黑`
  - `夜间模式`
  - `低对比度`
  - `护眼设计`
- `薰衣草`
  - `优雅配色`
  - `柔和视觉`
  - `艺术气息`
- `玫瑰粉`
  - `温暖甜美`
  - `亲和力`
  - `女性向`

### 6. ResponsiveShowcase

这个区块没有接入多语言，所有语言下都显示以下中文：

- 标题：`全端适配，处处精彩`
- 副标题：`无论使用什么设备，都能获得最佳的阅读体验`

设备说明卡片：

- `桌面端`
  - 描述：`大屏幕沉浸式阅读`
  - 标签：`侧边栏导航`、`宽屏布局`、`高清图片展示`
- `平板端`
  - 描述：`舒适的中间尺寸体验`
  - 标签：`自适应布局`、`触控优化`、`适中的字体`
- `手机端`
  - 描述：`随时随地，优雅阅读`
  - 标签：`汉堡菜单`、`底部导航`、`快速滑动`

PWA 信息卡：

- 标题：`PWA 支持`
- 描述：`支持渐进式 Web 应用，可以像原生应用一样安装到主屏幕，离线也能阅读。`
- 指标：
  - `100` / `Lighthouse`
  - `<1s` / `首屏加载`
  - `A+` / `性能评级`

### 7. VideoShowcase

这个区块没有接入多语言，所有语言下都显示以下中文：

- 标题：`视频教程`
- 副标题：`跟着视频一步步学习，快速掌握 QuillStack`

主视频信息会随播放列表切换，3 条视频分别为：

- `5 分钟快速上手`
  - 时长：`05:23`
  - 描述：`从零开始搭建你的第一个博客`
  - 缩略图 URL：`https://placehold.co/800x450/1f2937/f97316?text=Quick+Start+Tutorial`
- `主题自定义指南`
  - 时长：`08:15`
  - 描述：`打造独一无二的个人风格`
  - 缩略图 URL：`https://placehold.co/800x450/fed7aa/f97316?text=Theme+Customization`
- `Markdown 写作技巧`
  - 时长：`06:42`
  - 描述：`提升写作效率的实用技巧`
  - 缩略图 URL：`https://placehold.co/800x450/fff7ed/f97316?text=Markdown+Tips`

播放器内文字：

- 播放中占位提示：`视频加载中...`
- 控制栏时间格式：`02:15 / 当前视频总时长`
- 播放列表标题：`播放列表`

### 8. ConfigPreview

这个区块没有接入多语言，所有语言下都显示以下中文：

- 标题：`一个配置文件，搞定一切`
- 副标题：`无需复杂设置，一个 JSON 文件即可配置你的整个博客`
- 文件标签：`settings.json`
- 代码块下方说明：`代码块高亮`
- 预览卡标题：`预览效果`
- 预览尺寸：`500 × 400`
- 预览卡下方说明：`实时预览`
- 按钮：`查看完整配置文档`

代码块内容原文如下：

```json
{
  "siteTitle": "我的博客",
  "author": {
    "name": "作者名",
    "avatar": "/avatar.png",
    "bio": "热爱写作，记录生活"
  },
  "theme": {
    "primaryColor": "#f97316",
    "fontFamily": "Inter"
  },
  "social": {
    "github": "yourname",
    "twitter": "@yourname"
  }
}
```

### 9. Comparison

这个区块没有接入多语言，所有语言下都显示以下中文：

- 标题：`为什么选择 QuillStack？`
- 副标题：`对比主流博客平台，QuillStack 在简洁性和功能性之间找到了完美平衡`

表头：

- `功能特性`
- `QuillStack`
- `WordPress`
- `Notion`
- `Medium`
- `Ghost`

功能对比内容：

- `免费开源`
  - QuillStack：`支持`
  - WordPress：`支持`
  - Notion：`partial`
  - Medium：`支持`
  - Ghost：`不支持`
- `自定义域名`
  - QuillStack：`支持`
  - WordPress：`支持`
  - Notion：`partial`
  - Medium：`不支持`
  - Ghost：`支持`
- `无广告`
  - QuillStack：`支持`
  - WordPress：`partial`
  - Notion：`支持`
  - Medium：`不支持`
  - Ghost：`支持`
- `Markdown 支持`
  - QuillStack：`支持`
  - WordPress：`partial`
  - Notion：`支持`
  - Medium：`支持`
  - Ghost：`支持`
- `代码高亮`
  - QuillStack：`支持`
  - WordPress：`plugin`
  - Notion：`支持`
  - Medium：`支持`
  - Ghost：`支持`
- `数学公式`
  - QuillStack：`支持`
  - WordPress：`plugin`
  - Notion：`支持`
  - Medium：`不支持`
  - Ghost：`支持`
- `SEO 优化`
  - QuillStack：`支持`
  - WordPress：`plugin`
  - Notion：`partial`
  - Medium：`支持`
  - Ghost：`支持`
- `评论系统`
  - QuillStack：`支持`
  - WordPress：`支持`
  - Notion：`不支持`
  - Medium：`支持`
  - Ghost：`支持`
- `快速部署`
  - QuillStack：`支持`
  - WordPress：`不支持`
  - Notion：`支持`
  - Medium：`支持`
  - Ghost：`不支持`
- `版本控制`
  - QuillStack：`支持`
  - WordPress：`不支持`
  - Notion：`partial`
  - Medium：`不支持`
  - Ghost：`不支持`
- `无需数据库`
  - QuillStack：`支持`
  - WordPress：`不支持`
  - Notion：`支持`
  - Medium：`支持`
  - Ghost：`不支持`
- `静态导出`
  - QuillStack：`支持`
  - WordPress：`不支持`
  - Notion：`不支持`
  - Medium：`不支持`
  - Ghost：`不支持`

图例：

- `支持`
- `不支持`
- `部分支持/需插件`

### 10. Stats

GitHub 横幅按钮：

- 简体中文：`在 GitHub 上查看`
- English：`View on GitHub`
- 繁體中文：`在 GitHub 上查看`

统计卡片最终显示文字：

- 简体中文
  - `1.2k+` / `GitHub Stars`
  - `180` / `Forks`
  - `5.0k+` / `用户`
  - `15k+` / `下载量`
- English
  - `1.2k+` / `GitHub Stars`
  - `180` / `Forks`
  - `5.0k+` / `Users`
  - `15k+` / `Downloads`
- 繁體中文
  - `1.2k+` / `GitHub Stars`
  - `180` / `Forks`
  - `5.0k+` / `用戶`
  - `15k+` / `下載量`

### 11. Testimonials

标题区：

- 简体中文
  - 标题：`用户好评`
  - 副标题：`听听他们怎么说`
- English
  - 标题：`User Testimonials`
  - 副标题：`See what they say`
- 繁體中文
  - 标题：`用戶好評`
  - 副标题：`聽聽他們怎麼說`

评价内容：

- 简体中文
  - `李明` / `独立开发者`
    - `QuillStack 让我的技术博客搭建变得异常简单。几分钟就搞定了，而且主题非常好看！`
    - 头像 URL：`https://placehold.co/100x100/fed7aa/f97316?text=Li`
  - `Sarah Chen` / `产品经理`
    - `作为一个不懂技术的人，我也能轻松搭建自己的博客。文档清晰，配置简单，太棒了！`
    - 头像 URL：`https://placehold.co/100x100/fff7ed/f97316?text=SC`
  - `张伟` / `前端工程师`
    - `代码质量很高，扩展性也很好。我已经基于它定制了自己的主题，非常满意。`
    - 头像 URL：`https://placehold.co/100x100/f97316/ffffff?text=Zhang`
  - `Emma Wang` / `设计师`
    - `设计非常精致，细节处理得很到位。终于找到一个既有颜值又有实力的博客工具了。`
    - 头像 URL：`https://placehold.co/100x100/fdbA74/f97316?text=EW`
  - `王强` / `全栈开发者`
    - `部署到 Vercel 只需要几秒钟，而且性能优化做得非常好，Lighthouse 分数几乎满分。`
    - 头像 URL：`https://placehold.co/100x100/ea580c/ffffff?text=Wang`
  - `刘芳` / `内容创作者`
    - `Markdown 写作体验一流，而且自动生成目录和 SEO 优化，让我可以专注于内容创作。`
    - 头像 URL：`https://placehold.co/100x100/c2410c/ffffff?text=Liu`
- English
  - `Alex Johnson` / `Indie Developer`
    - `QuillStack made building my tech blog incredibly easy. Set it up in minutes and the themes look amazing!`
    - 头像 URL：`https://placehold.co/100x100/fed7aa/f97316?text=AJ`
  - `Sarah Chen` / `Product Manager`
    - `As someone non-technical, I could easily set up my own blog. Clear documentation and simple configuration - love it!`
    - 头像 URL：`https://placehold.co/100x100/fff7ed/f97316?text=SC`
  - `Michael Zhang` / `Frontend Engineer`
    - `High code quality and great extensibility. I've already customized my own theme based on it - very satisfied!`
    - 头像 URL：`https://placehold.co/100x100/f97316/ffffff?text=MZ`
  - `Emma Wang` / `Designer`
    - `The design is exquisite with attention to detail. Finally found a blogging tool that's both beautiful and powerful!`
    - 头像 URL：`https://placehold.co/100x100/fdbA74/f97316?text=EW`
  - `David Wang` / `Full Stack Developer`
    - `Deploying to Vercel takes just seconds, and the performance optimization is excellent - nearly perfect Lighthouse scores!`
    - 头像 URL：`https://placehold.co/100x100/ea580c/ffffff?text=DW`
  - `Lisa Liu` / `Content Creator`
    - `Top-notch Markdown writing experience with automatic TOC and SEO optimization - lets me focus on creating content!`
    - 头像 URL：`https://placehold.co/100x100/c2410c/ffffff?text=LL`
- 繁體中文
  - `李明` / `獨立開發者`
    - `QuillStack 讓我的技術部落格搭建變得異常簡單。幾分鐘就搞定了，而且主題非常好看！`
    - 头像 URL：`https://placehold.co/100x100/fed7aa/f97316?text=Li`
  - `Sarah Chen` / `產品經理`
    - `作為一個不懂技術的人，我也能輕鬆搭建自己的部落格。文件清晰，配置簡單，太棒了！`
    - 头像 URL：`https://placehold.co/100x100/fff7ed/f97316?text=SC`
  - `張偉` / `前端工程師`
    - `程式碼品質很高，擴展性也很好。我已經基於它定制了自己的主題，非常滿意。`
    - 头像 URL：`https://placehold.co/100x100/f97316/ffffff?text=Zhang`
  - `Emma Wang` / `設計師`
    - `設計非常精緻，細節處理得很到位。終於找到一個既有顏值又有實力的部落格工具了。`
    - 头像 URL：`https://placehold.co/100x100/fdbA74/f97316?text=EW`
  - `王強` / `全端開發者`
    - `部署到 Vercel 只需要幾秒鐘，而且效能優化做得非常好，Lighthouse 分數幾乎滿分。`
    - 头像 URL：`https://placehold.co/100x100/ea580c/ffffff?text=Wang`
  - `劉芳` / `內容創作者`
    - `Markdown 寫作體驗一流，而且自動生成目錄和 SEO 優化，讓我可以專注於內容創作。`
    - 头像 URL：`https://placehold.co/100x100/c2410c/ffffff?text=Liu`

底部 CTA：

- 简体中文
  - 提示语：`加入数千名用户的行列，用 QuillStack 创建属于你的优雅博客`
  - 按钮：`免费开始使用`
- English
  - 提示语：`Join thousands of users and create your elegant blog with QuillStack`
  - 按钮：`Start for Free`
- 繁體中文
  - 提示语：`加入數千名用戶的行列，用 QuillStack 創建屬於你的優雅部落格`
  - 按钮：`免費開始使用`

### 12. TechStack

标题区实际渲染结果：

- 简体中文：`现代技术栈，性能保证`
- English：`Modern Tech Stack, Performance Guaranteed，性能保证`
- 繁體中文：`現代技術棧，性能保證`

副标题：

- 简体中文：`基于业界领先技术构建，为你的博客保驾护航`
- English：`Built on industry-leading technology to power your blog`
- 繁體中文：`基於業界領先技術構建，為你的部落格保駕護航`

技术栈名称：

- `Next.js`
- `React`
- `TypeScript`
- `Tailwind`
- `Markdown`
- `Radix UI`
- `Framer Motion`

### 13. CTA

多语言文案：

- 简体中文
  - 标题：`准备好开始了吗？`
  - 副标题：`加入数千名用户的行列，用 QuillStack 创建属于你的优雅博客`
  - 主按钮：`免费开始使用`
  - 次按钮：`了解更多`
  - 信任标签：`完全免费`、`开源代码`、`无需信用卡`
- English
  - 标题：`Ready to Get Started?`
  - 副标题：`Join thousands of users and create your elegant blog with QuillStack`
  - 主按钮：`Start for Free`
  - 次按钮：`Learn More`
  - 信任标签：`Free Forever`、`Open Source`、`No Credit Card`
- 繁體中文
  - 标题：`準備好開始了嗎？`
  - 副标题：`加入數千名用戶的行列，用 QuillStack 創建屬於你的優雅部落格`
  - 主按钮：`免費開始使用`
  - 次按钮：`了解更多`
  - 信任标签：`完全免費`、`開源代碼`、`無需信用卡`

## `/about` 关于页

页面区块顺序如下：

1. Story
2. FeatureList
3. FileTree
4. Community

### 1. Story

标题区：

- 标题：`QuillStack`
- 简体中文副标题：`让写作回归纯粹`
- English 副标题：`Make Writing Pure Again`
- 繁體中文副标题：`讓寫作回歸純粹`

正文：

- 简体中文
  - `QuillStack 诞生于一个简单的信念：每个人都应该拥有一个属于自己的、优雅的写作空间。我们不希望技术门槛成为表达的障碍，所以我们将一切都简化到极致——配置一个文件，写下你的想法，剩下的交给我们。`
  - `我们相信，好的工具应该像空气一样自然存在，让你专注于内容本身，而不是被繁琐的配置所困扰。`
- English
  - `QuillStack was born from a simple belief: everyone deserves their own elegant writing space. We don't want technical barriers to hinder expression, so we've simplified everything to the extreme—configure one file, write down your thoughts, and leave the rest to us.`
  - `We believe that good tools should exist as naturally as air, allowing you to focus on the content itself rather than being troubled by complicated configurations.`
- 繁體中文
  - `QuillStack 誕生於一個簡單的信念：每個人都應該擁有一個屬於自己的、優雅的寫作空間。我們不希望技術門檻成為表達的障礙，所以我們將一切都簡化到極致——配置一個文件，寫下你的想法，剩下的交給我們。`
  - `我們相信，好的工具應該像空氣一樣自然存在，讓你專注於內容本身，而不是被繁瑣的配置所困擾。`

占位卡片中的文字：

- `QuillStack`
- `600 × 400`

### 2. FeatureList

标题：

- 简体中文：`功能特性`
- English：`Features`
- 繁體中文：`功能特性`

功能列表：

- 简体中文
  - `Markdown 写作`：`支持完整 Markdown 语法`
  - `分类与标签`：`灵活组织你的文章`
  - `响应式设计`：`在任何设备上完美阅读`
  - `SEO 优化`：`自动 sitemap，社交卡片生成`
  - `OG 图片生成`：`自动生成文章分享预览图`
  - `极速性能`：`Lighthouse 满分优化`
  - `主题自定义`：`JSON 配置，即时生效`
- English
  - `Markdown Writing`：`Full Markdown syntax support`
  - `Categories & Tags`：`Organize your articles flexibly`
  - `Responsive Design`：`Perfect reading on any device`
  - `SEO Optimized`：`Auto sitemap, social card generation`
  - `OG Image Generation`：`Auto-generate article share preview`
  - `Lightning Fast`：`Lighthouse perfect score optimization`
  - `Theme Customization`：`JSON config, instant effect`
- 繁體中文
  - `Markdown 寫作`：`支援完整 Markdown 語法`
  - `分類與標籤`：`靈活組織你的文章`
  - `響應式設計`：`在任何設備上完美閱讀`
  - `SEO 優化`：`自動 sitemap，社交卡片生成`
  - `OG 圖片生成`：`自動生成文章分享預覽圖`
  - `極速性能`：`Lighthouse 滿分優化`
  - `主題自定義`：`JSON 配置，即時生效`

### 3. FileTree

标题与说明：

- 简体中文
  - 标题：`项目结构`
  - 描述：`简洁清晰的目录结构，易于上手`
  - 底部说明：`高亮项是你的主要工作空间`
- English
  - 标题：`Project Structure`
  - 描述：`Simple and clear directory structure, easy to get started`
  - 底部说明：`Highlighted items are your main workspace`
- 繁體中文
  - 标题：`專案結構`
  - 描述：`簡潔清晰的目錄結構，易於上手`
  - 底部说明：`高亮項目是你的主要工作空間`

文件树内容在三种语言下相同：

```text
quillstack/
  content/
    settings.json
    sitedoc.json
    doc/
      hello-world.md
      ...
  src/
  public/
  package.json
```

其中高亮项为：

- `content/`
- `settings.json`

### 4. Community

标题与副标题：

- 简体中文
  - 标题：`加入社区`
  - 副标题：`加入我们，一起建设`
- English
  - 标题：`Join Community`
  - 副标题：`Join us to build together`
- 繁體中文
  - 标题：`加入社區`
  - 副标题：`加入我們，一起建設`

3 张链接卡片：

- 简体中文
  - `GitHub` / `⭐ Star`
  - `问题反馈` / `🐛 Issues`
  - `功能建议` / `💡 Discussions`
- English
  - `GitHub` / `⭐ Star`
  - `Feedback` / `🐛 Issues`
  - `Suggestions` / `💡 Discussions`
- 繁體中文
  - `GitHub` / `⭐ Star`
  - `問題反饋` / `🐛 Issues`
  - `功能建議` / `💡 Discussions`

底部文案：

- 简体中文：`由社区用爱心制作`
- English：`Made with love by the community`
- 繁體中文：`由社區用愛心製作`

## `/deploy` 部署页

页面内容顺序如下：

1. 页面标题
2. 步骤条
3. 步骤内容

说明：

- 步骤条支持点击切换 `1 / 2 / 3`。
- 当前源码里步骤内容部分使用了硬编码判断，因此三种语言下实际看到的步骤正文都是中文。
- `PlatformCards` 和 `FAQ` 虽然被 `import` 了，但当前页面并没有实际渲染出来。

### 1. 页面标题

- 简体中文
  - 标题：`快速部署`
  - 副标题：`三步开启你的博客之旅`
- English
  - 标题：`Quick Deploy`
  - 副标题：`Start your blog journey in three steps`
- 繁體中文
  - 标题：`快速部署`
  - 副标题：`三步開啟你的部落格之旅`

### 2. 步骤条

步骤标签：

- 简体中文：`环境`、`配置`、`部署`
- English：`Environment`、`Config`、`Deploy`
- 繁體中文：`環境`、`配置`、`部署`

### 3. 步骤内容

#### Step 1（页面默认打开时显示）

所有语言下实际显示相同中文：

- 标题：`步骤 1 / 3: 准备环境`
- 提示：`确保你已安装：`
- 列表：
  - `Node.js 18+`
  - `Git`
  - `一个 GitHub 账号`
- 提示：`快速开始：`
- 终端标签：`终端`
- 代码块：

```bash
# 克隆模板仓库
git clone https://github.com/xxx/quillstack
cd quillstack
```

- 按钮：`下一步`

#### Step 2（点击下一步后显示）

所有语言下实际显示相同中文：

- 标题：`步骤 2: 配置`
- 提示：`配置内容即将上线`
- 按钮：`上一步`
- 按钮：`下一步`

#### Step 3（继续点击下一步后显示）

所有语言下实际显示相同中文：

- 标题：`步骤 3: 部署`
- 提示：`部署内容即将上线`
- 按钮：`上一步`
- 按钮：`重新开始`

## 当前项目中“存在但未实际出现在页面上”的文案

以下内容写在源码组件里，但当前 3 个页面不会渲染出来：

- `src/components/deploy/PlatformCard.tsx`
  - 平台：`Vercel`、`Netlify`、`Cloudflare Pages`
  - 推荐标签：`推荐`
  - 特性：`一键部署`、`自动 HTTPS`、`全球 CDN`、`自动构建`、`表单功能`、`持续部署`、`边缘网络`、`极速访问`
- `src/components/deploy/FAQ.tsx`
  - 问题：`如何修改主题颜色？`
  - 问题：`如何添加自定义域名？`
  - 问题：`文章图片应该放在哪里？`
  - 问题：`如何备份我的文章？`
