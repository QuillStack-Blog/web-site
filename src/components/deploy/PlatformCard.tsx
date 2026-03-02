"use client";

import { motion } from "framer-motion";
import { Star, Zap } from "lucide-react";

interface Platform {
  name: string;
  recommended?: boolean;
  features: string[];
  icon: string;
}

const platforms: Platform[] = [
  {
    name: "Vercel",
    recommended: true,
    features: ["一键部署", "自动 HTTPS", "全球 CDN"],
    icon: "▲",
  },
  {
    name: "Netlify",
    features: ["自动构建", "表单功能", "持续部署"],
    icon: "◆",
  },
  {
    name: "Cloudflare Pages",
    features: ["全球 CDN", "边缘网络", "极速访问"],
    icon: "☁",
  },
];

export function PlatformCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {platforms.map((platform, index) => (
        <motion.div
          key={platform.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -8 }}
          className={`relative rounded-2xl p-6 border transition-all duration-300 ${
            platform.recommended
              ? "bg-gradient-to-br from-orange-50 to-background border-orange-200 shadow-lg"
              : "bg-background border-border hover:border-orange-200 hover:shadow-lg"
          }`}
        >
          {/* 推荐标签 */}
          {platform.recommended && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-orange text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Star className="w-3 h-3" />
                推荐
              </span>
            </div>
          )}

          {/* 平台图标和名称 */}
          <div className="text-center mb-6 mt-2">
            <div className="text-4xl mb-2">{platform.icon}</div>
            <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              {platform.name}
            </h3>
          </div>

          {/* 功能列表 */}
          <ul className="space-y-3">
            {platform.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-foreground-secondary">
                <Zap className="w-4 h-4 text-orange-500" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
