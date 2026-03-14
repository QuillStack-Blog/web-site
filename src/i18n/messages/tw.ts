import { zhMessages, type SiteMessages } from "./zh";

export const twMessages: SiteMessages = {
  ...zhMessages,
  meta: {
    title: "QuillStack - 輕快寫作，優雅呈現",
    description: "下一代靜態部落格構建工具。幾分鐘搭建，一輩子受益的個人部落格。",
  },
  common: {
    ...zhMessages.common,
    navigation: {
      home: "首頁",
      deploy: "部署",
      about: "關於",
      github: "GitHub",
      rss: "RSS",
    },
    language: {
      ...zhMessages.common.language,
      label: "語言",
    },
    theme: {
      ...zhMessages.common.theme,
      titlePrefix: "當前主題",
      light: "淺色",
      dark: "深色",
      system: "系統",
    },
    buttons: {
      ...zhMessages.common.buttons,
      start: "免費開始使用",
      learnMore: "了解更多",
      restart: "重新開始",
      copy: "複製",
      copied: "已複製",
      viewConfig: "查看完整配置文件",
    },
    labels: {
      ...zhMessages.common.labels,
      codeHighlight: "程式碼區塊高亮",
      livePreview: "即時預覽",
      nowPlaying: "影片載入中...",
      preview: "預覽效果",
    },
  },
  home: {
    ...zhMessages.home,
    hero: {
      ...zhMessages.home.hero,
      slogan: "更輕 · 更快 · 更美",
      subtitle: "幾分鐘搭建，一輩子受益的個人部落格",
      imageAlt: "部落格預覽圖",
    },
    screenshotGallery: {
      ...zhMessages.home.screenshotGallery,
      eyebrow: "截圖預覽",
      title: "精美的預設主題 開箱即用",
      description: "精心設計的預設主題，無需配置，開箱即用",
      items: [
        { id: "blog-home", title: "部落格首頁", description: "簡潔優雅的文章列表" },
        { id: "article-detail", title: "文章詳情", description: "沉浸式的閱讀體驗" },
        { id: "category-browse", title: "分類瀏覽", description: "輕鬆管理和發現內容" },
        { id: "friends-link", title: "友情連結頁面", description: "好朋友就要在一起" },
        { id: "dark-mode", title: "深色模式", description: "護眼夜間閱讀" },
      ],
    },
    features: {
      ...zhMessages.home.features,
      title: "為什麼選擇 QuillStack？",
      description: "簡潔而不簡單，為寫作而生的部落格構建工具",
      items: [
        { id: "fast-build", title: "極速構建", description: "Next.js 驅動，秒級構建，瞬間部署", accent: "⚡" },
        { id: "beautiful-theme", title: "精美主題", description: "精心設計的預設主題，開箱即用", accent: "🎨" },
        { id: "lightweight", title: "輕量簡潔", description: "無冗餘依賴，專注寫作本身", accent: "🪶" },
        { id: "minimal-config", title: "極簡配置", description: "一個 JSON 搞定全部，零學習成本", accent: "✨" },
      ],
    },
    stats: {
      ...zhMessages.home.stats,
      items: {
        stars: "GitHub Stars",
        forks: "Forks",
        users: "用戶",
        downloads: "下載量",
      },
    },
    cta: {
      ...zhMessages.home.cta,
      title: "準備好開始了嗎？",
      description: "加入數千名用戶的行列，用 QuillStack 創建屬於你的優雅部落格",
      trustItems: ["完全免費", "開源代碼", "無需信用卡"],
    },
  },
  about: {
    ...zhMessages.about,
    story: {
      ...zhMessages.about.story,
      subtitle: "讓寫作回歸純粹",
      paragraphs: [
        "QuillStack 誕生於一個簡單的信念：每個人都應該擁有一個屬於自己的、優雅的寫作空間。",
        "好的工具應該像空氣一樣自然存在，讓你專注於內容本身。",
      ],
    },
    featureList: {
      ...zhMessages.about.featureList,
      items: [
        { title: "Markdown 寫作", description: "支援完整 Markdown 語法" },
        { title: "分類與標籤", description: "靈活組織你的文章" },
        { title: "響應式設計", description: "在任何設備上完美閱讀" },
        { title: "SEO 優化", description: "自動 sitemap，社交卡片生成" },
        { title: "OG 圖片生成", description: "自動生成文章分享預覽圖" },
        { title: "極速性能", description: "Lighthouse 滿分優化" },
        { title: "主題自定義", description: "JSON 配置，即時生效" },
      ],
    },
    fileTree: {
      ...zhMessages.about.fileTree,
      title: "專案結構",
      description: "簡潔清晰的目錄結構，易於上手",
      footer: "高亮項目是你的主要工作空間",
    },
    community: {
      ...zhMessages.about.community,
      title: "加入社區",
      description: "加入我們，一起建設",
      items: [
        { id: "github", title: "GitHub", action: "⭐ Star" },
        { id: "issues", title: "問題反饋", action: "🐛 Issues" },
        { id: "discussions", title: "功能建議", action: "💡 Discussions" },
      ],
      footerText: "由社區用愛心製作",
    },
  },
  deploy: {
    ...zhMessages.deploy,
    hero: {
      eyebrow: "部署指南",
      title: "快速部署",
      description: "三步開啟你的部落格之旅",
    },
    steps: [
      {
        label: "環境",
        title: "步驟 1 / 3：準備環境",
        lead: "確保你已安裝：",
        checklist: ["Node.js 18+", "Git", "一個 GitHub 帳號"],
        extraTitle: "快速開始：",
        terminalLabel: "終端",
        code: "# 克隆模板倉庫\ngit clone https://github.com/xxx/quillstack\ncd quillstack",
        primaryAction: "下一步",
      },
      {
        label: "配置",
        title: "步驟 2 / 3：配置站點",
        lead: "配置內容正在整理中，但你已可以先了解站點的核心入口。",
        checklist: [
          "編輯 settings.json 定義站點標題、作者與主題色",
          "整理 Markdown 內容和分類結構",
          "檢查社群連結、RSS 與自訂網域設定",
        ],
        extraTitle: "即將上線：",
        terminalLabel: "配置預覽",
        code: "{\n  \"siteTitle\": \"我的部落格\",\n  \"author\": {\n    \"name\": \"作者名\"\n  },\n  \"theme\": {\n    \"primaryColor\": \"#f97316\"\n  }\n}",
        primaryAction: "下一步",
      },
      {
        label: "部署",
        title: "步驟 3 / 3：部署上線",
        lead: "部署細節仍在補充中，當前推薦先完成一次靜態構建驗證。",
        checklist: [
          "執行 npm install 安裝依賴",
          "執行 npm run build 生成靜態站點",
          "將 dist 目錄部署到你偏好的靜態托管平台",
        ],
        extraTitle: "構建命令：",
        terminalLabel: "終端",
        code: "npm install\nnpm run build",
        primaryAction: "重新開始",
      },
    ],
  },
};
