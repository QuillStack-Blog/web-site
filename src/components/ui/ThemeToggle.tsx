"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme, mounted } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // 防止 hydration 不匹配，在挂载前显示占位符
  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-orange-50 dark:bg-gray-800 border border-orange-200 dark:border-gray-700 flex items-center justify-center">
        <div className="w-4 h-4 bg-gray-200 dark:bg-gray-600 rounded-full animate-pulse" />
      </div>
    );
  }

  const themes = [
    { key: "light", label: "浅色", icon: Sun },
    { key: "dark", label: "深色", icon: Moon },
    { key: "system", label: "系统", icon: Monitor },
  ] as const;

  const currentIcon = themes.find((t) => t.key === theme)?.icon || Sun;
  const Icon = currentIcon;

  return (
    <div className="relative">
      {/* 主按钮 */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-9 h-9 rounded-lg bg-orange-50 dark:bg-gray-800 border border-orange-200 dark:border-gray-700 flex items-center justify-center text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-gray-700 transition-colors"
        title={`当前主题: ${theme === "system" ? "跟随系统" : theme === "light" ? "浅色" : "深色"}`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={resolvedTheme}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Icon className="w-4 h-4" />
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* 下拉菜单 */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 遮罩层 */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full left-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-xl border border-orange-100 dark:border-gray-700 shadow-xl z-50 overflow-hidden"
            >
              {themes.map(({ key, label, icon: ThemeIcon }) => (
                <motion.button
                  key={key}
                  onClick={() => {
                    setTheme(key);
                    setIsOpen(false);
                  }}
                  whileHover={{ x: 4 }}
                  className={`w-full flex items-center gap-2 px-3 py-2.5 text-sm transition-colors ${
                    theme === key
                      ? "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                      : "text-foreground dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  }`}
                >
                  <ThemeIcon className="w-4 h-4" />
                  <span>{label}</span>
                  {theme === key && (
                    <motion.div
                      layoutId="activeTheme"
                      className="ml-auto w-1.5 h-1.5 rounded-full bg-orange-500"
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// 简化的切换按钮（仅切换 light/dark）
export function SimpleThemeToggle() {
  const { resolvedTheme, toggleTheme, mounted } = useTheme();

  // 防止 hydration 不匹配
  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-orange-50 dark:bg-gray-800 border border-orange-200 dark:border-gray-700 flex items-center justify-center">
        <div className="w-4 h-4 bg-gray-200 dark:bg-gray-600 rounded-full animate-pulse" />
      </div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="w-9 h-9 rounded-lg bg-orange-50 dark:bg-gray-800 border border-orange-200 dark:border-gray-700 flex items-center justify-center text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-gray-700 transition-colors"
      title={resolvedTheme === "light" ? "切换到深色模式" : "切换到浅色模式"}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={resolvedTheme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {resolvedTheme === "light" ? (
            <Moon className="w-4 h-4" />
          ) : (
            <Sun className="w-4 h-4" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
