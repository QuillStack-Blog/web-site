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

  const features = [
    { icon: 'filetext', titleKey: 'featurelist.markdown.title', descKey: 'featurelist.markdown.desc' },
    { icon: 'tags', titleKey: 'featurelist.categories.title', descKey: 'featurelist.categories.desc' },
    { icon: 'smartphone', titleKey: 'featurelist.responsive.title', descKey: 'featurelist.responsive.desc' },
    { icon: 'search', titleKey: 'featurelist.seo.title', descKey: 'featurelist.seo.desc' },
    { icon: 'image', titleKey: 'featurelist.ogimage.title', descKey: 'featurelist.ogimage.desc' },
    { icon: 'zap', titleKey: 'featurelist.performance.title', descKey: 'featurelist.performance.desc' },
    { icon: 'palette', titleKey: 'featurelist.theme.title', descKey: 'featurelist.theme.desc' },
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
                    <h3 className="text-lg font-semibold mb-2">{t(feature.titleKey, language)}</h3>
                    <p className="text-sm text-muted-foreground">{t(feature.descKey, language)}</p>
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
