export type Locale = "zh" | "en" | "tw";
export type ThemePreference = "light" | "dark" | "system";
export type ComparisonStatus = "support" | "partial" | "plugin" | "not-supported";

export const BRAND_NAME = "QuillStack";
export const SITE_VERSION = "v1.0.0";
export const LOCALE_STORAGE_KEY = "quillstack-language";
export const THEME_STORAGE_KEY = "quillstack-theme";

export const localeToHtmlLang: Record<Locale, string> = {
  zh: "zh-CN",
  en: "en",
  tw: "zh-TW",
};

export const siteLinks = {
  github: "https://github.com/QuillStack-Blog/QuillStack",
  rss: "#",
  getStarted: "/deploy",
  learnMore: "/about",
  communityGithub: "https://github.com/QuillStack-Blog/QuillStack",
  communityIssues: "https://github.com/QuillStack-Blog/QuillStack/issues",
  communityDiscussions: "https://github.com/QuillStack-Blog/QuillStack/discussions",
} as const;

export type SiteLinks = typeof siteLinks;

export const heroPreviewImage =
  "https://quillstack.js.org/images/home/17f5d4f0fb0dc9752cb7d21eca6aab2f6d3dcfbe.png";

export const screenshotAssets = [
  {
    id: "blog-home",
    src: "https://quillstack.js.org/images/home/e9781d3fccfa655655b5861b64457d958dfcce2e.png",
  },
  {
    id: "article-detail",
    src: "https://quillstack.js.org/images/home/9e08e8fa7df325ccb556d2cf4cc420abf708b46e.png",
  },
  {
    id: "category-browse",
    src: "https://quillstack.js.org/images/home/6ccb60071be8f00760a3824d9f7d0fad57de789f.png",
  },
  {
    id: "friends-link",
    src: "https://quillstack.js.org/images/home/ba34b28aa06852bf23d5d30a4742113d49a166dc.png",
  },
  {
    id: "dark-mode",
    src: "https://quillstack.js.org/images/home/e7f8b9dcdb12a0a6d3253383f4b684272906ae03.png",
  },
] as const;

export const useCaseAssets = [
  {
    id: "tech-blog",
    src: "https://placehold.co/400x250/1f2937/f97316?text=Tech+Blog",
  },
  {
    id: "lifestyle",
    src: "https://placehold.co/400x250/fff7ed/f97316?text=Lifestyle",
  },
  {
    id: "portfolio",
    src: "https://placehold.co/400x250/f0fdf4/22c55e?text=Portfolio",
  },
  {
    id: "documentation",
    src: "https://placehold.co/400x250/0f172a/38bdf8?text=Documentation",
  },
  {
    id: "photography",
    src: "https://placehold.co/400x250/fdf4ff/a855f7?text=Photography",
  },
  {
    id: "creative-log",
    src: "https://placehold.co/400x250/fff1f2/f43f5e?text=Creative",
  },
] as const;

export const videoAssets = [
  {
    id: "quick-start",
    src: "https://placehold.co/800x450/1f2937/f97316?text=Quick+Start+Tutorial",
    duration: "05:23",
  },
  {
    id: "theme-customization",
    src: "https://placehold.co/800x450/fed7aa/f97316?text=Theme+Customization",
    duration: "08:15",
  },
  {
    id: "markdown-tips",
    src: "https://placehold.co/800x450/fff7ed/f97316?text=Markdown+Tips",
    duration: "06:42",
  },
] as const;

export const testimonialAvatars = [
  {
    id: "li-ming",
    src: "https://placehold.co/100x100/fed7aa/f97316?text=Li",
  },
  {
    id: "sarah-chen",
    src: "https://placehold.co/100x100/fff7ed/f97316?text=SC",
  },
  {
    id: "zhang-wei",
    src: "https://placehold.co/100x100/f97316/ffffff?text=ZW",
  },
  {
    id: "emma-wang",
    src: "https://placehold.co/100x100/fdba74/f97316?text=EW",
  },
  {
    id: "wang-qiang",
    src: "https://placehold.co/100x100/ea580c/ffffff?text=WQ",
  },
  {
    id: "liu-fang",
    src: "https://placehold.co/100x100/c2410c/ffffff?text=LF",
  },
] as const;

