import { Variants, Transition } from "framer-motion";

// 页面过渡动画
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
};

// 滚动触发动画
export const scrollReveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

// 卡片悬停动画
export const cardHover = {
  rest: { 
    y: 0, 
    boxShadow: "0 4px 20px rgba(249,115,22,0.08)",
    transition: { type: "spring" as const, stiffness: 300, damping: 20 }
  },
  hover: { 
    y: -8, 
    boxShadow: "0 12px 40px rgba(249,115,22,0.15)",
    transition: { type: "spring" as const, stiffness: 300, damping: 20 }
  },
};

// Tab 指示器动画
export const tabIndicator: Variants = {
  initial: { opacity: 0, scaleX: 0 },
  animate: { 
    opacity: 1, 
    scaleX: 1,
    transition: { type: "spring" as const, stiffness: 500, damping: 30 }
  },
};

// 交错子元素动画
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 }
  },
};

// 导航栏动画
export const navSlideIn: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring" as const, 
      stiffness: 100, 
      damping: 15,
      delay: 0.2 
    }
  },
};

// 导航滚动状态
export const navScrollState: Variants = {
  scrolled: { 
    scale: 0.95, 
    opacity: 0.9,
    transition: { type: "spring" as const, stiffness: 300, damping: 25 }
  },
  top: { 
    scale: 1, 
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 25 }
  },
};

// Hero 区域动画
export const heroLogoSpin: Variants = {
  hidden: { opacity: 0, rotate: -180, scale: 0.5 },
  visible: { 
    opacity: 1, 
    rotate: 0, 
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15, delay: 0.1 }
  },
};

export const heroTitle: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 15, delay: 0.2 }
  },
};

export const heroSubtitle: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 15, delay: 0.3 }
  },
};

export const heroButtons: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring" as const, stiffness: 150, damping: 12, delay: 0.4 }
  },
};

export const heroImage: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring" as const, stiffness: 80, damping: 15, delay: 0.5 }
  },
};

// 弹簧动画配置
export const springTransition: Transition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
};

export const springBounce: Transition = {
  type: "spring" as const,
  stiffness: 150,
  damping: 12,
};
