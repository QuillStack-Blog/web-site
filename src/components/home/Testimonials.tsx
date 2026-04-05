"use client"

import React from 'react'
import { useApp } from '@/contexts/AppContext'
import { t } from '@/lib/i18n'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  quote: string
  avatar: string
}

export function Testimonials() {
  const { language } = useApp()

  const testimonials: Testimonial[] = language === 'en' ? [
    { name: 'Alex Johnson', role: 'Indie Developer', quote: 'QuillStack made building my tech blog incredibly easy. Set it up in minutes and the themes look amazing!', avatar: 'https://placehold.co/100x100/fed7aa/f97316?text=AJ' },
    { name: 'Sarah Chen', role: 'Product Manager', quote: 'As someone non-technical, I could easily set up my own blog. Clear documentation and simple configuration - love it!', avatar: 'https://placehold.co/100x100/fff7ed/f97316?text=SC' },
    { name: 'Michael Zhang', role: 'Frontend Engineer', quote: 'High code quality and great extensibility. I\'ve already customized my own theme based on it - very satisfied!', avatar: 'https://placehold.co/100x100/f97316/ffffff?text=MZ' },
    { name: 'Emma Wang', role: 'Designer', quote: 'The design is exquisite with attention to detail. Finally found a blogging tool that\'s both beautiful and powerful!', avatar: 'https://placehold.co/100x100/fdbA74/f97316?text=EW' },
    { name: 'David Wang', role: 'Full Stack Developer', quote: 'Deploying to Vercel takes just seconds, and the performance optimization is excellent - nearly perfect Lighthouse scores!', avatar: 'https://placehold.co/100x100/ea580c/ffffff?text=DW' },
    { name: 'Lisa Liu', role: 'Content Creator', quote: 'Top-notch Markdown writing experience with automatic TOC and SEO optimization - lets me focus on creating content!', avatar: 'https://placehold.co/100x100/c2410c/ffffff?text=LL' },
  ] : [
    { name: '李明', role: language === 'zh' ? '独立开发者' : '獨立開發者', quote: language === 'zh' ? 'QuillStack 让我的技术博客搭建变得异常简单。几分钟就搞定了，而且主题非常好看！' : 'QuillStack 讓我的技術部落格搭建變得異常簡單。幾分鐘就搞定了，而且主題非常好看！', avatar: 'https://placehold.co/100x100/fed7aa/f97316?text=Li' },
    { name: 'Sarah Chen', role: language === 'zh' ? '产品经理' : '產品經理', quote: language === 'zh' ? '作为一个不懂技术的人，我也能轻松搭建自己的博客。文档清晰，配置简单，太棒了！' : '作為一個不懂技術的人，我也能輕鬆搭建自己的部落格。文件清晰，配置簡單，太棒了！', avatar: 'https://placehold.co/100x100/fff7ed/f97316?text=SC' },
    { name: language === 'zh' ? '张伟' : '張偉', role: language === 'zh' ? '前端工程师' : '前端工程師', quote: language === 'zh' ? '代码质量很高，扩展性也很好。我已经基于它定制了自己的主题，非常满意。' : '程式碼品質很高，擴展性也很好。我已經基於它定制了自己的主題，非常滿意。', avatar: 'https://placehold.co/100x100/f97316/ffffff?text=Zhang' },
    { name: 'Emma Wang', role: language === 'zh' ? '设计师' : '設計師', quote: language === 'zh' ? '设计非常精致，细节处理得很到位。终于找到一个既有颜值又有实力的博客工具了。' : '設計非常精緻，細節處理得很到位。終於找到一個既有顏值又有實力的部落格工具了。', avatar: 'https://placehold.co/100x100/fdbA74/f97316?text=EW' },
    { name: language === 'zh' ? '王强' : '王強', role: language === 'zh' ? '全栈开发者' : '全端開發者', quote: language === 'zh' ? '部署到 Vercel 只需要几秒钟，而且性能优化做得非常好，Lighthouse 分数几乎满分。' : '部署到 Vercel 只需要幾秒鐘，而且效能優化做得非常好，Lighthouse 分數幾乎滿分。', avatar: 'https://placehold.co/100x100/ea580c/ffffff?text=Wang' },
    { name: language === 'zh' ? '刘芳' : '劉芳', role: language === 'zh' ? '内容创作者' : '內容創作者', quote: language === 'zh' ? 'Markdown 写作体验一流，而且自动生成目录和 SEO 优化，让我可以专注于内容创作。' : 'Markdown 寫作體驗一流，而且自動生成目錄和 SEO 優化，讓我可以專注於內容創作。', avatar: 'https://placehold.co/100x100/c2410c/ffffff?text=Liu' },
  ]

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('testimonials.title', language)}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('testimonials.subtitle', language)}</p>
        </motion.div>

        {/* Testimonial cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <Quote className="h-6 w-6 text-primary/30 mb-4" />
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{item.quote}</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={item.avatar} alt={item.name} />
                      <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">{t('testimonials.cta', language)}</p>
          <Button className="bg-gradient-to-r from-primary to-orange-500 hover:opacity-90" size="lg">{t('testimonials.cta.btn', language)}</Button>
        </motion.div>
      </div>
    </section>
  )
}
