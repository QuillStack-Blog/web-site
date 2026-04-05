"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { Monitor, Tablet, Smartphone, Shield, Zap, Star } from 'lucide-react'

export function ResponsiveShowcase() {
  const devices = [
    { icon: Monitor, title: '桌面端', desc: '大屏幕沉浸式阅读', tags: ['侧边栏导航', '宽屏布局', '高清图片展示'] },
    { icon: Tablet, title: '平板端', desc: '舒适的中间尺寸体验', tags: ['自适应布局', '触控优化', '适中的字体'] },
    { icon: Smartphone, title: '手机端', desc: '随时随地，优雅阅读', tags: ['汉堡菜单', '底部导航', '快速滑动'] },
  ]

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">全端适配，处处精彩</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">无论使用什么设备，都能获得最佳的阅读体验</p>
        </motion.div>

        {/* Device cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {devices.map((device, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/50 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <device.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">{device.title}</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">{device.desc}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {device.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* PWA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold">PWA 支持</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    支持渐进式 Web 应用，可以像原生应用一样安装到主屏幕，离线也能阅读。
                  </p>
                </div>
                <div className="flex gap-6">
                  {[
                    { value: '100', label: 'Lighthouse' },
                    { value: '<1s', label: '首屏加载' },
                    { value: 'A+', label: '性能评级' },
                  ].map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-bold gradient-text">{metric.value}</div>
                      <div className="text-sm text-muted-foreground mt-1">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
