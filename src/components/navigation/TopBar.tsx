"use client";

import { motion } from "framer-motion";
import { Github, Twitter, MessageCircle, Rss } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useTheme } from "@/components/providers/ThemeProvider";

const socialLinks = [
  { icon: Github, href: "https://github.com/QuillStack-Blog/QuillStack", label: "GitHub" },
  { icon: Rss, href: "/rss.xml", label: "RSS" },
];

export function TopBar() {
  const { mounted } = useTheme();

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-[60] px-4 py-2"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* 左侧：主题切换和快捷链接 */}
        <div className="flex items-center gap-3">
          {/* 主题切换按钮 */}
          <ThemeToggle />

          {/* 分隔线 - 只在客户端挂载后显示以避免 hydration 问题 */}
          {mounted && (
            <div className="h-5 w-px bg-orange-200 dark:bg-gray-700 hidden sm:block" />
          )}

          {/* 社交链接 */}
          <div className="hidden sm:flex items-center gap-1">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-foreground-secondary dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-800 transition-colors"
                title={label}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* 右侧：版本标签和语言切换 */}
        <div className="flex items-center gap-3">
          {/* 版本标签 */}
          <motion.a
            href="https://github.com/QuillStack-Blog/QuillStack/releases"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-50 dark:bg-gray-800 border border-orange-100 dark:border-gray-700 text-xs font-medium text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            v1.0.0
          </motion.a>

          {/* 语言切换（占位） */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-lg bg-orange-50 dark:bg-gray-800 border border-orange-200 dark:border-gray-700 flex items-center justify-center text-xs font-bold text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-gray-700 transition-colors"
            title="切换语言"
          >
            中
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
