"use client";

import { motion } from "framer-motion";
import { Monitor, Tablet, Smartphone, Check } from "lucide-react";

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

const devices = [
  {
    name: "桌面端",
    icon: Monitor,
    description: "大屏幕沉浸式阅读",
    features: ["侧边栏导航", "宽屏布局", "高清图片展示"],
  },
  {
    name: "平板端",
    icon: Tablet,
    description: "舒适的中间尺寸体验",
    features: ["自适应布局", "触控优化", "适中的字体"],
  },
  {
    name: "手机端",
    icon: Smartphone,
    description: "随时随地，优雅阅读",
    features: ["汉堡菜单", "底部导航", "快速滑动"],
  },
];

export function ResponsiveShowcase() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background-warm overflow-hidden">
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
            <span className="text-gradient">全端适配</span>，处处精彩
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-foreground-secondary text-lg max-w-2xl mx-auto"
          >
            无论使用什么设备，都能获得最佳的阅读体验
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 设备可视化 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] flex items-end justify-center"
          >
            {/* 桌面显示器 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="absolute bottom-0 left-0 right-0 mx-auto w-full max-w-lg"
            >
              <div className="bg-background-secondary rounded-t-xl p-2 pb-0 border border-border">
                <div className="bg-background rounded-t-lg overflow-hidden">
                  {/* 浏览器内容 */}
                  <div className="bg-background-warm px-3 py-2 flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-orange-300" />
                      <div className="w-2 h-2 rounded-full bg-orange-200" />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="w-3/4 h-3 bg-border rounded mb-3" />
                    <div className="w-full h-2 bg-background-tertiary rounded mb-2" />
                    <div className="w-5/6 h-2 bg-background-tertiary rounded" />
                  </div>
                </div>
              </div>
              <div className="bg-background-tertiary h-4 rounded-b-lg" />
              <div className="bg-border h-8 w-24 mx-auto rounded-b-lg" />
            </motion.div>

            {/* 平板 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-0 left-0 w-48 z-10"
            >
              <div className="bg-background-secondary rounded-2xl p-2 border border-border">
                <div className="bg-background rounded-xl overflow-hidden aspect-[3/4]">
                  <div className="bg-background-warm p-2">
                    <div className="w-4 h-4 rounded bg-orange-300 mb-2" />
                  </div>
                  <div className="p-3">
                    <div className="w-full h-16 bg-background-tertiary rounded mb-3" />
                    <div className="w-3/4 h-2 bg-border rounded mb-2" />
                    <div className="w-full h-2 bg-background-tertiary rounded" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 手机 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute bottom-0 right-0 w-32 z-20"
            >
              <div className="bg-background-secondary rounded-[2rem] p-1.5 border border-border">
                <div className="bg-background rounded-[1.5rem] overflow-hidden aspect-[9/16]">
                  <div className="bg-background-warm p-2 flex justify-between items-center">
                    <div className="w-3 h-3 rounded bg-orange-300" />
                    <div className="w-8 h-1 rounded bg-border" />
                    <div className="w-3 h-3" />
                  </div>
                  <div className="p-2">
                    <div className="w-full h-12 bg-background-tertiary rounded mb-2" />
                    <div className="w-3/4 h-1.5 bg-border rounded mb-1.5" />
                    <div className="w-full h-1.5 bg-background-tertiary rounded" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* 设备特性说明 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {devices.map((device, index) => {
              const Icon = device.icon;
              return (
                <motion.div
                  key={device.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="flex gap-4 p-4 rounded-xl bg-background border border-border hover:border-orange-300 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-orange flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1 text-foreground">{device.name}</h3>
                    <p className="text-foreground-secondary text-sm mb-3">
                      {device.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {device.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1 text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded-full"
                        >
                          <Check className="w-3 h-3" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* 额外信息 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-8 p-6 bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl text-white"
            >
              <h4 className="font-bold text-lg mb-2">PWA 支持</h4>
              <p className="text-white/90 text-sm mb-4">
                支持渐进式 Web 应用，可以像原生应用一样安装到主屏幕，离线也能阅读。
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">100</div>
                  <div className="text-xs text-white/70">Lighthouse</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">&lt;1s</div>
                  <div className="text-xs text-white/70">首屏加载</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">A+</div>
                  <div className="text-xs text-white/70">性能评级</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
