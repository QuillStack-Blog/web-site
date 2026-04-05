"use client"

import React from 'react'
import { useApp } from '@/contexts/AppContext'
import { t } from '@/lib/i18n'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { FileText, Tags, Smartphone, Search, Image, Zap, Palette } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  filetext: FileText,
  tags: Tags,
  smartphone: Smartphone,
  search: Search,
  image: Image,
  zap: Zap,
  palette: Palette,
}

export function FeatureList() {
  const { language } = useApp()

  const features = language === 'en' ? [
    { icon: 'filetext', title: 'Markdown Writing', desc: 'Full Markdown syntax support' },
    { icon: 'tags', title: 'Categories & Tags', desc: 'Organize your articles flexibly' },
    { icon: 'smartphone', title: 'Responsive Design', desc: 'Perfect reading on any device' },
    { icon: 'search', title: 'SEO Optimized', desc: 'Auto sitemap, social card generation' },
    { icon: 'image', title: 'OG Image Generation', desc: 'Auto-generate article share preview' },
    { icon: 'zap', title: 'Lightning Fast', desc: 'Lighthouse perfect score optimization' },
    { icon: 'palette', title: 'Theme Customization', desc: 'JSON config, instant effect' },
  ] : [
    { icon: 'filetext', title: language === 'zh' ? 'Markdown 写作' : 'Markdown 寫作', desc: language === 'zh' ? '支持完整 Markdown 语法' : '支援完整 Markdown 語法' },
    { icon: 'tags', title: language === 'zh' ? '分类与标签' : '分類與標籤', desc: language === 'zh' ? '灵活组织你的文章' : '靈活組織你的文章' },
    { icon: 'smartphone', title: language === 'zh' ? '响应式设计' : '響應式設計', desc: language === 'zh' ? '在任何设备上完美阅读' : '在任何設備上完美閱讀' },
    { icon: 'search', title: language === 'zh' ? 'SEO 优化' : 'SEO 優化', desc: language === 'zh' ? '自动 sitemap，社交卡片生成' : '自動 sitemap，社交卡片生成' },
    { icon: 'image', title: language === 'zh' ? 'OG 图片生成' : 'OG 圖片生成', desc: language === 'zh' ? '自动生成文章分享预览图' : '自動生成文章分享預覽圖' },
    { icon: 'zap', title: language === 'zh' ? '极速性能' : '極速性能', desc: language === 'zh' ? 'Lighthouse 满分优化' : 'Lighthouse 滿分優化' },
    { icon: 'palette', title: language === 'zh' ? '主题自定义' : '主題自定義', desc: language === 'zh' ? 'JSON 配置，即时生效' : 'JSON 配置，即時生效' },
  ]

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.features', language)}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/50 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
