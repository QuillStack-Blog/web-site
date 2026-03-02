"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

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

const videoThumbnails = [
  {
    id: 1,
    title: "5 分钟快速上手",
    duration: "05:23",
    thumbnail: "https://placehold.co/800x450/1f2937/f97316?text=Quick+Start+Tutorial",
    description: "从零开始搭建你的第一个博客",
  },
  {
    id: 2,
    title: "主题自定义指南",
    duration: "08:15",
    thumbnail: "https://placehold.co/800x450/fed7aa/f97316?text=Theme+Customization",
    description: "打造独一无二的个人风格",
  },
  {
    id: 3,
    title: "Markdown 写作技巧",
    duration: "06:42",
    thumbnail: "https://placehold.co/800x450/fff7ed/f97316?text=Markdown+Tips",
    description: "提升写作效率的实用技巧",
  },
];

export function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const currentVideo = videoThumbnails[activeVideo];

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
            视频<span className="text-gradient">教程</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-foreground-secondary text-lg max-w-2xl mx-auto"
          >
            跟着视频一步步学习，快速掌握 QuillStack
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 主视频播放器 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-background-secondary rounded-2xl overflow-hidden shadow-2xl border border-border">
              {/* 视频区域 */}
              <div className="relative aspect-video bg-background-tertiary">
                <img
                  src={currentVideo.thumbnail}
                  alt={currentVideo.title}
                  className="w-full h-full object-cover"
                />
                
                {/* 播放按钮覆盖层 */}
                {!isPlaying && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-lg hover:bg-orange-600 transition-colors"
                    >
                      <Play className="w-8 h-8 ml-1" />
                    </motion.button>
                  </div>
                )}

                {/* 模拟播放中的效果 */}
                {isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                      <p className="text-sm">视频加载中...</p>
                    </div>
                  </div>
                )}

                {/* 控制栏 */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  {/* 进度条 */}
                  <div className="w-full h-1 bg-white/20 rounded-full mb-4 overflow-hidden">
                    <div className="w-1/3 h-full bg-orange-500 rounded-full" />
                  </div>
                  
                  {/* 控制按钮 */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="text-white hover:text-orange-400 transition-colors"
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                      </button>
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="text-white hover:text-orange-400 transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </button>
                      <span className="text-white/80 text-sm">02:15 / {currentVideo.duration}</span>
                    </div>
                    <button className="text-white hover:text-orange-400 transition-colors">
                      <Maximize className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* 视频信息 */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{currentVideo.title}</h3>
                <p className="text-foreground-secondary">{currentVideo.description}</p>
              </div>
            </div>
          </motion.div>

          {/* 视频列表 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "var(--font-display)" }}>
              播放列表
            </h3>
            {videoThumbnails.map((video, index) => (
              <motion.button
                key={video.id}
                onClick={() => {
                  setActiveVideo(index);
                  setIsPlaying(false);
                }}
                whileHover={{ x: 4 }}
                className={`w-full flex gap-4 p-3 rounded-xl text-left transition-all ${
                  index === activeVideo
                    ? "bg-orange-50 border border-orange-200"
                    : "bg-background border border-border hover:border-orange-200"
                }`}
              >
                {/* 缩略图 */}
                <div className="relative w-28 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
                    {video.duration}
                  </div>
                  {index === activeVideo && (
                    <div className="absolute inset-0 bg-orange-500/20 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                        <Play className="w-4 h-4 text-white ml-0.5" />
                      </div>
                    </div>
                  )}
                </div>

                {/* 信息 */}
                <div className="flex-1 min-w-0">
                  <h4 className={`font-medium text-sm mb-1 truncate ${
                    index === activeVideo ? "text-orange-600" : "text-foreground"
                  }`}>
                    {video.title}
                  </h4>
                  <p className="text-xs text-foreground-subtle line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
