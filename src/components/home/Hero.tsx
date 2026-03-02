"use client";

import { motion } from "framer-motion";
import { Feather, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { 
  heroLogoSpin, 
  heroTitle, 
  heroSubtitle, 
  heroButtons, 
  heroImage 
} from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-8">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-200 dark:bg-orange-900/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 dark:opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-300 dark:bg-orange-800/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-20 dark:opacity-15 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-orange-100 dark:bg-orange-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-40 dark:opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* 内容 */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo 图标 */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroLogoSpin}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-gradient-orange flex items-center justify-center shadow-lg shadow-orange-200 dark:shadow-orange-900/50">
              <Feather className="w-10 h-10 text-white" />
            </div>
            {/* 光晕效果 */}
            <div className="absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-orange opacity-50 blur-xl -z-10" />
          </div>
        </motion.div>

        {/* 主标题 */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={heroTitle}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="text-gradient">QuillStack</span>
        </motion.h1>

        {/* 分隔线 */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="w-32 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto mb-6"
        />

        {/* Slogan */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={heroSubtitle}
          className="text-xl sm:text-2xl text-foreground-secondary font-medium mb-4"
        >
          轻快写作，优雅呈现
        </motion.p>

        {/* 副标题 */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={heroSubtitle}
          className="text-base sm:text-lg text-foreground-muted mb-10 max-w-2xl mx-auto"
        >
          几分钟搭建，一辈子受益的个人博客
        </motion.p>

        {/* 按钮组 */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroButtons}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/deploy">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary flex items-center gap-2 text-base"
            >
              立即开始
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
          
          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary flex items-center gap-2 text-base"
            >
              <BookOpen className="w-4 h-4" />
              查看文档
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* 预览图占位 */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroImage}
        className="relative z-10 mt-16 w-full max-w-5xl mx-auto"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-orange-100 dark:shadow-black/50 border border-orange-100 dark:border-gray-700">
          {/* 浏览器样式顶部栏 */}
          <div className="bg-orange-50 dark:bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-orange-100 dark:border-gray-700">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-orange-300 dark:bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-orange-200 dark:bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-orange-100 dark:bg-green-400" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-white dark:bg-gray-900 rounded-md px-3 py-1 text-xs text-foreground-muted text-center border border-orange-100 dark:border-gray-600">
                your-blog.com
              </div>
            </div>
          </div>
          
          {/* 预览内容 */}
          <div className="bg-white dark:bg-gray-900 p-8 min-h-[300px] flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-2xl bg-orange-50 dark:bg-gray-800 flex items-center justify-center">
                <Feather className="w-16 h-16 text-orange-300 dark:text-orange-600" />
              </div>
              <p className="text-foreground-secondary text-lg font-medium">博客预览图</p>
              <p className="text-foreground-muted text-sm mt-2">1200 × 600</p>
            </div>
          </div>
        </div>
        
        {/* 底部阴影 */}
        <div className="absolute -bottom-4 left-4 right-4 h-8 bg-gradient-orange opacity-20 blur-2xl rounded-full" />
      </motion.div>
    </section>
  );
}
