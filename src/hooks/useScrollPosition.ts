"use client";

import { useState, useEffect } from "react";

interface ScrollPosition {
  scrollY: number;
  scrollDirection: "up" | "down" | null;
  isScrolled: boolean;
}

export function useScrollPosition(threshold: number = 50): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollY: 0,
    scrollDirection: null,
    isScrolled: false,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY ? "down" : "up";
      
      setScrollPosition({
        scrollY: currentScrollY,
        scrollDirection,
        isScrolled: currentScrollY > threshold,
      });

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    
    // 初始状态
    updateScrollPosition();

    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrollPosition;
}
