"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

const themes = [
  {
    id: "default",
    name: "默认橙",
    description: "温暖活力的橙色主题",
    primary: "#f97316",
    bg: "#ffffff",
    card: "#fff7ed",
    preview: "https://placehold.co/400x300/fff7ed/f97316?text=Default",
    features: ["渐变强调色", "温暖背景", "高对比度"],
  },
  {
    id: "ocean",
    name: "深海蓝",
    description: "沉稳专业的蓝色主题",
    primary: "#0ea5e9",
    bg: "#f0f9ff",
    card: "#e0f2fe",
    preview: "https://placehold.co/400x300/f0f9ff/0ea5e9?text=Ocean",
    features: ["专业商务", "清爽视觉", "易于阅读"],
  },
  {
    id: "forest",
    name: "森林绿",
    description: "自然清新的绿色主题",
    primary: "#22c55e",
    bg: "#f0fdf4",
    card: "#dcfce7",
    preview: "https://placehold.co/400x300/f0fdf4/22c55e?text=Forest",
    features: ["护眼配色", "自然气息", "舒适阅读"],
  },
  {
    id: "dark",
    name: "深邃黑",
    description: "现代感十足的深色主题",
    primary: "#fb923c",
    bg: "#0f172a",
    card: "#1e293b",
    preview: "https://placehold.co/400x300/0f172a/fb923c?text=Dark",
    features: ["夜间模式", "低对比度", "护眼设计"],
  },
  {
    id: "lavender",
    name: "薰衣草",
    description: "优雅浪漫的紫色主题",
    primary: "#a855f7",
    bg: "#faf5ff",
    card: "#f3e8ff",
    preview: "https://placehold.co/400x300/faf5ff/a855f7?text=Lavender",
    features: ["优雅配色", "柔和视觉", "艺术气息"],
  },
  {
    id: "rose",
    name: "玫瑰粉",
    description: "甜美温柔的粉色主题",
    primary: "#f43f5e",
    bg: "#fff1f2",
    card: "#ffe4e6",
    preview: "https://placehold.co/400x300/fff1f2/f43f5e?text=Rose",
    features: ["温暖甜美", "亲和力", "女性向"],
  },
];

export function ThemePreview() {
  const [activeTheme, setActiveTheme] = useState(themes[0]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            多种<span className="text-gradient">主题</span>，随心切换
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-foreground-secondary text-lg max-w-2xl mx-auto"
          >
            内置多款精美主题，一键切换，还支持自定义配色
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 主题预览区 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* 预览浏览器 */}
            <div 
              className="rounded-2xl overflow-hidden shadow-2xl transition-colors duration-500 border border-border"
              style={{ backgroundColor: activeTheme.card }}
            >
              {/* 浏览器顶部 */}
              <div 
                className="px-4 py-3 flex items-center gap-2 transition-colors duration-500 border-b border-border/50"
                style={{ backgroundColor: activeTheme.bg }}
              >
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div 
                    className="rounded-md px-3 py-1 text-xs text-center transition-colors duration-500 border"
                    style={{ 
                      backgroundColor: activeTheme.card,
                      color: activeTheme.primary,
                      borderColor: activeTheme.primary + "30"
                    }}
                  >
                    my-blog.com
                  </div>
                </div>
              </div>

              {/* 预览内容 */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTheme.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* 模拟博客头部 */}
                    <div className="flex items-center justify-between mb-6">
                      <div 
                        className="text-xl font-bold transition-colors duration-500"
                        style={{ color: activeTheme.primary }}
                      >
                        My Blog
                      </div>
                      <div className="flex gap-4">
                        {["首页", "文章", "关于"].map((item) => (
                          <span 
                            key={item}
                            className="text-sm transition-colors duration-500"
                            style={{ color: activeTheme.primary + "99" }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 模拟文章卡片 */}
                    <div 
                      className="rounded-xl p-4 mb-4 transition-colors duration-500"
                      style={{ backgroundColor: activeTheme.bg }}
                    >
                      <div 
                        className="h-4 w-3/4 rounded mb-3 transition-colors duration-500"
                        style={{ backgroundColor: activeTheme.primary + "40" }}
                      />
                      <div 
                        className="h-3 w-full rounded mb-2 transition-colors duration-500"
                        style={{ backgroundColor: activeTheme.primary + "20" }}
                      />
                      <div 
                        className="h-3 w-2/3 rounded transition-colors duration-500"
                        style={{ backgroundColor: activeTheme.primary + "20" }}
                      />
                    </div>

                    {/* 模拟文章列表 */}
                    {[1, 2].map((i) => (
                      <div key={i} className="flex gap-3 mb-3">
                        <div 
                          className="w-16 h-16 rounded-lg flex-shrink-0 transition-colors duration-500"
                          style={{ backgroundColor: activeTheme.primary + "30" }}
                        />
                        <div className="flex-1">
                          <div 
                            className="h-3 w-3/4 rounded mb-2 transition-colors duration-500"
                            style={{ backgroundColor: activeTheme.primary + "40" }}
                          />
                          <div 
                            className="h-2 w-full rounded transition-colors duration-500"
                            style={{ backgroundColor: activeTheme.primary + "20" }}
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* 装饰元素 */}
            <div 
              className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl transition-colors duration-500"
              style={{ backgroundColor: activeTheme.primary + "20" }}
            />
          </motion.div>

          {/* 主题选择区 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* 主题网格 */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {themes.map((theme) => (
                <motion.button
                  key={theme.id}
                  onClick={() => setActiveTheme(theme)}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative p-4 rounded-xl border-2 text-left transition-all ${
                    activeTheme.id === theme.id
                      ? "border-orange-500 bg-orange-50"
                      : "border-border bg-background hover:border-orange-200"
                  }`}
                >
                  {/* 主题预览小图 */}
                  <div 
                    className="w-full h-20 rounded-lg mb-3 overflow-hidden"
                    style={{ backgroundColor: theme.card }}
                  >
                    <div 
                      className="w-full h-full opacity-50"
                      style={{ backgroundColor: theme.primary }}
                    />
                  </div>

                  {/* 主题信息 */}
                  <h4 className="font-bold text-sm mb-1 text-foreground">{theme.name}</h4>
                  <p className="text-xs text-foreground-subtle">{theme.description}</p>

                  {/* 选中标记 */}
                  {activeTheme.id === theme.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-2 right-2 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center"
                    >
                      <Check className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>

            {/* 当前主题特性 */}
            <div className="bg-background-warm rounded-xl p-6 border border-border">
              <h4 className="font-bold mb-4 flex items-center gap-2 text-foreground">
                <Sparkles className="w-5 h-5 text-orange-500" />
                主题特性
              </h4>
              <ul className="space-y-2">
                {activeTheme.features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 text-sm text-foreground-secondary"
                  >
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: activeTheme.primary }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
