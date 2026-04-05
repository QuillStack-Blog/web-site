export type Language = 'zh' | 'en' | 'tw'

export interface Translations {
  [key: string]: {
    zh: string
    en: string
    tw: string
  }
}

export const translations: Translations = {
  // TopBar
  'theme.light': { zh: '浅色', en: 'Light', tw: '淺色' },
  'theme.dark': { zh: '深色', en: 'Dark', tw: '深色' },
  'theme.system': { zh: '系统', en: 'System', tw: '系統' },
  'theme.current.system': { zh: '当前主题: 跟随系统', en: 'Current Theme: System', tw: '當前主題: 跟隨系統' },
  'theme.current.light': { zh: '当前主题: 浅色', en: 'Current Theme: Light', tw: '當前主題: 淺色' },
  'theme.current.dark': { zh: '当前主题: 深色', en: 'Current Theme: Dark', tw: '當前主題: 深色' },
  'language': { zh: '语言', en: 'Language', tw: '語言' },
  'lang.zh': { zh: '简体中文', en: '简体中文', tw: '簡體中文' },
  'lang.en': { zh: 'English', en: 'English', tw: 'English' },
  'lang.tw': { zh: '繁體中文', en: '繁體中文', tw: '繁體中文' },

  // Navigation
  'nav.home': { zh: '首页', en: 'Home', tw: '首頁' },
  'nav.deploy': { zh: '部署', en: 'Deploy', tw: '部署' },
  'nav.about': { zh: '关于', en: 'About', tw: '關於' },

  // Hero
  'hero.slogan': { zh: '更轻 · 更快 · 更美', en: 'Lighter · Faster · More Beautiful', tw: '更輕 · 更快 · 更美' },
  'hero.subtitle': { zh: '几分钟搭建，一辈子受益的个人博客', en: 'Set up in minutes, benefit for a lifetime', tw: '幾分鐘搭建，一輩子受益的個人部落格' },
  'hero.browser': { zh: 'quillstack-demo.pages.dev', en: 'quillstack-demo.pages.dev', tw: 'quillstack-demo.pages.dev' },

  // ScreenshotGallery
  'gallery.badge': { zh: '截图预览', en: 'Screenshots', tw: '截圖預覽' },
  'gallery.title': { zh: '精美的预设主题 开箱即用', en: 'Exquisite Default Theme Out of the Box', tw: '精美的預設主題 開箱即用' },
  'gallery.subtitle': { zh: '精心设计的预设主题，无需配置，开箱即用', en: 'Carefully designed default theme, no configuration needed, ready to use immediately', tw: '精心設計的預設主題，無需配置，開箱即用' },
  'gallery.home': { zh: '博客首页', en: 'Blog Home', tw: '部落格首頁' },
  'gallery.home.desc': { zh: '简洁优雅的文章列表', en: 'Clean and elegant article list', tw: '簡潔優雅的文章列表' },
  'gallery.article': { zh: '文章详情', en: 'Article Detail', tw: '文章詳情' },
  'gallery.article.desc': { zh: '沉浸式的阅读体验', en: 'Immersive reading experience', tw: '沉浸式的閱讀體驗' },
  'gallery.category': { zh: '分类浏览', en: 'Category Browse', tw: '分類瀏覽' },
  'gallery.category.desc': { zh: '轻松管理和发现内容', en: 'Easily manage and discover content', tw: '輕鬆管理和發現內容' },
  'gallery.friends': { zh: '友情链接页面', en: 'Friends Link Page', tw: '友情連結頁面' },
  'gallery.friends.desc': { zh: '好朋友就要在一起', en: 'Good friends stay together', tw: '好朋友就要在一起' },
  'gallery.dark': { zh: '深色模式', en: 'Dark Mode', tw: '深色模式' },
  'gallery.dark.desc': { zh: '护眼夜间阅读', en: 'Eye-friendly night reading', tw: '護眼夜間閱讀' },

  // Features
  'features.title': { zh: '为什么选择 QuillStack？', en: 'Why QuillStack', tw: '為什麼選擇 QuillStack？' },
  'features.subtitle': { zh: '简洁而不简单，为写作而生的博客构建工具', en: 'Simple yet powerful, a blog builder born for writing', tw: '簡潔而不簡單，為寫作而生的部落格構建工具' },
  'features.fast': { zh: '极速构建', en: 'Fast Build', tw: '極速構建' },
  'features.fast.desc': { zh: 'Next.js 驱动，秒级构建，瞬间部署', en: 'Powered by Next.js, instant build and deployment', tw: 'Next.js 驅動，秒級構建，瞬間部署' },
  'features.theme': { zh: '精美主题', en: 'Beautiful Themes', tw: '精美主題' },
  'features.theme.desc': { zh: '精心设计的默认主题，开箱即用', en: 'Carefully designed default theme, ready to use', tw: '精心設計的預設主題，開箱即用' },
  'features.light': { zh: '轻量简洁', en: 'Lightweight', tw: '輕量簡潔' },
  'features.light.desc': { zh: '无冗余依赖，专注写作本身', en: 'No redundant dependencies, focus on writing', tw: '無冗餘依賴，專注寫作本身' },
  'features.config': { zh: '极简配置', en: 'Minimal Config', tw: '極簡配置' },
  'features.config.desc': { zh: '一个 JSON 搞定全部，零学习成本', en: 'One JSON file handles everything, zero learning curve', tw: '一個 JSON 搞定全部，零學習成本' },

  // UseCases
  'usecases.title': { zh: '多种用途，无限可能', en: '多种用途，无限可能', tw: '多种用途，无限可能' },
  'usecases.subtitle': { zh: '无论是技术博客、生活随笔还是作品集，QuillStack 都能完美胜任', en: '无论是技术博客、生活随笔还是作品集，QuillStack 都能完美胜任', tw: '无论是技术博客、生活随笔还是作品集，QuillStack 都能完美胜任' },
  'usecases.tech': { zh: '技术博客', en: '技术博客', tw: '技术博客' },
  'usecases.tech.desc': { zh: '分享编程心得、技术教程和项目经验', en: '分享编程心得、技术教程和项目经验', tw: '分享编程心得、技术教程和项目经验' },
  'usecases.life': { zh: '生活随笔', en: '生活随笔', tw: '生活随笔' },
  'usecases.life.desc': { zh: '记录日常点滴、读书笔记和旅行见闻', en: '记录日常点滴、读书笔记和旅行见闻', tw: '记录日常点滴、读书笔记和旅行见闻' },
  'usecases.portfolio': { zh: '作品集', en: '作品集', tw: '作品集' },
  'usecases.portfolio.desc': { zh: '展示设计作品、项目案例和专业成就', en: '展示设计作品、项目案例和专业成就', tw: '展示设计作品、项目案例和专业成就' },
  'usecases.docs': { zh: '开源文档', en: '开源文档', tw: '开源文档' },
  'usecases.docs.desc': { zh: '为开源项目创建精美的文档网站', en: '为开源项目创建精美的文档网站', tw: '为开源项目创建精美的文档网站' },
  'usecases.photo': { zh: '摄影集', en: '摄影集', tw: '摄影集' },
  'usecases.photo.desc': { zh: '展示摄影作品，分享拍摄技巧和后期心得', en: '展示摄影作品，分享拍摄技巧和后期心得', tw: '展示摄影作品，分享拍摄技巧和后期心得' },
  'usecases.creative': { zh: '创作日志', en: '创作日志', tw: '创作日志' },
  'usecases.creative.desc': { zh: '音乐创作、艺术创作的过程记录', en: '音乐创作、艺术创作的过程记录', tw: '音乐创作、艺术创作的过程记录' },

  // ThemePreview
  'theme.preview.title': { zh: '多种主题，随心切换', en: '多种主题，随心切换', tw: '多种主题，随心切换' },
  'theme.preview.subtitle': { zh: '内置多款精美主题，一键切换，还支持自定义配色', en: '内置多款精美主题，一键切换，还支持自定义配色', tw: '内置多款精美主题，一键切换，还支持自定义配色' },
  'theme.default': { zh: '默认橙', en: '默认橙', tw: '默认橙' },
  'theme.default.desc': { zh: '温暖活力的橙色主题', en: '温暖活力的橙色主题', tw: '温暖活力的橙色主题' },
  'theme.blue': { zh: '深海蓝', en: '深海蓝', tw: '深海蓝' },
  'theme.blue.desc': { zh: '沉稳专业的蓝色主题', en: '沉稳专业的蓝色主题', tw: '沉稳专业的蓝色主题' },
  'theme.green': { zh: '森林绿', en: '森林绿', tw: '森林绿' },
  'theme.green.desc': { zh: '自然清新的绿色主题', en: '自然清新的绿色主题', tw: '自然清新的绿色主题' },
  'theme.black': { zh: '深邃黑', en: '深邃黑', tw: '深邃黑' },
  'theme.black.desc': { zh: '现代感十足的深色主题', en: '现代感十足的深色主题', tw: '现代感十足的深色主题' },
  'theme.purple': { zh: '薰衣草', en: '薰衣草', tw: '薰衣草' },
  'theme.purple.desc': { zh: '优雅浪漫的紫色主题', en: '优雅浪漫的紫色主题', tw: '优雅浪漫的紫色主题' },
  'theme.pink': { zh: '玫瑰粉', en: '玫瑰粉', tw: '玫瑰粉' },
  'theme.pink.desc': { zh: '甜美温柔的粉色主题', en: '甜美温柔的粉色主题', tw: '甜美温柔的粉色主题' },
  'theme.features.title': { zh: '主题特性', en: '主题特性', tw: '主题特性' },

  // ResponsiveShowcase
  'responsive.title': { zh: '全端适配，处处精彩', en: '全端适配，处处精彩', tw: '全端适配，处处精彩' },
  'responsive.subtitle': { zh: '无论使用什么设备，都能获得最佳的阅读体验', en: '无论使用什么设备，都能获得最佳的阅读体验', tw: '无论使用什么设备，都能获得最佳的阅读体验' },
  'responsive.desktop': { zh: '桌面端', en: '桌面端', tw: '桌面端' },
  'responsive.desktop.desc': { zh: '大屏幕沉浸式阅读', en: '大屏幕沉浸式阅读', tw: '大屏幕沉浸式阅读' },
  'responsive.tablet': { zh: '平板端', en: '平板端', tw: '平板端' },
  'responsive.tablet.desc': { zh: '舒适的中间尺寸体验', en: '舒适的中间尺寸体验', tw: '舒适的中间尺寸体验' },
  'responsive.mobile': { zh: '手机端', en: '手机端', tw: '手机端' },
  'responsive.mobile.desc': { zh: '随时随地，优雅阅读', en: '随时随地，优雅阅读', tw: '随时随地，优雅阅读' },
  'responsive.pwa': { zh: 'PWA 支持', en: 'PWA 支持', tw: 'PWA 支持' },
  'responsive.pwa.desc': { zh: '支持渐进式 Web 应用，可以像原生应用一样安装到主屏幕，离线也能阅读。', en: '支持渐进式 Web 应用，可以像原生应用一样安装到主屏幕，离线也能阅读。', tw: '支持渐进式 Web 应用，可以像原生应用一样安装到主屏幕，离线也能阅读。' },

  // VideoShowcase
  'video.title': { zh: '视频教程', en: '视频教程', tw: '视频教程' },
  'video.subtitle': { zh: '跟着视频一步步学习，快速掌握 QuillStack', en: '跟着视频一步步学习，快速掌握 QuillStack', tw: '跟着视频一步步学习，快速掌握 QuillStack' },
  'video.playlist': { zh: '播放列表', en: '播放列表', tw: '播放列表' },
  'video.loading': { zh: '视频加载中...', en: '视频加载中...', tw: '视频加载中...' },

  // ConfigPreview
  'config.title': { zh: '一个配置文件，搞定一切', en: '一个配置文件，搞定一切', tw: '一个配置文件，搞定一切' },
  'config.subtitle': { zh: '无需复杂设置，一个 JSON 文件即可配置你的整个博客', en: '无需复杂设置，一个 JSON 文件即可配置你的整个博客', tw: '无需复杂设置，一个 JSON 文件即可配置你的整个博客' },
  'config.preview': { zh: '预览效果', en: '预览效果', tw: '预览效果' },
  'config.live': { zh: '实时预览', en: '实时预览', tw: '实时预览' },
  'config.highlight': { zh: '代码块高亮', en: '代码块高亮', tw: '代码块高亮' },
  'config.docs': { zh: '查看完整配置文档', en: '查看完整配置文档', tw: '查看完整配置文档' },

  // Comparison
  'comparison.title': { zh: '为什么选择 QuillStack？', en: '为什么选择 QuillStack？', tw: '为什么选择 QuillStack？' },
  'comparison.subtitle': { zh: '对比主流博客平台，QuillStack 在简洁性和功能性之间找到了完美平衡', en: '对比主流博客平台，QuillStack 在简洁性和功能性之间找到了完美平衡', tw: '对比主流博客平台，QuillStack 在简洁性和功能性之间找到了完美平衡' },

  // Stats
  'stats.github': { zh: '在 GitHub 上查看', en: 'View on GitHub', tw: '在 GitHub 上查看' },
  'stats.stars': { zh: 'GitHub Stars', en: 'GitHub Stars', tw: 'GitHub Stars' },
  'stats.forks': { zh: 'Forks', en: 'Forks', tw: 'Forks' },
  'stats.users': { zh: '用户', en: 'Users', tw: '用戶' },
  'stats.downloads': { zh: '下载量', en: 'Downloads', tw: '下載量' },

  // Testimonials
  'testimonials.title': { zh: '用户好评', en: 'User Testimonials', tw: '用戶好評' },
  'testimonials.subtitle': { zh: '听听他们怎么说', en: 'See what they say', tw: '聽聽他們怎麼說' },
  'testimonials.cta': { zh: '加入数千名用户的行列，用 QuillStack 创建属于你的优雅博客', en: 'Join thousands of users and create your elegant blog with QuillStack', tw: '加入數千名用戶的行列，用 QuillStack 創建屬於你的優雅部落格' },
  'testimonials.cta.btn': { zh: '免费开始使用', en: 'Start for Free', tw: '免費開始使用' },

  // TechStack
  'techstack.title': { zh: '现代技术栈，性能保证', en: 'Modern Tech Stack, Performance Guaranteed', tw: '現代技術棧，性能保證' },
  'techstack.subtitle': { zh: '基于业界领先技术构建，为你的博客保驾护航', en: 'Built on industry-leading technology to power your blog', tw: '基於業界領先技術構建，為你的部落格保駕護航' },

  // CTA
  'cta.title': { zh: '准备好开始了吗？', en: 'Ready to Get Started?', tw: '準備好開始了嗎？' },
  'cta.subtitle': { zh: '加入数千名用户的行列，用 QuillStack 创建属于你的优雅博客', en: 'Join thousands of users and create your elegant blog with QuillStack', tw: '加入數千名用戶的行列，用 QuillStack 創建屬於你的優雅部落格' },
  'cta.primary': { zh: '免费开始使用', en: 'Start for Free', tw: '免費開始使用' },
  'cta.secondary': { zh: '了解更多', en: 'Learn More', tw: '了解更多' },
  'cta.free': { zh: '完全免费', en: 'Free Forever', tw: '完全免費' },
  'cta.opensource': { zh: '开源代码', en: 'Open Source', tw: '開源代碼' },
  'cta.nocard': { zh: '无需信用卡', en: 'No Credit Card', tw: '無需信用卡' },

  // About Page
  'about.title': { zh: 'QuillStack', en: 'QuillStack', tw: 'QuillStack' },
  'about.subtitle': { zh: '让写作回归纯粹', en: 'Make Writing Pure Again', tw: '讓寫作回歸純粹' },
  'about.story1': { zh: 'QuillStack 诞生于一个简单的信念：每个人都应该拥有一个属于自己的、优雅的写作空间。我们不希望技术门槛成为表达的障碍，所以我们将一切都简化到极致——配置一个文件，写下你的想法，剩下的交给我们。', en: 'QuillStack was born from a simple belief: everyone deserves their own elegant writing space. We don\'t want technical barriers to hinder expression, so we\'ve simplified everything to the extreme—configure one file, write down your thoughts, and leave the rest to us.', tw: 'QuillStack 誕生於一個簡單的信念：每個人都應該擁有一個屬於自己的、優雅的寫作空間。我們不希望技術門檻成為表達的障礙，所以我們將一切都簡化到極致——配置一個文件，寫下你的想法，剩下的交給我們。' },
  'about.story2': { zh: '我们相信，好的工具应该像空气一样自然存在，让你专注于内容本身，而不是被繁琐的配置所困扰。', en: 'We believe that good tools should exist as naturally as air, allowing you to focus on the content itself rather than being troubled by complicated configurations.', tw: '我們相信，好的工具應該像空氣一樣自然存在，讓你專注於內容本身，而不是被繁瑣的配置所困擾。' },
  'about.features': { zh: '功能特性', en: 'Features', tw: '功能特性' },
  'about.community': { zh: '加入社区', en: 'Join Community', tw: '加入社區' },
  'about.community.subtitle': { zh: '加入我们，一起建设', en: 'Join us to build together', tw: '加入我們，一起建設' },
  'about.community.made': { zh: '由社区用爱心制作', en: 'Made with love by the community', tw: '由社區用愛心製作' },

  // Deploy Page
  'deploy.title': { zh: '快速部署', en: 'Quick Deploy', tw: '快速部署' },
  'deploy.subtitle': { zh: '三步开启你的博客之旅', en: 'Start your blog journey in three steps', tw: '三步開啟你的部落格之旅' },
  'deploy.step1': { zh: '环境', en: 'Environment', tw: '環境' },
  'deploy.step2': { zh: '配置', en: 'Config', tw: '配置' },
  'deploy.step3': { zh: '部署', en: 'Deploy', tw: '部署' },
  'deploy.step1.title': { zh: '步骤 1 / 3: 准备环境', en: '步骤 1 / 3: 准备环境', tw: '步骤 1 / 3: 准备环境' },
  'deploy.step1.hint': { zh: '确保你已安装：', en: '确保你已安装：', tw: '确保你已安装：' },
  'deploy.step1.quick': { zh: '快速开始：', en: '快速开始：', tw: '快速开始：' },
  'deploy.next': { zh: '下一步', en: '下一步', tw: '下一步' },
  'deploy.prev': { zh: '上一步', en: '上一步', tw: '上一步' },
  'deploy.restart': { zh: '重新开始', en: '重新开始', tw: '重新开始' },
  'deploy.step2.title': { zh: '步骤 2: 配置', en: '步骤 2: 配置', tw: '步骤 2: 配置' },
  'deploy.step2.hint': { zh: '配置内容即将上线', en: '配置内容即将上线', tw: '配置内容即将上线' },
  'deploy.step3.title': { zh: '步骤 3: 部署', en: '步骤 3: 部署', tw: '步骤 3: 部署' },
  'deploy.step3.hint': { zh: '部署内容即将上线', en: '部署内容即将上线', tw: '部署内容即将上线' },
}

export function t(key: string, lang: Language = 'zh'): string {
  const translation = translations[key]
  if (!translation) return key
  return translation[lang] || translation.zh
}
