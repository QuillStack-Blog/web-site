"use client";

import { motion } from "framer-motion";
import { FileText, Tags, Monitor, Search, Image, Zap, Palette } from "lucide-react";

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

const features = [
  { icon: FileText, label: "Markdown 写作", description: "支持完整 Markdown 语法" },
  { icon: Tags, label: "分类与标签", description: "灵活组织你的文章" },
  { icon: Monitor, label: "响应式设计", description: "在任何设备上完美阅读" },
  { icon: Search, label: "SEO 优化", description: "自动 sitemap，社交卡片生成" },
  { icon: Image, label: "OG 图片生成", description: "自动生成文章分享预览图" },
  { icon: Zap, label: "极速性能", description: "Lighthouse 满分优化" },
  { icon: Palette, label: "主题自定义", description: "JSON 配置，即时生效" },
];

export function FeatureList() {
  return (
    <section className="py-16 px-4 bg-background-warm">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center mb-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          功能特性
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="space-y-2"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              variants={itemVariants}
              whileHover={{ x: 8, backgroundColor: "rgba(249, 115, 22, 0.05)" }}
              className="group flex items-center gap-4 p-4 rounded-xl bg-background border border-transparent hover:border-border transition-all cursor-default"
            >
              {/* 图标 */}
              <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center group-hover:bg-gradient-orange transition-colors">
                <feature.icon className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" />
              </div>

              {/* 内容 */}
              <div className="flex-1 flex items-center justify-between">
                <span className="font-medium text-foreground">{feature.label}</span>
                <span className="text-sm text-foreground-muted">{feature.description}</span>
              </div>

              {/* 悬停指示器 */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                className="w-1 h-8 bg-orange-500 rounded-full origin-left hidden group-hover:block"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
