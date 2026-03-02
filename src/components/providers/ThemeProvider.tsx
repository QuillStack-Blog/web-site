"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "system",
  setTheme: () => {},
  resolvedTheme: "light",
  toggleTheme: () => {},
  mounted: false,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // 初始化主题
  useEffect(() => {
    setMounted(true);
    
    // 从 localStorage 读取主题设置
    const savedTheme = localStorage.getItem("quillstack-theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // 监听主题变化
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

    const resolveTheme = () => {
      if (theme === "system") {
        return systemDark.matches ? "dark" : "light";
      }
      return theme;
    };

    const newResolvedTheme = resolveTheme();
    setResolvedTheme(newResolvedTheme);

    if (newResolvedTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // 保存到 localStorage
    localStorage.setItem("quillstack-theme", theme);
  }, [theme, mounted]);

  // 监听系统主题变化
  useEffect(() => {
    if (!mounted || theme !== "system") return;

    const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const newTheme = systemDark.matches ? "dark" : "light";
      setResolvedTheme(newTheme);
      
      const root = document.documentElement;
      if (newTheme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    systemDark.addEventListener("change", handleChange);
    return () => systemDark.removeEventListener("change", handleChange);
  }, [theme, mounted]);

  const toggleTheme = () => {
    if (resolvedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
