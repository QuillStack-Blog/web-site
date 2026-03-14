import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";
import { TopBar } from "@/components/navigation/TopBar";
import { FloatingIsland } from "@/components/navigation/FloatingIsland";
import { LOCALE_STORAGE_KEY, THEME_STORAGE_KEY } from "@/config/site";

export const metadata: Metadata = {
  title: "QuillStack - 轻快写作，优雅呈现",
  description: "下一代静态博客构建工具。几分钟搭建，一辈子受益的个人博客。",
};

const preloadScript = `
(function() {
  var theme = localStorage.getItem('${THEME_STORAGE_KEY}') || 'system';
  var locale = localStorage.getItem('${LOCALE_STORAGE_KEY}');
  var dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var resolved = theme === 'system' ? (dark ? 'dark' : 'light') : theme;
  document.documentElement.classList.toggle('dark', resolved === 'dark');
  document.documentElement.dataset.theme = resolved;
  if (locale) {
    document.documentElement.lang = locale;
  }
})();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: preloadScript }} />
      </head>
      <body>
        <AppProviders>
          <TopBar />
          <FloatingIsland />
          <main>{children}</main>
        </AppProviders>
      </body>
    </html>
  );
}
