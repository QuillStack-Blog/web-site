"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Star, GitFork, Users, Download } from "lucide-react";

const stats = [
  { 
    label: "GitHub Stars", 
    value: 1200, 
    suffix: "+",
    icon: Star,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  { 
    label: "Forks", 
    value: 180, 
    suffix: "",
    icon: GitFork,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  { 
    label: "用户", 
    value: 5000, 
    suffix: "+",
    icon: Users,
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  { 
    label: "下载量", 
    value: 15000, 
    suffix: "+",
    icon: Download,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(value * easeOutQuart));

        if (currentStep >= steps) {
          setCount(value);
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(num >= 10000 ? 0 : 1) + "k";
    }
    return num.toString();
  };

  return (
    <span ref={ref}>
      {formatNumber(count)}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* GitHub 链接横幅 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <a
            href="https://github.com/QuillStack-Blog/QuillStack"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-background-secondary text-foreground rounded-full hover:bg-background-tertiary transition-colors border border-border group"
          >
            <Github className="w-6 h-6" />
            <span className="font-medium">在 GitHub 上支持我们</span>
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              className="group-hover:translate-x-1 transition-transform"
            >
              →
            </motion.span>
          </a>
        </motion.div>

        {/* 统计卡片 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative p-6 rounded-2xl bg-background border border-border hover:border-orange-200 hover:shadow-xl transition-all"
              >
                {/* 图标 */}
                <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>

                {/* 数值 */}
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1" style={{ fontFamily: "var(--font-display)" }}>
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>

                {/* 标签 */}
                <div className="text-foreground-secondary text-sm">
                  {stat.label}
                </div>

                {/* 装饰 */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-orange-200 opacity-50" />
              </motion.div>
            );
          })}
        </div>

        {/* 用户头像展示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center text-white text-xs font-bold"
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <p className="text-foreground-secondary text-sm">
            已有 <span className="text-orange-600 font-bold">5000+</span> 用户选择 QuillStack
          </p>
        </motion.div>
      </div>
    </section>
  );
}
