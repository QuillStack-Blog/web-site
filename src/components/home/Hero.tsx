"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  heroTitle, 
  heroSubtitle, 
  heroImage 
} from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-orange-200 dark:bg-orange-900/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 dark:opacity-20 animate-blob" />
        <div className="absolute top-32 right-10 w-72 h-72 bg-orange-300 dark:bg-orange-800/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-20 dark:opacity-15 animate-blob animation-delay-2000" />
        <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-orange-100 dark:bg-orange-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-40 dark:opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* 标题区域 - 在预览容器上方 */}
      <div className="relative z-[70] text-center mb-4 mt-[20vh]">
        {/* 主标题 */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={heroTitle}
          className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-3 tracking-tight relative z-[80]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="text-gradient">QuillStack</span>
        </motion.h1>

        {/* 分隔线 */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="w-32 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto mb-4"
        />

        {/* Slogan */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={heroSubtitle}
          className="text-xl sm:text-2xl text-foreground-secondary font-medium mb-2"
        >
          更轻 · 更快 · 更美
        </motion.p>

        {/* 副标题 */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={heroSubtitle}
          className="text-base text-foreground-muted max-w-xl mx-auto"
        >
          几分钟搭建，一辈子受益的个人博客
        </motion.p>
      </div>

      {/* 3D 浏览器预览 */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroImage}
        className="relative z-10"
        style={{ perspective: "1000px" }}
      >
        <div
          className="relative"
          style={{
            width: "1400px",
            height: "800px",
            maxWidth: "95vw",
            transform: "rotateX(30deg) translateY(-15%)",
            transformOrigin: "center bottom",
            transformStyle: "preserve-3d",
          }}
        >
          {/* 桌面阴影 */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[70%] h-20 bg-black/30 blur-2xl rounded-full" />
          
          {/* 浏览器容器 */}
          <div 
            className="w-full h-full rounded-xl overflow-hidden border border-gray-300 dark:border-gray-600"
            style={{
              boxShadow: "0 60px 120px -40px rgba(0,0,0,0.5), 0 30px 60px -20px rgba(0,0,0,0.3), inset 0 2px 6px 0 rgba(255,255,255,0.15)",
              background: "linear-gradient(180deg, #f5f5f5 0%, #e0e0e0 100%)",
            }}
          >
            {/* 浏览器顶部栏 */}
            <div className="h-[6%] bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 px-4 flex items-center gap-3 border-b border-gray-300 dark:border-gray-600">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400 shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-green-400 shadow-sm" />
              </div>
              <div className="flex-1 max-w-md mx-auto">
                <div className="bg-white dark:bg-gray-900 rounded-md px-4 py-1 text-xs text-gray-500 text-center border border-gray-200 dark:border-gray-700 shadow-inner">
                  your-blog.com
                </div>
              </div>
            </div>
            
            {/* 预览内容 - 图片填满 */}
            <div className="relative w-full h-[94%] bg-white dark:bg-gray-900 overflow-hidden">
              <img 
                src="https://testingcf.jsdelivr.net/gh/QuillStack-Blog/web-site@main/public/images/home/17f5d4f0fb0dc9752cb7d21eca6aab2f6d3dcfbe.png" 
                alt="博客预览图" 
                className="w-full h-full object-cover"
              />
              {/* 屏幕反光效果 */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/20 pointer-events-none" />
            </div>
          </div>

          {/* 底座阴影 */}
          <div 
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[60%] h-6 bg-gradient-to-b from-gray-400/50 to-transparent rounded-full blur-md"
          />
        </div>
      </motion.div>
    </section>
  );
}

