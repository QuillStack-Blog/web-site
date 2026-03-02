"use client";

import { motion } from "framer-motion";

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

const techStack = [
  { name: "Next.js", icon: "▲", color: "#000000" },
  { name: "React", icon: "⚛", color: "#61DAFB" },
  { name: "TypeScript", icon: "◈", color: "#3178C6" },
  { name: "Tailwind", icon: "🌊", color: "#06B6D4" },
  { name: "Markdown", icon: "📝", color: "#000000" },
  { name: "Radix UI", icon: "◈", color: "#111111" },
  { name: "Framer Motion", icon: "✦", color: "#FF4081" },
];

export function TechStack() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background-warm">
      <div className="max-w-4xl mx-auto">
        {/* 标题 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            现代技术栈，<span className="text-gradient">性能保证</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-foreground-secondary text-lg"
          >
            基于业界领先技术构建，为你的博客保驾护航
          </motion.p>
        </motion.div>

        {/* 技术栈图标 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-6"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.1,
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
              className="group flex flex-col items-center gap-3"
            >
              <motion.div
                className="w-20 h-20 rounded-2xl bg-background flex items-center justify-center text-3xl shadow-sm border border-border grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                whileHover={{ 
                  boxShadow: "0 8px 30px rgba(249,115,22,0.15)",
                }}
              >
                {tech.icon}
              </motion.div>
              <span className="text-sm font-medium text-foreground-secondary group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
