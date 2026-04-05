"use client"

import React from 'react'
import { useApp } from '@/contexts/AppContext'
import { t } from '@/lib/i18n'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { Monitor, Tablet, Smartphone, Shield, Zap, Star } from 'lucide-react'

export function ResponsiveShowcase() {
  const { language } = useApp()

  const devices = [
    { icon: Monitor, titleKey: 'responsive.desktop', descKey: 'responsive.desktop.desc', tags: ['responsive.desktop.tag1', 'responsive.desktop.tag2', 'responsive.desktop.tag3'] },
    { icon: Tablet, titleKey: 'responsive.tablet', descKey: 'responsive.tablet.desc', tags: ['responsive.tablet.tag1', 'responsive.tablet.tag2', 'responsive.tablet.tag3'] },
    { icon: Smartphone, titleKey: 'responsive.mobile', descKey: 'responsive.mobile.desc', tags: ['responsive.mobile.tag1', 'responsive.mobile.tag2', 'responsive.mobile.tag3'] },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('responsive.title', language)}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('responsive.subtitle', language)}</p>
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
                  <h3 className="text-lg font-semibold text-center mb-2">{t(device.titleKey, language)}</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">{t(device.descKey, language)}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {device.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">{t(tag, language)}</Badge>
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
                    <h3 className="text-2xl font-bold">{t('responsive.pwa', language)}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {t('responsive.pwa.desc', language)}
                  </p>
                </div>
                <div className="flex gap-6">
                  {[
                    { value: '100', labelKey: 'responsive.pwa.lighthouse' },
                    { value: '<1s', labelKey: 'responsive.pwa.loadtime' },
                    { value: 'A+', labelKey: 'responsive.pwa.rating' },
                  ].map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-bold gradient-text">{metric.value}</div>
                      <div className="text-sm text-muted-foreground mt-1">{t(metric.labelKey, language)}</div>
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
