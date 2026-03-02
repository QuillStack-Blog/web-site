"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* 背景渐变 */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-400 to-orange-300" />
      
      {/* 装饰图案 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-white rotate-45" />
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-white rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6"
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>

          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            准备好开始了吗？
          </h2>
          
          <p className="text-white/90 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            加入数千名用户的行列，用 QuillStack 创建属于你的优雅博客
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/deploy">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
              >
                免费开始使用
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent text-white border-2 border-white/50 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white transition-all"
              >
                了解更多
              </motion.button>
            </Link>
          </div>

          {/* 信任指标 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex items-center justify-center gap-6 text-white/70 text-sm"
          >
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              完全免费
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              开源代码
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              无需信用卡
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
