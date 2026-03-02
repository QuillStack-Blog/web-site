"use client";

import { motion } from "framer-motion";
import { Zap, Palette, Feather, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "极速构建",
    description: "Next.js 驱动，秒级构建，瞬间部署",
    placeholder: "⚡",
  },
  {
    icon: Palette,
    title: "精美主题",
    description: "精心设计的默认主题，开箱即用",
    placeholder: "🎨",
  },
  {
    icon: Feather,
    title: "轻量简洁",
    description: "无冗余依赖，专注写作本身",
    placeholder: "🪶",
  },
  {
    icon: Sparkles,
    title: "极简配置",
    description: "一个 JSON 搞定全部，零学习成本",
    placeholder: "✨",
  },
];

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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

export function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background-warm dark:bg-slate-800/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="text-center mb-16 relative z-10"
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
            className="text-foreground-secondary dark:text-gray-300 text-lg max-w-2xl mx-auto relative"
          >
            简洁而不简单，为写作而生的博客构建工具
          </motion.p>
        </motion.div>

        {/* 特性卡片网格 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="card bg-white dark:bg-slate-800 rounded-3xl p-8 h-full border border-transparent dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-500/50 transition-all shadow-lg hover:shadow-xl">
                <div className="flex items-start gap-6">
                  {/* 图标 */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-14 h-14 rounded-2xl bg-gradient-orange flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-200 dark:shadow-orange-900/30"
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* 内容 */}
                  <div className="flex-1">
                    <h3 
                      className="text-xl font-bold mb-2 text-foreground dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-foreground-secondary dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* 占位图区域 */}
                <div className="mt-6 pt-6 border-t border-orange-100 dark:border-gray-700">
                  <div className="bg-orange-50 dark:bg-slate-900 rounded-2xl h-32 flex items-center justify-center">
                    <span className="text-4xl">{feature.placeholder}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
