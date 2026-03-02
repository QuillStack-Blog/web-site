"use client";

import { motion } from "framer-motion";
import { Github, MessageCircle, Lightbulb, Heart } from "lucide-react";

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

const links = [
  { 
    icon: Github, 
    label: "GitHub", 
    sublabel: "⭐ Star",
    href: "https://github.com",
    color: "hover:bg-gray-900 hover:text-white"
  },
  { 
    icon: MessageCircle, 
    label: "问题反馈", 
    sublabel: "🐛 Issues",
    href: "https://github.com/issues",
    color: "hover:bg-orange-500 hover:text-white"
  },
  { 
    icon: Lightbulb, 
    label: "功能建议", 
    sublabel: "💡 Discussions",
    href: "https://github.com/discussions",
    color: "hover:bg-blue-500 hover:text-white"
  },
];

export function Community() {
  return (
    <section className="py-16 px-4 bg-background-warm">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center mb-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          加入社区
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group bg-background rounded-2xl p-6 border border-border flex flex-col items-center text-center transition-all duration-300 ${link.color}`}
            >
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                <link.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-lg mb-1">{link.label}</h3>
              <p className="text-sm text-foreground-muted group-hover:text-white/80 transition-colors">
                {link.sublabel}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-foreground-muted flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Bqiu
          </p>
        </motion.div>
      </div>
    </section>
  );
}
