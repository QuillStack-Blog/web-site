"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const configCode = `{
  "siteTitle": "我的博客",
  "author": {
    "name": "作者名",
    "avatar": "/avatar.png",
    "bio": "热爱写作，记录生活"
  },
  "theme": {
    "primaryColor": "#f97316",
    "fontFamily": "Inter"
  },
  "social": {
    "github": "yourname",
    "twitter": "@yourname"
  }
}`;

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

export function ConfigPreview() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
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
            一个配置文件，<span className="text-gradient">搞定一切</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-foreground-secondary dark:text-gray-300 text-lg max-w-2xl mx-auto"
          >
            无需复杂设置，一个 JSON 文件即可配置你的整个博客
          </motion.p>
        </motion.div>

        {/* 代码与预览 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
        >
          {/* 代码块 */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="code-block text-sm leading-relaxed">
              {/* 文件名标签 */}
              <div className="absolute top-0 left-0 right-0 bg-background-tertiary px-4 py-2 rounded-t-lg flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-400" />
                <span className="text-orange-200 text-xs">settings.json</span>
              </div>
              
              {/* 代码内容 */}
              <pre className="pt-10 overflow-x-auto">
                <code>{configCode}</code>
              </pre>
            </div>
            
            <p className="text-center text-sm text-foreground-subtle mt-4">
              代码块高亮
            </p>
          </motion.div>

          {/* 预览图 */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="bg-background-warm rounded-2xl p-8 h-full flex items-center justify-center border border-border">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-orange flex items-center justify-center shadow-lg">
                  <span className="text-4xl">📝</span>
                </div>
                <p className="text-foreground-secondary font-medium">预览效果</p>
                <p className="text-foreground-subtle text-sm mt-2">500 × 400</p>
              </div>
            </div>
            
            <p className="text-center text-sm text-foreground-subtle mt-4">
              实时预览
            </p>
          </motion.div>
        </motion.div>

        {/* CTA 按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary inline-flex items-center gap-2"
            >
              查看完整配置文档
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
