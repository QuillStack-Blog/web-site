"use client"

import React from 'react'
import { useApp } from '@/contexts/AppContext'
import { t } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export function CTA() {
  const { language } = useApp()

  const trustItems = [
    { label: t('cta.free', language) },
    { label: t('cta.opensource', language) },
    { label: t('cta.nocard', language) },
  ]

  return (
    <section className="py-20 px-4 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{t('cta.title', language)}</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">{t('cta.subtitle', language)}</p>

          {/* Buttons - flat style */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button size="lg" className="min-w-[180px]">
              {t('cta.primary', language)}
            </Button>
            <Button variant="outline" size="lg" className="min-w-[180px]">
              {t('cta.secondary', language)}
            </Button>
          </div>

          {/* Trust badges - flat */}
          <div className="flex flex-wrap justify-center gap-6">
            {trustItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Check className="h-4 w-4 text-primary" />
                {item.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}