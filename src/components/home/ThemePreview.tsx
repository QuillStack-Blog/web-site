"use client"

import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const themes = [
  { name: '默认橙', desc: '温暖活力的橙色主题', color: 'from-orange-500 to-orange-300', features: ['渐变强调色', '温暖背景', '高对比度'] },
  { name: '深海蓝', desc: '沉稳专业的蓝色主题', color: 'from-blue-600 to-blue-400', features: ['专业商务', '清爽视觉', '易于阅读'] },
  { name: '森林绿', desc: '自然清新的绿色主题', color: 'from-green-600 to-green-400', features: ['护眼配色', '自然气息', '舒适阅读'] },
  { name: '深邃黑', desc: '现代感十足的深色主题', color: 'from-gray-800 to-gray-600', features: ['夜间模式', '低对比度', '护眼设计'] },
  { name: '薰衣草', desc: '优雅浪漫的紫色主题', color: 'from-purple-600 to-purple-400', features: ['优雅配色', '柔和视觉', '艺术气息'] },
  { name: '玫瑰粉', desc: '甜美温柔的粉色主题', color: 'from-pink-500 to-pink-300', features: ['温暖甜美', '亲和力', '女性向'] },
]

export function ThemePreview() {
  const [activeTheme, setActiveTheme] = useState(0)

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">多种主题，随心切换</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">内置多款精美主题，一键切换，还支持自定义配色</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Theme selector */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {themes.map((theme, index) => (
              <button
                key={index}
                onClick={() => setActiveTheme(index)}
                className={cn(
                  "w-full text-left p-4 rounded-xl transition-all duration-300 border",
                  activeTheme === index
                    ? "bg-card border-primary/50 shadow-md"
                    : "bg-card/50 border-border/50 hover:border-primary/30"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn("w-12 h-12 rounded-lg bg-gradient-to-br", theme.color)} />
                  <div>
                    <h3 className="font-semibold">{theme.name}</h3>
                    <p className="text-sm text-muted-foreground">{theme.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden bg-card/50 backdrop-blur border-border/50">
              {/* Browser mockup */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background/80 rounded-md px-3 py-1.5 text-sm text-muted-foreground text-center">
                    https://quillstack-demo.pages.dev
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={cn("w-10 h-10 rounded-full bg-gradient-to-br", themes[activeTheme].color)} />
                  <div>
                    <h4 className="font-semibold">My Blog</h4>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span>首页</span>
                      <span>文章</span>
                      <span>关于</span>
                    </div>
                  </div>
                </div>
                {/* Theme features */}
                <div className="space-y-2">
                  <h5 className="text-sm font-medium mb-3">主题特性</h5>
                  {themes[activeTheme].features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className={cn("w-2 h-2 rounded-full bg-gradient-to-r", themes[activeTheme].color)} />
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
