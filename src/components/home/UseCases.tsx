"use client";

import { motion } from "framer-motion";
import { BookOpen, Code, Coffee, Briefcase, Camera, Music } from "lucide-react";

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

const useCases = [
  {
    icon: BookOpen,
    title: "技术博客",
    description: "分享编程心得、技术教程和项目经验",
    image: "https://placehold.co/400x250/1f2937/f97316?text=Tech+Blog",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Coffee,
    title: "生活随笔",
    description: "记录日常点滴、读书笔记和旅行见闻",
    image: "https://placehold.co/400x250/fff7ed/f97316?text=Lifestyle",
    color: "from-orange-400 to-orange-500",
  },
  {
    icon: Briefcase,
    title: "作品集",
    description: "展示设计作品、项目案例和专业成就",
    image: "https://placehold.co/400x250/f0fdf4/22c55e?text=Portfolio",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Code,
    title: "开源文档",
    description: "为开源项目创建精美的文档网站",
    image: "https://placehold.co/400x250/0f172a/38bdf8?text=Documentation",
    color: "from-sky-500 to-sky-600",
  },
  {
    icon: Camera,
    title: "摄影集",
    description: "展示摄影作品，分享拍摄技巧和后期心得",
    image: "https://placehold.co/400x250/fdf4ff/a855f7?text=Photography",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Music,
    title: "创作日志",
    description: "音乐创作、艺术创作的过程记录",
    image: "https://placehold.co/400x250/fff1f2/f43f5e?text=Creative",
    color: "from-rose-500 to-rose-600",
  },
];

export function UseCases() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background-warm">
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
            多种<span className="text-gradient">用途</span>，无限可能
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-foreground-secondary text-lg max-w-2xl mx-auto"
          >
            无论是技术博客、生活随笔还是作品集，QuillStack 都能完美胜任
          </motion.p>
        </motion.div>

        {/* 用途卡片网格 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={useCase.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative bg-background rounded-2xl overflow-hidden border border-border hover:border-orange-200 hover:shadow-xl transition-all"
              >
                {/* 图片 */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${useCase.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                </div>

                {/* 内容 */}
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-orange-600 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-foreground-secondary text-sm">
                    {useCase.description}
                  </p>
                </div>

                {/* 悬停指示 */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
