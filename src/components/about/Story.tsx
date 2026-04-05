"use client"

import React from 'react'
import { useApp } from '@/contexts/AppContext'
import { t } from '@/lib/i18n'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

export function Story() {
  const { language } = useApp()

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('about.title', language)}</h1>
            <p className="text-xl text-muted-foreground mb-8">{t('about.subtitle', language)}</p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t('about.story1', language)}</p>
              <p>{t('about.story2', language)}</p>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div>
                  <img 
                    src="/images/logo/91EA14E227EFF29C0F8D5532F97DAE6B 3-2.png" 
                    alt="QuillStack Logo" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
