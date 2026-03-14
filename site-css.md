## 1. 整体风格定位

**核心关键词**：`技术人文主义` `治愈系极客` `玻璃拟态` `编辑美学`

- **氛围**：深色背景 + 暖色极光渐变（呼应 QuillStack 的橙色主色调 #f97316）
- **质感**：毛玻璃（Glassmorphism）+ 微光折射（Aurora Gradient）
- **情绪**：专业但不冰冷，像深夜书房里的一盏暖灯

---

## 2. 色彩系统（Dark Mode First）

```css
/* 核心背景色 - 深空而非纯黑，减少眼部压力 */
--bg-primary: #0B0F19;        /* 主背景：深蓝黑 */
--bg-secondary: #111827;      /* 卡片背景：石墨灰 */
--bg-tertiary: #1f2937;       /* 悬浮层： slate 800 */
--bg-glass: rgba(17, 24, 39, 0.7);  /* 玻璃基底 */

/* 品牌色系 - 暖橙渐变（QuillStack 基因）*/
--brand-primary: #f97316;     /* 活力橙 */
--brand-secondary: #fbbf24;   /* 琥珀金 */
--brand-gradient: linear-gradient(135deg, #f97316 0%, #fbbf24 100%);

/* 极光背景色（氛围渲染）*/
--aurora-green: rgba(16, 185, 129, 0.15);   /* 透明翡翠 */
--aurora-amber: rgba(251, 191, 36, 0.1);    /* 透明琥珀 */
--aurora-orange: rgba(249, 115, 22, 0.08);  /* 透明橙 */

/* 文字层级 */
--text-primary: #f9fafb;      /* 标题：纯白 */
--text-secondary: #d1d5db;    /* 正文：浅灰 300 */
--text-tertiary: #9ca3af;     /* 辅助：灰 400 */
--text-brand: #fb923c;        /* 高亮：橙 400 */
```

---

## 3. 视觉元素规范

### 玻璃拟态（Glassmorphism）
- **导航栏**：`backdrop-filter: blur(20px) saturate(180%)`，背景 `rgba(11, 15, 25, 0.8)`
- **卡片悬浮态**：添加 `border: 1px solid rgba(255,255,255,0.1)` 增强边界感
- **浮动岛（Floating Island）**：如 site.md 所述，采用圆角药丸形状（`border-radius: 9999px`），内部微发光

### 极光背景效果（Hero 区域）
在 Hero 区域使用 **CSS 径向渐变**模拟雪球网站背景的柔和光晕：
```css
background: 
  radial-gradient(ellipse 80% 50% at 20% 40%, rgba(16,185,129,0.15), transparent),
  radial-gradient(ellipse 60% 40% at 80% 60%, rgba(249,115,22,0.1), transparent),
  #0B0F19;
```
- 避免使用真实图片，用 CSS 生成流动的光斑，性能更好且更具科技感

### 彩虹渐变边框（头像/徽章）
针对 Testimonials 区的用户头像：
```css
.avatar-ring {
  background: linear-gradient(45deg, #f97316, #fbbf24, #22c55e, #3b82f6);
  padding: 2px;
  border-radius: 50%;
}
```

---

## 4. 字体与排版（编辑美学）

**避免使用** Inter/Roboto 等"AI 感"字体，选择具有**书写气质**的组合：

| 用途 | 中文字体 | 英文字体 | 备选 |
|------|---------|---------|------|
| **标题/Hero** | 霞鹜文楷（LXGW WenKai）| Space Grotesk | 思源宋体 |
| **正文** | 思源黑体/系统字体 | Inter | - |
| **代码/配置** | JetBrains Mono | JetBrains Mono | Fira Code |

**排版尺度**：
- Hero 标题：使用 `font-weight: 700` + `letter-spacing: -0.02em`（紧凑现代感）
- 引用文字（Testimonials）：斜体 + 橙色左边框（`border-left: 3px solid var(--brand-primary)`）
- 配置预览块（ConfigPreview）：使用等宽字体，行号显示，深色背景 `#0d1117`

---

## 5. 页面区块设计建议（对应 site.md）

针对你文档中的 13 个区块，具体设计建议：

