"use client"

import React from 'react'
import { useApp } from '@/contexts/AppContext'
import { t } from '@/lib/i18n'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Zap, Palette, Feather, Sparkles } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  zap: Zap,
  palette: Palette,
  feather: Feather,
  sparkles: Sparkles,
}

export function Features() {
  const { language } = useApp()

  const features = [
    { icon: 'zap', title: t('features.fast', language), desc: t('features.fast.desc', language) },
    { icon: 'palette', title: t('features.theme', language), desc: t('features.theme.desc', language) },
    { icon: 'feather', title: t('features.light', language), desc: t('features.light.desc', language) },
    { icon: 'sparkles', title: t('features.config', language), desc: t('features.config.desc', language) },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">{t('features.title', language)}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('features.subtitle', language)}</p>
        </motion.div>

        {/* Feature cards - flat style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card hover:bg-muted/50 transition-colors">
                  <CardContent className="p-5">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-base font-medium mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
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