export const themePresets = [
  {
    id: "default-orange",
    accent: "#f97316",
    secondary: "#fbbf24",
    panel: "rgba(249, 115, 22, 0.18)",
  },
  {
    id: "deep-sea",
    accent: "#3b82f6",
    secondary: "#38bdf8",
    panel: "rgba(59, 130, 246, 0.18)",
  },
  {
    id: "forest",
    accent: "#22c55e",
    secondary: "#84cc16",
    panel: "rgba(34, 197, 94, 0.18)",
  },
  {
    id: "midnight",
    accent: "#111827",
    secondary: "#475569",
    panel: "rgba(17, 24, 39, 0.24)",
  },
  {
    id: "lavender",
    accent: "#a855f7",
    secondary: "#c084fc",
    panel: "rgba(168, 85, 247, 0.18)",
  },
  {
    id: "rose",
    accent: "#f43f5e",
    secondary: "#fb7185",
    panel: "rgba(244, 63, 94, 0.18)",
  },
] as const;

export const statItems = [
  {
    id: "stars",
    value: 1200,
    display: "1.2k+",
  },
  {
    id: "forks",
    value: 180,
    display: "180",
  },
  {
    id: "users",
    value: 5000,
    display: "5.0k+",
  },
  {
    id: "downloads",
    value: 15000,
    display: "15k+",
  },
] as const;

export const techStackItems = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Markdown",
  "Radix UI",
  "Framer Motion",
] as const;

export const comparisonPlatforms = [
  "quillstack",
  "wordpress",
  "notion",
  "medium",
  "ghost",
] as const;

export const comparisonMatrix = [
  {
    id: "free-open-source",
    values: {
      quillstack: "support",
      wordpress: "support",
      notion: "partial",
      medium: "support",
      ghost: "not-supported",
    },
  },
  {
    id: "custom-domain",
    values: {
      quillstack: "support",
      wordpress: "support",
      notion: "partial",
      medium: "not-supported",
      ghost: "support",
    },
  },
  {
    id: "ad-free",
    values: {
      quillstack: "support",
      wordpress: "partial",
      notion: "support",
      medium: "not-supported",
      ghost: "support",
    },
  },
  {
    id: "markdown",
    values: {
      quillstack: "support",
      wordpress: "partial",
      notion: "support",
      medium: "support",
      ghost: "support",
    },
  },
  {
    id: "syntax-highlight",
    values: {
      quillstack: "support",
      wordpress: "plugin",
      notion: "support",
      medium: "support",
      ghost: "support",
    },
  },
  {
    id: "math-formula",
    values: {
      quillstack: "support",
      wordpress: "plugin",
      notion: "support",
      medium: "not-supported",
      ghost: "support",
    },
  },
  {
    id: "seo",
    values: {
      quillstack: "support",
      wordpress: "plugin",
      notion: "partial",
      medium: "support",
      ghost: "support",
    },
  },
  {
    id: "comments",
    values: {
      quillstack: "support",
      wordpress: "support",
      notion: "not-supported",
      medium: "support",
      ghost: "support",
    },
  },
  {
    id: "quick-deploy",
    values: {
      quillstack: "support",
      wordpress: "not-supported",
      notion: "support",
      medium: "support",
      ghost: "not-supported",
    },
  },
  {
    id: "version-control",
    values: {
      quillstack: "support",
      wordpress: "not-supported",
      notion: "partial",
      medium: "not-supported",
      ghost: "not-supported",
    },
  },
  {
    id: "no-database",
    values: {
      quillstack: "support",
      wordpress: "not-supported",
      notion: "support",
      medium: "support",
      ghost: "not-supported",
    },
  },
  {
    id: "static-export",
    values: {
      quillstack: "support",
      wordpress: "not-supported",
      notion: "not-supported",
      medium: "not-supported",
      ghost: "not-supported",
    },
  },
] as const satisfies ReadonlyArray<{
  id: string;
  values: Record<(typeof comparisonPlatforms)[number], ComparisonStatus>;
}>;


