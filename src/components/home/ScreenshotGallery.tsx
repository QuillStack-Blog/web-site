"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Monitor } from "lucide-react";

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

const screenshots = [
  {
    id: 1,
    title: "博客首页",
    description: "简洁优雅的文章列表",
    url: "https://testingcf.jsdelivr.net/gh/QuillStack-Blog/web-site@main/public/images/home/e9781d3fccfa655655b5861b64457d958dfcce2e.png",
  },
  {
    id: 2,
    title: "文章详情",
    description: "沉浸式的阅读体验",
    url: "https://testingcf.jsdelivr.net/gh/QuillStack-Blog/web-site@main/public/images/home/9e08e8fa7df325ccb556d2cf4cc420abf708b46e.png",
  },
  {
    id: 3,
    title: "分类浏览",
    description: "轻松管理和发现内容",
    url: "https://testingcf.jsdelivr.net/gh/QuillStack-Blog/web-site@main/public/images/home/6ccb60071be8f00760a3824d9f7d0fad57de789f.png",
  },
  {
    id: 4,
    title: "友情链接页面",
    description: "好朋友就要在一起",
    url: "https://testingcf.jsdelivr.net/gh/QuillStack-Blog/web-site@main/public/images/home/ba34b28aa06852bf23d5d30a4742113d49a166dc.png",
  },
  {
    id: 5,
    title: "深色模式",
    description: "护眼夜间阅读",
    url: "https://testingcf.jsdelivr.net/gh/QuillStack-Blog/web-site@main/public/images/home/e7f8b9dcdb12a0a6d3253383f4b684272906ae03.png",
  },
];

export function ScreenshotGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const currentScreenshot = screenshots[currentIndex];

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
            <span className="text-gradient">精美界面</span>，开箱即用
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-foreground-secondary text-lg max-w-2xl mx-auto"
          >
            精心设计的默认主题，让每一个页面都令人赏心悦目
          </motion.p>
        </motion.div>

        {/* 画廊主体 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* 浏览器框架 */}
          <div className="bg-background-secondary rounded-2xl p-3 sm:p-4 shadow-2xl border border-border">
            {/* 浏览器顶部栏 */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-2 sm:mx-4">
                <div className="bg-background rounded-md px-3 py-1 text-xs text-foreground-subtle text-center flex items-center justify-center gap-2 border border-border">
                  <Monitor className="w-3 h-3" />
                  <span className="truncate">quillstack-demo.pages.dev</span>
                </div>
              </div>
              <div className="w-16" />
            </div>

            {/* 图片展示区域 */}
            <div className="relative aspect-[16/9] bg-background-tertiary rounded-lg overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute inset-0"
                >
                  <img
                    src={currentScreenshot.url}
                    alt={currentScreenshot.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* 图片信息覆盖层 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={`info-${currentIndex}`}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6"
              >
                <h3 className="text-white font-bold text-lg sm:text-xl mb-1">
                  {currentScreenshot.title}
                </h3>
                <p className="text-white/80 text-sm sm:text-base">
                  {currentScreenshot.description}
                </p>
              </motion.div>
            </div>
          </div>

          {/* 导航按钮 */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2 sm:-mx-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background shadow-lg flex items-center justify-center text-foreground hover:text-orange-600 pointer-events-auto border border-border"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background shadow-lg flex items-center justify-center text-foreground hover:text-orange-600 pointer-events-auto border border-border"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          </div>

          {/* 指示器 */}
          <div className="flex justify-center gap-2 mt-6">
            {screenshots.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-orange-500"
                    : "w-2 bg-border hover:bg-orange-300"
                }`}
              />
            ))}
          </div>

          {/* 缩略图导航 */}
          <div className="hidden sm:flex justify-center gap-3 mt-6">
            {screenshots.map((screenshot, index) => (
              <motion.button
                key={screenshot.id}
                onClick={() => goToSlide(index)}
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? "border-orange-500 shadow-lg"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={screenshot.url}
                  alt={screenshot.title}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
