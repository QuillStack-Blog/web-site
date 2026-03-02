"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

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
  { name: "免费开源", quillstack: true, wordpress: true, notion: "partial", medium: true, ghost: false },
  { name: "自定义域名", quillstack: true, wordpress: true, notion: "partial", medium: false, ghost: true },
  { name: "无广告", quillstack: true, wordpress: "partial", notion: true, medium: false, ghost: true },
  { name: "Markdown 支持", quillstack: true, wordpress: "partial", notion: true, medium: true, ghost: true },
  { name: "代码高亮", quillstack: true, wordpress: "plugin", notion: true, medium: true, ghost: true },
  { name: "数学公式", quillstack: true, wordpress: "plugin", notion: true, medium: false, ghost: true },
  { name: "SEO 优化", quillstack: true, wordpress: "plugin", notion: "partial", medium: true, ghost: true },
  { name: "评论系统", quillstack: true, wordpress: true, notion: false, medium: true, ghost: true },
  { name: "快速部署", quillstack: true, wordpress: false, notion: true, medium: true, ghost: false },
  { name: "版本控制", quillstack: true, wordpress: false, notion: "partial", medium: false, ghost: false },
  { name: "无需数据库", quillstack: true, wordpress: false, notion: true, medium: true, ghost: false },
  { name: "静态导出", quillstack: true, wordpress: false, notion: false, medium: false, ghost: false },
];

const platforms = [
  { key: "quillstack", name: "QuillStack", highlight: true },
  { key: "wordpress", name: "WordPress", highlight: false },
  { key: "notion", name: "Notion", highlight: false },
  { key: "medium", name: "Medium", highlight: false },
  { key: "ghost", name: "Ghost", highlight: false },
];

function FeatureIcon({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="w-5 h-5 text-green-500" />;
  }
  if (value === false) {
    return <X className="w-5 h-5 text-foreground-subtle" />;
  }
  return (
    <div className="flex items-center gap-1">
      <Minus className="w-4 h-4 text-orange-400" />
      <span className="text-xs text-orange-600">{value}</span>
    </div>
  );
}

export function Comparison() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
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
            为什么选择 <span className="text-gradient">QuillStack</span>？
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-foreground-secondary text-lg max-w-2xl mx-auto"
          >
            对比主流博客平台，QuillStack 在简洁性和功能性之间找到了完美平衡
          </motion.p>
        </motion.div>

        {/* 对比表格 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto"
        >
          <div className="min-w-[800px]">
            {/* 表头 */}
            <div className="grid grid-cols-6 gap-4 mb-4">
              <div className="font-bold text-foreground">功能特性</div>
              {platforms.map((platform) => (
                <div
                  key={platform.key}
                  className={`text-center font-bold py-2 rounded-lg ${
                    platform.highlight
                      ? "bg-gradient-orange text-white"
                      : "text-foreground-secondary"
                  }`}
                >
                  {platform.name}
                </div>
              ))}
            </div>

            {/* 表格内容 */}
            <div className="space-y-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="grid grid-cols-6 gap-4 py-3 px-2 rounded-lg hover:bg-background-warm transition-colors"
                >
                  <div className="font-medium text-sm text-foreground">{feature.name}</div>
                  {platforms.map((platform) => {
                    const value = feature[platform.key as keyof typeof feature] as boolean | string;
                    return (
                      <div
                        key={platform.key}
                        className={`flex items-center justify-center ${
                          platform.highlight ? "bg-orange-50 rounded-lg" : ""
                        }`}
                      >
                        <FeatureIcon value={value} />
                      </div>
                    );
                  })}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 图例 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-8 mt-8 text-sm text-foreground-subtle"
        >
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            <span>支持</span>
          </div>
          <div className="flex items-center gap-2">
            <X className="w-4 h-4 text-foreground-subtle" />
            <span>不支持</span>
          </div>
          <div className="flex items-center gap-2">
            <Minus className="w-4 h-4 text-orange-400" />
            <span>部分支持/需插件</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
