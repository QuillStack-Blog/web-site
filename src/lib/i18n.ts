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
  'hero.cta.primary': { zh: '开始使用', en: 'Get Started', tw: '開始使用' },
  'hero.cta.secondary': { zh: '了解更多', en: 'Learn More', tw: '了解更多' },

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
  'usecases.title': { zh: '多种用途，无限可能', en: 'Endless Possibilities', tw: '多種用途，無限可能' },
  'usecases.subtitle': { zh: '无论是技术博客、生活随笔还是作品集，QuillStack 都能完美胜任', en: 'Whether it\'s a tech blog, lifestyle notes, or portfolio, QuillStack handles it all perfectly', tw: '無論是技術部落格、生活隨筆還是作品集，QuillStack 都能完美勝任' },
  'usecases.tech': { zh: '技术博客', en: 'Tech Blog', tw: '技術部落格' },
  'usecases.tech.desc': { zh: '分享编程心得、技术教程和项目经验', en: 'Share programming insights, tech tutorials, and project experiences', tw: '分享程式設計心得、技術教程和專案經驗' },
  'usecases.life': { zh: '生活随笔', en: 'Lifestyle', tw: '生活隨筆' },
  'usecases.life.desc': { zh: '记录日常点滴、读书笔记和旅行见闻', en: 'Record daily moments, reading notes, and travel experiences', tw: '記錄日常點滴、讀書筆記和旅行見聞' },
  'usecases.portfolio': { zh: '作品集', en: 'Portfolio', tw: '作品集' },
  'usecases.portfolio.desc': { zh: '展示设计作品、项目案例和专业成就', en: 'Showcase design work, project cases, and professional achievements', tw: '展示設計作品、專案案例和專業成就' },
  'usecases.docs': { zh: '开源文档', en: 'Open Source Docs', tw: '開源文檔' },
  'usecases.docs.desc': { zh: '为开源项目创建精美的文档网站', en: 'Create beautiful documentation sites for open source projects', tw: '為開源專案建立精美的文檔網站' },
  'usecases.photo': { zh: '摄影集', en: 'Photography', tw: '攝影集' },
  'usecases.photo.desc': { zh: '展示摄影作品，分享拍摄技巧和后期心得', en: 'Showcase photography and share shooting tips and editing insights', tw: '展示攝影作品，分享拍攝技巧和後期心得' },
  'usecases.creative': { zh: '创作日志', en: 'Creative Log', tw: '創作日誌' },
  'usecases.creative.desc': { zh: '音乐创作、艺术创作的过程记录', en: 'Document music creation and artistic creative processes', tw: '音樂創作、藝術創作的過程記錄' },

  // ThemePreview
  'theme.preview.title': { zh: '多种主题，随心切换', en: 'Multiple Themes, Switch Freely', tw: '多種主題，隨心切換' },
  'theme.preview.subtitle': { zh: '内置多款精美主题，一键切换，还支持自定义配色', en: 'Built-in beautiful themes with one-click switching and custom color support', tw: '內建多款精美主題，一鍵切換，還支援自訂配色' },
  'theme.default': { zh: '默认橙', en: 'Default Orange', tw: '預設橙' },
  'theme.default.desc': { zh: '温暖活力的橙色主题', en: 'Warm and energetic orange theme', tw: '溫暖活力的橙色主題' },
  'theme.blue': { zh: '深海蓝', en: 'Deep Sea Blue', tw: '深海藍' },
  'theme.blue.desc': { zh: '沉稳专业的蓝色主题', en: 'Professional and calm blue theme', tw: '沉穩專業的藍色主題' },
  'theme.green': { zh: '森林绿', en: 'Forest Green', tw: '森林綠' },
  'theme.green.desc': { zh: '自然清新的绿色主题', en: 'Natural and refreshing green theme', tw: '自然清新的綠色主題' },
  'theme.black': { zh: '深邃黑', en: 'Deep Black', tw: '深邃黑' },
  'theme.black.desc': { zh: '现代感十足的深色主题', en: 'Modern dark theme', tw: '現代感十足的深色主題' },
  'theme.purple': { zh: '薰衣草', en: 'Lavender', tw: '薰衣草' },
  'theme.purple.desc': { zh: '优雅浪漫的紫色主题', en: 'Elegant and romantic purple theme', tw: '優雅浪漫的紫色主題' },
  'theme.pink': { zh: '玫瑰粉', en: 'Rose Pink', tw: '玫瑰粉' },
  'theme.pink.desc': { zh: '甜美温柔的粉色主题', en: 'Sweet and gentle pink theme', tw: '甜美溫柔的粉色主題' },
  'theme.features.title': { zh: '主题特性', en: '主题特性', tw: '主题特性' },
  // Theme features
  'theme.default.f1': { zh: '渐变强调色', en: '渐变强调色', tw: '漸變強調色' },
  'theme.default.f2': { zh: '温暖背景', en: '温暖背景', tw: '溫暖背景' },
  'theme.default.f3': { zh: '高对比度', en: '高对比度', tw: '高對比度' },
  'theme.blue.f1': { zh: '专业商务', en: '专业商务', tw: '專業商務' },
  'theme.blue.f2': { zh: '清爽视觉', en: '清爽视觉', tw: '清爽視覺' },
  'theme.blue.f3': { zh: '易于阅读', en: '易于阅读', tw: '易於閱讀' },
  'theme.green.f1': { zh: '护眼配色', en: '护眼配色', tw: '護眼配色' },
  'theme.green.f2': { zh: '自然气息', en: '自然气息', tw: '自然氣息' },
  'theme.green.f3': { zh: '舒适阅读', en: '舒适阅读', tw: '舒適閱讀' },
  'theme.black.f1': { zh: '夜间模式', en: '夜间模式', tw: '夜間模式' },
  'theme.black.f2': { zh: '低对比度', en: '低对比度', tw: '低對比度' },
  'theme.black.f3': { zh: '护眼设计', en: '护眼设计', tw: '護眼設計' },
  'theme.purple.f1': { zh: '优雅配色', en: '优雅配色', tw: '優雅配色' },
  'theme.purple.f2': { zh: '柔和视觉', en: '柔和视觉', tw: '柔和視覺' },
  'theme.purple.f3': { zh: '艺术气息', en: '艺术气息', tw: '藝術氣息' },
  'theme.pink.f1': { zh: '温暖甜美', en: '温暖甜美', tw: '溫暖甜美' },
  'theme.pink.f2': { zh: '亲和力', en: '亲和力', tw: '親和力' },
  'theme.pink.f3': { zh: '女性向', en: '女性向', tw: '女性向' },

  // ResponsiveShowcase
  'responsive.title': { zh: '全端适配，处处精彩', en: 'Full-Device Adaptation, Brilliant Everywhere', tw: '全端適配，處處精彩' },
  'responsive.subtitle': { zh: '无论使用什么设备，都能获得最佳的阅读体验', en: 'Get the best reading experience on any device', tw: '無論使用什麼設備，都能獲得最佳的閱讀體驗' },
  'responsive.desktop': { zh: '桌面端', en: 'Desktop', tw: '桌面端' },
  'responsive.desktop.desc': { zh: '大屏幕沉浸式阅读', en: '大屏幕沉浸式阅读', tw: '大屏幕沉浸式閱讀' },
  'responsive.desktop.tag1': { zh: '侧边栏导航', en: 'Sidebar Navigation', tw: '側邊欄導航' },
  'responsive.desktop.tag2': { zh: '宽屏布局', en: 'Wide Layout', tw: '寬屏佈局' },
  'responsive.desktop.tag3': { zh: '高清图片展示', en: 'HD Image Display', tw: '高清圖片展示' },
  'responsive.tablet': { zh: '平板端', en: 'Tablet', tw: '平板端' },
  'responsive.tablet.desc': { zh: '舒适的中间尺寸体验', en: 'Comfortable mid-size experience', tw: '舒適的中間尺寸體驗' },
  'responsive.tablet.tag1': { zh: '自适应布局', en: 'Adaptive Layout', tw: '自適應佈局' },
  'responsive.tablet.tag2': { zh: '触控优化', en: 'Touch Optimized', tw: '觸控優化' },
  'responsive.tablet.tag3': { zh: '适中的字体', en: 'Balanced Typography', tw: '適中的字體' },
  'responsive.mobile': { zh: '手机端', en: '手机端', tw: '手機端' },
  'responsive.mobile.desc': { zh: '随时随地，优雅阅读', en: 'Elegant reading anywhere', tw: '隨時隨地，優雅閱讀' },
  'responsive.mobile.tag1': { zh: '汉堡菜单', en: 'Hamburger Menu', tw: '漢堡選單' },
  'responsive.mobile.tag2': { zh: '底部导航', en: 'Bottom Navigation', tw: '底部導航' },
  'responsive.mobile.tag3': { zh: '快速滑动', en: 'Fast Scrolling', tw: '快速滑動' },
  'responsive.pwa': { zh: 'PWA 支持', en: 'PWA Support', tw: 'PWA 支援' },
  'responsive.pwa.desc': { zh: '支持渐进式 Web 应用，可以像原生应用一样安装到主屏幕，离线也能阅读。', en: 'Progressive Web App support, install like native apps and read offline.', tw: '支援漸進式 Web 應用，可以像原生應用一樣安裝到主畫面，離線也能閱讀。' },
  'responsive.pwa.lighthouse': { zh: 'Lighthouse', en: 'Lighthouse', tw: 'Lighthouse' },
  'responsive.pwa.loadtime': { zh: '首屏加载', en: 'First Load', tw: '首屏載入' },
  'responsive.pwa.rating': { zh: '性能评级', en: 'Performance Rating', tw: '效能評級' },

  // VideoShowcase
  'video.title': { zh: '视频教程', en: 'Video Tutorials', tw: '視頻教程' },
  'video.subtitle': { zh: '跟着视频一步步学习，快速掌握 QuillStack', en: 'Learn step by step with videos and master QuillStack quickly', tw: '跟著視頻一步步學習，快速掌握 QuillStack' },
  'video.playlist': { zh: '播放列表', en: 'Playlist', tw: '播放列表' },
  'video.loading': { zh: '视频加载中...', en: 'Loading video...', tw: '視頻載入中...' },
  'video.quickstart.title': { zh: '5 分钟快速上手', en: '5 Minute Quick Start', tw: '5 分鐘快速上手' },
  'video.quickstart.desc': { zh: '从零开始搭建你的第一个博客', en: 'Build your first blog from scratch', tw: '從零開始搭建你的第一個部落格' },
  'video.theme.title': { zh: '主题自定义指南', en: 'Theme Customization Guide', tw: '主題自訂指南' },
  'video.theme.desc': { zh: '打造独一无二的个人风格', en: 'Create your unique personal style', tw: '打造獨一無二的個人風格' },
  'video.markdown.title': { zh: 'Markdown 写作技巧', en: 'Markdown Writing Tips', tw: 'Markdown 寫作技巧' },
  'video.markdown.desc': { zh: '提升写作效率的实用技巧', en: 'Practical tips to boost writing efficiency', tw: '提升寫作效率的實用技巧' },

  // ConfigPreview
  'config.title': { zh: '一个配置文件，搞定一切', en: 'One Config File, Done', tw: '一個設定檔，搞定一切' },
  'config.subtitle': { zh: '无需复杂设置，一个 JSON 文件即可配置你的整个博客', en: 'No complex setup needed, one JSON file configures your entire blog', tw: '無需複雜設置，一個 JSON 文件即可配置你的整個部落格' },
  'config.preview': { zh: '预览效果', en: 'Preview', tw: '預覽效果' },
  'config.live': { zh: '实时预览', en: 'Live Preview', tw: '即時預覽' },
  'config.highlight': { zh: '代码块高亮', en: 'Code Highlighting', tw: '代碼塊高亮' },
  'config.docs': { zh: '查看完整配置文档', en: 'View Full Config Docs', tw: '查看完整設定文檔' },
  'config.filename': { zh: 'settings.json', en: 'settings.json', tw: 'settings.json' },
  // ConfigPreview example
  'config.example.siteTitle': { zh: '我的博客', en: 'My Blog', tw: '我的部落格' },
  'config.example.authorName': { zh: '作者名', en: 'Author', tw: '作者名' },
  'config.example.bio': { zh: '热爱写作，记录生活', en: 'Passionate about writing', tw: '熱愛寫作，記錄生活' },
  'config.example.preview.title': { zh: '我的博客', en: 'My Blog', tw: '我的部落格' },
  'config.example.preview.bio': { zh: '热爱写作，记录生活', en: 'Passionate about writing', tw: '熱愛寫作，記錄生活' },
  'config.example.preview.home': { zh: '首页', en: 'Home', tw: '首頁' },
  'config.example.preview.tech': { zh: '技术博客', en: 'Tech Blog', tw: '技術部落格' },

  // Comparison
  'comparison.title': { zh: '为什么选择 QuillStack？', en: 'Why Choose QuillStack?', tw: '為什麼選擇 QuillStack？' },
  'comparison.subtitle': { zh: '对比主流博客平台，QuillStack 在简洁性和功能性之间找到了完美平衡', en: 'Compared with mainstream blog platforms, QuillStack finds the perfect balance between simplicity and functionality', tw: '對比主流部落格平台，QuillStack 在簡潔性和功能性之間找到了完美平衡' },
  'comparison.feature': { zh: '功能特性', en: 'Feature', tw: '功能特性' },
  'comparison.quillstack': { zh: 'QuillStack', en: 'QuillStack', tw: 'QuillStack' },
  'comparison.wordpress': { zh: 'WordPress', en: 'WordPress', tw: 'WordPress' },
  'comparison.notion': { zh: 'Notion', en: 'Notion', tw: 'Notion' },
  'comparison.medium': { zh: 'Medium', en: 'Medium', tw: 'Medium' },
  'comparison.ghost': { zh: 'Ghost', en: 'Ghost', tw: 'Ghost' },
  'comparison.legend.supported': { zh: '支持', en: 'Supported', tw: '支援' },
  'comparison.legend.unsupported': { zh: '不支持', en: 'Unsupported', tw: '不支援' },
  'comparison.legend.partial': { zh: '部分支持/需插件', en: 'Partial/Plugin Required', tw: '部分支援/需插件' },
  // Comparison feature items
  'comparison.feat.free': { zh: '免费开源', en: 'Free & Open Source', tw: '免費開源' },
  'comparison.feat.domain': { zh: '自定义域名', en: 'Custom Domain', tw: '自訂域名' },
  'comparison.feat.noads': { zh: '无广告', en: 'No Ads', tw: '無廣告' },
  'comparison.feat.markdown': { zh: 'Markdown 支持', en: 'Markdown Support', tw: 'Markdown 支援' },
  'comparison.feat.codehighlight': { zh: '代码高亮', en: 'Code Highlighting', tw: '代碼高亮' },
  'comparison.feat.math': { zh: '数学公式', en: 'Math Formulas', tw: '數學公式' },
  'comparison.feat.seo': { zh: 'SEO 优化', en: 'SEO Optimized', tw: 'SEO 優化' },
  'comparison.feat.comments': { zh: '评论系统', en: 'Comments System', tw: '評論系統' },
  'comparison.feat.fastdeploy': { zh: '快速部署', en: 'Fast Deployment', tw: '快速部署' },
  'comparison.feat.versioncontrol': { zh: '版本控制', en: 'Version Control', tw: '版本控制' },
  'comparison.feat.nodb': { zh: '无需数据库', en: 'No Database Required', tw: '無需資料庫' },
  'comparison.feat.static': { zh: '静态导出', en: 'Static Export', tw: '靜態導出' },

  // Stats
  'stats.github': { zh: '在 GitHub 上查看', en: 'View on GitHub', tw: '在 GitHub 上查看' },
  'stats.stars': { zh: 'GitHub Stars', en: 'GitHub Stars', tw: 'GitHub Stars' },
  'stats.forks': { zh: 'Forks', en: 'Forks', tw: 'Forks' },
  'stats.users': { zh: '用户', en: 'Users', tw: '用戶' },
  'stats.downloads': { zh: '下载量', en: 'Downloads', tw: '下載量' },

  // Testimonials
  'testimonials.title': { zh: '用户好评', en: 'User Testimonials', tw: '用戶好評' },
  'testimonials.subtitle': { zh: '听听他们怎么说', en: 'See What They Say', tw: '聽聽他們怎麼說' },
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

  // FeatureList
  'featurelist.markdown.title': { zh: 'Markdown 写作', en: 'Markdown Writing', tw: 'Markdown 寫作' },
  'featurelist.markdown.desc': { zh: '支持完整 Markdown 语法', en: 'Full Markdown syntax support', tw: '支援完整 Markdown 語法' },
  'featurelist.categories.title': { zh: '分类与标签', en: 'Categories & Tags', tw: '分類與標籤' },
  'featurelist.categories.desc': { zh: '灵活组织你的文章', en: 'Organize your articles flexibly', tw: '靈活組織你的文章' },
  'featurelist.responsive.title': { zh: '响应式设计', en: 'Responsive Design', tw: '響應式設計' },
  'featurelist.responsive.desc': { zh: '在任何设备上完美阅读', en: 'Perfect reading on any device', tw: '在任何設備上完美閱讀' },
  'featurelist.seo.title': { zh: 'SEO 优化', en: 'SEO Optimized', tw: 'SEO 優化' },
  'featurelist.seo.desc': { zh: '自动 sitemap，社交卡片生成', en: 'Auto sitemap, social card generation', tw: '自動 sitemap，社交卡片生成' },
  'featurelist.ogimage.title': { zh: 'OG 图片生成', en: 'OG Image Generation', tw: 'OG 圖片生成' },
  'featurelist.ogimage.desc': { zh: '自动生成文章分享预览图', en: 'Auto-generate article share preview', tw: '自動生成文章分享預覽圖' },
  'featurelist.performance.title': { zh: '极速性能', en: 'Lightning Fast', tw: '極速性能' },
  'featurelist.performance.desc': { zh: 'Lighthouse 满分优化', en: 'Lighthouse perfect score optimization', tw: 'Lighthouse 滿分優化' },
  'featurelist.theme.title': { zh: '主题自定义', en: 'Theme Customization', tw: '主題自訂' },
  'featurelist.theme.desc': { zh: 'JSON 配置，即时生效', en: 'JSON config, instant effect', tw: 'JSON 配置，即時生效' },

  // Community
  'community.feedback': { zh: '问题反馈', en: 'Bug Reports', tw: '問題反饋' },
  'community.suggestions': { zh: '功能建议', en: 'Feature Requests', tw: '功能建議' },
  'community.star': { zh: 'Star', en: 'Star', tw: 'Star' },
  'community.issues': { zh: 'Issues', en: 'Issues', tw: 'Issues' },
  'community.discussions': { zh: 'Discussions', en: 'Discussions', tw: 'Discussions' },

  // FileTree
  'filetree.title': { zh: '项目结构', en: 'Project Structure', tw: '專案結構' },
  'filetree.desc': { zh: '简洁清晰的目录结构，易于上手', en: 'Simple and clear directory structure, easy to get started', tw: '簡潔清晰的目錄結構，易於上手' },
  'filetree.highlight': { zh: '高亮项是你的主要工作空间', en: 'Highlighted items are your main workspace', tw: '高亮項目是你的主要工作空間' },

  // FloatingIsland
  'nav.github': { zh: 'GitHub', en: 'GitHub', tw: 'GitHub' },
  'common.logoAlt': { zh: 'QuillStack Logo', en: 'QuillStack Logo', tw: 'QuillStack Logo' },
  'common.brandName': { zh: 'QuillStack', en: 'QuillStack', tw: 'QuillStack' },

  // Footer
  'footer.product': { zh: '产品', en: 'Product', tw: '產品' },
  'footer.resources': { zh: '资源', en: 'Resources', tw: '資源' },
  'footer.community': { zh: '社区', en: 'Community', tw: '社區' },
  'footer.features': { zh: '功能特性', en: 'Features', tw: '功能特性' },
  'footer.themes': { zh: '主题', en: 'Themes', tw: '主題' },
  'footer.deploy': { zh: '部署', en: 'Deploy', tw: '部署' },
  'footer.discussions': { zh: '讨论', en: 'Discussions', tw: '討論' },
  'footer.issues': { zh: '问题', en: 'Issues', tw: '問題' },
  'footer.copyright': { zh: '版权所有。', en: 'All rights reserved.', tw: '版權所有。' },
  'footer.made_with': { zh: '用心制作', en: 'Made with', tw: '用心製作' },
  'footer.by_community': { zh: '由社区', en: 'by the community', tw: '由社區' },
  'footer.tagline': { zh: '更轻、更快、更美。为写作而生的博客构建工具。', en: 'Lighter, Faster, More Beautiful. A blog builder born for writing.', tw: '更輕、更快、更美。為寫作而生的部落格構建工具。' },

  // Testimonials - User data
  'testimonials.user1.name': { zh: '李明', en: 'Alex Johnson', tw: '李明' },
  'testimonials.user1.role.dev': { zh: '独立开发者', en: 'Indie Developer', tw: '獨立開發者' },
  'testimonials.user1.role.pm': { zh: '产品经理', en: 'Product Manager', tw: '產品經理' },
  'testimonials.user1.quote.dev': { zh: 'QuillStack 让我的技术博客搭建变得异常简单。几分钟就搞定了，而且主题非常好看！', en: 'QuillStack made building my tech blog incredibly easy. Set it up in minutes and the themes look amazing!', tw: 'QuillStack 讓我的技術部落格搭建變得異常簡單。幾分鐘就搞定了，而且主題非常好看！' },
  'testimonials.user1.quote.pm': { zh: '作为一个不懂技术的人，我也能轻松搭建自己的博客。文档清晰，配置简单，太棒了！', en: 'As someone non-technical, I could easily set up my own blog. Clear documentation and simple configuration - love it!', tw: '作為一個不懂技術的人，我也能輕鬆搭建自己的部落格。文件清晰，配置簡單，太棒了！' },
  'testimonials.user2.name': { zh: '张伟', en: 'Michael Zhang', tw: '張偉' },
  'testimonials.user2.role': { zh: '前端工程师', en: 'Frontend Engineer', tw: '前端工程師' },
  'testimonials.user2.quote': { zh: '代码质量很高，扩展性也很好。我已经基于它定制了自己的主题，非常满意。', en: 'High code quality and great extensibility. I\'ve already customized my own theme based on it - very satisfied!', tw: '程式碼品質很高，擴展性也很好。我已經基於它定制了自己的主題，非常滿意。' },
  'testimonials.user3.name': { zh: '王强', en: 'Emma Wang', tw: '王強' },
  'testimonials.user3.role': { zh: '设计师', en: 'Designer', tw: '設計師' },
  'testimonials.user3.quote': { zh: '设计非常精致，细节处理得很到位。终于找到一个既有颜值又有实力的博客工具了。', en: 'The design is exquisite with attention to detail. Finally found a blogging tool that\'s both beautiful and powerful!', tw: '設計非常精緻，細節處理得很到位。終於找到一個既有顏值又有實力的部落格工具了。' },
  'testimonials.user4.name': { zh: '王强', en: 'David Wang', tw: '王強' },
  'testimonials.user4.role': { zh: '全栈开发者', en: 'Full Stack Developer', tw: '全端開發者' },
  'testimonials.user4.quote': { zh: '部署到 Vercel 只需要几秒钟，而且性能优化做得非常好，Lighthouse 分数几乎满分。', en: 'Deploying to Vercel takes just seconds, and the performance optimization is excellent - nearly perfect Lighthouse scores!', tw: '部署到 Vercel 只需要幾秒鐘，而且效能優化做得非常好，Lighthouse 分數幾乎滿分。' },
  'testimonials.user5.name': { zh: '刘芳', en: 'Lisa Liu', tw: '劉芳' },
  'testimonials.user5.role': { zh: '内容创作者', en: 'Content Creator', tw: '內容創作者' },
  'testimonials.user5.quote': { zh: 'Markdown 写作体验一流，而且自动生成目录和 SEO 优化，让我可以专注于内容创作。', en: 'Top-notch Markdown writing experience with automatic TOC and SEO optimization - lets me focus on creating content!', tw: 'Markdown 寫作體驗一流，而且自動生成目錄和 SEO 優化，讓我可以專注於內容創作。' },

  // Layout / SEO
  'layout.title': { zh: 'QuillStack - 更轻 · 更快 · 更美', en: 'QuillStack - Lighter · Faster · More Beautiful', tw: 'QuillStack - 更輕 · 更快 · 更美' },
  'layout.description': { zh: '几分钟搭建，一辈子受益的个人博客', en: 'Set up in minutes, benefit for a lifetime', tw: '幾分鐘搭建，一輩子受益的個人部落格' },

  // Deploy Page
  'deploy.title': { zh: '快速部署', en: 'Quick Deploy', tw: '快速部署' },
  'deploy.subtitle': { zh: '三步开启你的博客之旅', en: 'Start your blog journey in three steps', tw: '三步開啟你的部落格之旅' },
  'deploy.step1': { zh: '环境', en: 'Environment', tw: '環境' },
  'deploy.step2': { zh: '配置', en: 'Config', tw: '配置' },
  'deploy.step3': { zh: '部署', en: 'Deploy', tw: '部署' },
  'deploy.step1.title': { zh: '步骤 1 / 3: 准备环境', en: 'Step 1/3: Prepare Environment', tw: '步驟 1/3: 準備環境' },
  'deploy.step1.hint': { zh: '确保你已安装：', en: 'Make sure you have installed:', tw: '確保你已安裝：' },
  'deploy.step1.github': { zh: '一个 GitHub 账号', en: 'A GitHub account', tw: '一個 GitHub 帳號' },
  'deploy.step1.terminal': { zh: '终端', en: 'Terminal', tw: '終端' },
  'deploy.step1.quick': { zh: '快速开始：', en: 'Quick start:', tw: '快速開始：' },
  'deploy.next': { zh: '下一步', en: 'Next', tw: '下一步' },
  'deploy.prev': { zh: '上一步', en: 'Previous', tw: '上一步' },
  'deploy.restart': { zh: '重新开始', en: 'Start Over', tw: '重新開始' },
  'deploy.step2.title': { zh: '步骤 2: 配置', en: 'Step 2: Configuration', tw: '步驟 2: 設定' },
  'deploy.step2.hint': { zh: '配置内容即将上线', en: 'Configuration content coming soon', tw: '設定內容即將上線' },
  'deploy.step3.title': { zh: '步骤 3: 部署', en: 'Step 3: Deploy', tw: '步驟 3: 部署' },
  'deploy.step3.hint': { zh: '部署内容即将上线', en: 'Deployment content coming soon', tw: '部署內容即將上線' },
}

export function t(key: string, lang: Language = 'zh'): string {
  const translation = translations[key]
  if (!translation) return key
  return translation[lang] || translation.zh
}
