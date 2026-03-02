"use client";

import { motion } from "framer-motion";
import { Feather } from "lucide-react";

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

export function Story() {
  return (
    <section className="py-16 px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-orange flex items-center justify-center">
            <Feather className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="text-gradient">QuillStack</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-2xl text-foreground-secondary font-medium mb-8"
        >
          让写作回归纯粹
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="prose prose-lg mx-auto text-foreground-secondary"
        >
          <p className="leading-relaxed mb-6">
            QuillStack 诞生于一个简单的信念：每个人都应该拥有一个属于自己的、优雅的写作空间。
            我们不希望技术门槛成为表达的障碍，所以我们将一切都简化到极致——配置一个文件，
            写下你的想法，剩下的交给我们。
          </p>
          <p className="leading-relaxed">
            我们相信，好的工具应该像空气一样自然存在，让你专注于内容本身，
            而不是被繁琐的配置所困扰。
          </p>
        </motion.div>

        {/* 占位图 */}
        <motion.div
          variants={itemVariants}
          className="mt-12"
        >
          <div className="bg-background-warm rounded-3xl p-12 flex items-center justify-center border border-border">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-2xl bg-gradient-orange flex items-center justify-center">
                <span className="text-5xl">✍️</span>
              </div>
              <p className="text-foreground-secondary">写作场景示意</p>
              <p className="text-foreground-subtle text-sm mt-2">600 × 400</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
