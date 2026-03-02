"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useSpring, useTransform } from "framer-motion";
import { Feather, Github, Menu, X } from "lucide-react";

const navItems = [
  { label: "首页", href: "/" },
  { label: "部署", href: "/deploy" },
  { label: "关于", href: "/about" },
];

export function FloatingIsland() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // 使用 useScroll 监听滚动
  const { scrollY } = useScroll();
  
  // 使用 spring 动画让过渡更平滑
  const springConfig = { stiffness: 100, damping: 20, mass: 0.5 };
  
  // 根据滚动位置计算导航栏的位置
  // 初始位置在 top-14 (56px)，滚动后固定在 top-5 (20px)
  const navTop = useTransform(scrollY, [0, 100], [56, 20]);
  const smoothNavTop = useSpring(navTop, springConfig);
  
  // 根据滚动位置计算缩放和透明度
  const navScale = useTransform(scrollY, [0, 100], [1, 0.95]);
  const smoothNavScale = useSpring(navScale, springConfig);
  

  
  // 监听滚动位置更新状态
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      {/* 桌面端导航 */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        className="fixed left-0 right-0 z-50 flex justify-center px-4"
        style={{ top: smoothNavTop }}
      >
        <motion.nav
          style={{ 
            scale: smoothNavScale
          }}
          className={`floating-island rounded-full px-8 py-3.5 flex items-center justify-between gap-8 transition-all duration-300 ${
            isScrolled ? "shadow-lg" : ""
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-8 h-8 rounded-lg bg-gradient-orange flex items-center justify-center"
            >
              <Feather className="w-5 h-5 text-white" />
            </motion.div>
            <span 
              className="font-bold text-lg text-foreground dark:text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              QuillStack
            </span>
          </Link>

          {/* 导航链接 */}
          <div className="hidden md:flex items-center gap-2 relative">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium transition-colors duration-200"
                >
                  <span 
                    className={`px-2 py-1 rounded-md transition-colors ${isActive 
                      ? "text-orange-600 dark:text-orange-400" 
                      : "text-foreground-secondary dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-700/30"
                    }`}
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-orange-500 rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* GitHub 链接 */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-orange-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <Github className="w-5 h-5 text-foreground-secondary dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400" />
            </motion.a>
          </div>

          {/* 移动端菜单按钮 */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-orange-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground dark:text-white" />
            ) : (
              <Menu className="w-5 h-5 text-foreground dark:text-white" />
            )}
          </motion.button>
        </motion.nav>
      </motion.header>

      {/* 移动端菜单 */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed top-24 left-4 right-4 z-40 md:hidden"
          >
            <div className="floating-island rounded-2xl p-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                          : "text-foreground-secondary dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700/50 hover:text-orange-600 dark:hover:text-orange-400"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <hr className="border-orange-100 dark:border-gray-700 my-2" />
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-foreground-secondary dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700/50 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
