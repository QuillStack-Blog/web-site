"use client"

import React, { useState } from 'react'
import { useApp } from '@/contexts/AppContext'
import { t } from '@/lib/i18n'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ThemeItem {
  nameKey: string
  descKey: string
  color: string
  features: string[]
}

export function ThemePreview() {
  const { language } = useApp()
  const [activeTheme, setActiveTheme] = useState(0)

  const themes: ThemeItem[] = [
    { nameKey: 'theme.default', descKey: 'theme.default.desc', color: 'from-orange-500 to-orange-300', features: ['theme.default.f1', 'theme.default.f2', 'theme.default.f3'] },
    { nameKey: 'theme.blue', descKey: 'theme.blue.desc', color: 'from-blue-600 to-blue-400', features: ['theme.blue.f1', 'theme.blue.f2', 'theme.blue.f3'] },
    { nameKey: 'theme.green', descKey: 'theme.green.desc', color: 'from-green-600 to-green-400', features: ['theme.green.f1', 'theme.green.f2', 'theme.green.f3'] },
    { nameKey: 'theme.black', descKey: 'theme.black.desc', color: 'from-gray-800 to-gray-600', features: ['theme.black.f1', 'theme.black.f2', 'theme.black.f3'] },
    { nameKey: 'theme.purple', descKey: 'theme.purple.desc', color: 'from-purple-600 to-purple-400', features: ['theme.purple.f1', 'theme.purple.f2', 'theme.purple.f3'] },
    { nameKey: 'theme.pink', descKey: 'theme.pink.desc', color: 'from-pink-500 to-pink-300', features: ['theme.pink.f1', 'theme.pink.f2', 'theme.pink.f3'] },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('theme.preview.title', language)}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('theme.preview.subtitle', language)}</p>
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
                    <h3 className="font-semibold">{t(theme.nameKey, language)}</h3>
                    <p className="text-sm text-muted-foreground">{t(theme.descKey, language)}</p>
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
                      <span>{t('nav.home', language)}</span>
                      <span>{t('usecases.tech', language)}</span>
                      <span>{t('nav.about', language)}</span>
                    </div>
                  </div>
                </div>
                {/* Theme features */}
                <div className="space-y-2">
                  <h5 className="text-sm font-medium mb-3">{t('theme.features.title', language)}</h5>
                  {themes[activeTheme].features.map((featureKey, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className={cn("w-2 h-2 rounded-full bg-gradient-to-r", themes[activeTheme].color)} />
                      {t(featureKey, language)}
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
