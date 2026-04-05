"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { Check, X, Minus, Package } from 'lucide-react'

const features = [
  { name: '免费开源', quillstack: true, wordpress: true, notion: 'partial', medium: true, ghost: false },
  { name: '自定义域名', quillstack: true, wordpress: true, notion: 'partial', medium: false, ghost: true },
  { name: '无广告', quillstack: true, wordpress: 'partial', notion: true, medium: false, ghost: true },
  { name: 'Markdown 支持', quillstack: true, wordpress: 'partial', notion: true, medium: true, ghost: true },
  { name: '代码高亮', quillstack: true, wordpress: 'plugin', notion: true, medium: true, ghost: true },
  { name: '数学公式', quillstack: true, wordpress: 'plugin', notion: true, medium: false, ghost: true },
  { name: 'SEO 优化', quillstack: true, wordpress: 'plugin', notion: 'partial', medium: true, ghost: true },
  { name: '评论系统', quillstack: true, wordpress: true, notion: false, medium: true, ghost: true },
  { name: '快速部署', quillstack: true, wordpress: false, notion: true, medium: true, ghost: false },
  { name: '版本控制', quillstack: true, wordpress: false, notion: 'partial', medium: false, ghost: false },
  { name: '无需数据库', quillstack: true, wordpress: false, notion: true, medium: true, ghost: false },
  { name: '静态导出', quillstack: true, wordpress: false, notion: false, medium: false, ghost: false },
]

function StatusIcon({ status }: { status: boolean | string }) {
  if (status === true) return <Check className="h-4 w-4 text-green-500" />
  if (status === false) return <X className="h-4 w-4 text-red-500" />
  if (status === 'partial') return <Minus className="h-4 w-4 text-yellow-500" />
  if (status === 'plugin') return <Package className="h-4 w-4 text-blue-500" />
  return null
}

export function Comparison() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">为什么选择 QuillStack？</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">对比主流博客平台，QuillStack 在简洁性和功能性之间找到了完美平衡</p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden bg-card/50 backdrop-blur border-border/50">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/50 bg-muted/30">
                      <th className="text-left p-4 font-medium">功能特性</th>
                      <th className="p-4 font-medium text-primary">QuillStack</th>
                      <th className="p-4 font-medium text-muted-foreground">WordPress</th>
                      <th className="p-4 font-medium text-muted-foreground">Notion</th>
                      <th className="p-4 font-medium text-muted-foreground">Medium</th>
                      <th className="p-4 font-medium text-muted-foreground">Ghost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((feature, index) => (
                      <tr
                        key={index}
                        className={`border-b border-border/30 ${index % 2 === 0 ? 'bg-muted/10' : ''} hover:bg-muted/20 transition-colors`}
                      >
                        <td className="p-4 font-medium">{feature.name}</td>
                        <td className="p-4 text-center"><StatusIcon status={feature.quillstack} /></td>
                        <td className="p-4 text-center"><StatusIcon status={feature.wordpress} /></td>
                        <td className="p-4 text-center"><StatusIcon status={feature.notion} /></td>
                        <td className="p-4 text-center"><StatusIcon status={feature.medium} /></td>
                        <td className="p-4 text-center"><StatusIcon status={feature.ghost} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-6 justify-center text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-green-500" />
              <span>支持</span>
            </div>
            <div className="flex items-center gap-1.5">
              <X className="h-3.5 w-3.5 text-red-500" />
              <span>不支持</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Minus className="h-3.5 w-3.5 text-yellow-500" />
              <span>部分支持/需插件</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