### Hero 区域
- **3D 浏览器地址栏**：使用玻璃态卡片，地址栏文字 `your-blog.com` 使用等宽字体，左侧添加 🔒 图标
- **Slogan 排版**："更轻 · 更快 · 更美" 使用渐变色文字（`background-clip: text`），从橙色到金色
- **背景**：添加缓慢的 **粒子动画**（类似雪花/羽毛飘落，呼应"Quill"羽毛笔意象）

### ScreenshotGallery（轮播）
- **卡片样式**：截图放在模拟浏览器窗口中（`border-radius: 12px`，顶部有红绿灯按钮）
- **悬浮效果**：鼠标悬停时图片轻微放大（`scale: 1.02`），同时其他卡片变暗（`opacity: 0.5`）
- **指示器**：使用渐变色圆点，而非纯色

### Features（特性网格）
- **图标容器**：使用 **玻璃态圆形背景**（`backdrop-blur`，半透明），而非实心色块
- **悬停动画**：卡片向上浮动 `translateY(-8px)`，同时底部出现橙色光晕（`box-shadow: 0 20px 40px -10px rgba(249,115,22,0.3)`）

### ThemePreview（主题预览）
- **实现方式**：使用 CSS 变量切换，展示六种主题时采用 **色块卡片**，而非真实预览
- **选中态**：彩虹渐变边框 + 内部白色光晕

### Comparison（对比表格）
- **QuillStack 列**：使用高亮背景（`rgba(249,115,22,0.1)`）+ 左边框（`border-left: 2px solid var(--brand-primary)`）
- **图标**：支持的用橙色 ✓（Lucide `CheckCircle2`），不支持的用灰色 ✕

### Stats（统计）
- **数字动效**：使用 **CountUp** 动画，数字滚动增长
- **背景**：玻璃态卡片，数字使用渐变色（橙到黄）

### CTA（底部行动召唤）
- **按钮**：主按钮使用 **彩虹渐变背景**，悬停时有光泽流动效果（`background-position` 动画）
- **信任标签**：使用圆角 pill 形状，半透明背景，白色图标

---

## 6. 动画与交互

**滚动触发动画**：
- 使用 `IntersectionObserver`，元素进入视口时执行 `fade-in-up`（透明度 0→1，Y轴位移 30px→0）
- 动画时长：`0.6s cubic-bezier(0.16, 1, 0.3, 1)`（类似苹果网站的缓动曲线）

**微交互**：
- **链接下划线**：Hover 时从左到右绘制橙色下划线（`scaleX(0)` → `scaleX(1)`，`transform-origin: left`）
- **按钮磁性效果**：按钮 Hover 时有轻微的光斑跟随鼠标（CSS `radial-gradient` 背景定位）
- **语言切换**：切换语言时文字有 **淡出-淡入** 过渡，避免生硬跳变

**3D 元素**：
- Hero 中的浏览器 mockup 添加轻微的 **3D 倾斜效果**（`perspective: 1000px`，跟随鼠标位置轻微旋转）

---

## 7. 响应式适配要点

**移动端**：
- **玻璃导航栏**：在移动端变为底部 **Floating Island**（悬浮岛），如 iOS 的灵动岛设计
- **截图轮播**：改为全屏卡片，支持手势滑动
- **对比表格**：改为垂直堆叠的卡片列表（横向表格在移动端体验差）

**深色模式一致性**：
- 所有页面强制深色模式（与雪球网站一致），不提供浅色切换（或仅作为彩蛋功能）

---

## 8. 技术实现建议

**关键技术**：
- **Tailwind CSS**：使用 `backdrop-blur-xl`、`bg-white/5` 实现玻璃态
- **Framer Motion**：处理页面滚动动画和组件手势交互
- **Next.js**：利用 Image 组件优化 ScreenshotGallery 的图片加载（placeholder="blur"）
- **CSS 变量**：将极光颜色定义为 CSS 变量，支持主题切换时的过渡动画

**性能注意**：
- 玻璃态效果（`backdrop-filter`）在移动端性能开销大，建议在移动端降级为半透明纯色背景
- 粒子动画使用 CSS 而非 Canvas，减少主线程占用