import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { TopBar } from "@/components/navigation/TopBar";
import { FloatingIsland } from "@/components/navigation/FloatingIsland";

export const metadata: Metadata = {
  title: "QuillStack - 轻快写作，优雅呈现",
  description: "下一代静态博客构建工具。几分钟搭建，一辈子受益的个人博客。",
  keywords: ["静态博客", "Next.js", "Markdown", "博客生成器", "QuillStack"],
  authors: [{ name: "Bqiu" }],
  openGraph: {
    title: "QuillStack - 轻快写作，优雅呈现",
    description: "下一代静态博客构建工具",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <ThemeProvider>
          {/* 顶部导航栏 */}
          <TopBar />
          
          {/* 灵动岛导航 */}
          <FloatingIsland />
          
          {/* 主内容区 - 添加顶部内边距为两个导航栏留出空间 */}
          <main className="pt-32">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
