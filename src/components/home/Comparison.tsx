"use client"

import React from 'react'
import { useApp } from '@/contexts/AppContext'
import { t } from '@/lib/i18n'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { Check, X, Minus, Package } from 'lucide-react'

export function Comparison() {
  const { language } = useApp()

  const features = [
    { key: 'comparison.feat.free', quillstack: true, wordpress: true, notion: 'partial', medium: true, ghost: false },
    { key: 'comparison.feat.domain', quillstack: true, wordpress: true, notion: 'partial', medium: false, ghost: true },
    { key: 'comparison.feat.noads', quillstack: true, wordpress: 'partial', notion: true, medium: false, ghost: true },
    { key: 'comparison.feat.markdown', quillstack: true, wordpress: 'partial', notion: true, medium: true, ghost: true },
    { key: 'comparison.feat.codehighlight', quillstack: true, wordpress: 'plugin', notion: true, medium: true, ghost: true },
    { key: 'comparison.feat.math', quillstack: true, wordpress: 'plugin', notion: true, medium: false, ghost: true },
    { key: 'comparison.feat.seo', quillstack: true, wordpress: 'plugin', notion: 'partial', medium: true, ghost: true },
    { key: 'comparison.feat.comments', quillstack: true, wordpress: true, notion: false, medium: true, ghost: true },
    { key: 'comparison.feat.fastdeploy', quillstack: true, wordpress: false, notion: true, medium: true, ghost: false },
    { key: 'comparison.feat.versioncontrol', quillstack: true, wordpress: false, notion: 'partial', medium: false, ghost: false },
    { key: 'comparison.feat.nodb', quillstack: true, wordpress: false, notion: true, medium: true, ghost: false },
    { key: 'comparison.feat.static', quillstack: true, wordpress: false, notion: false, medium: false, ghost: false },
  ]

function StatusIcon({ status }: { status: boolean | string }) {
  if (status === true) return <Check className="h-4 w-4 text-green-500" />
  if (status === false) return <X className="h-4 w-4 text-red-500" />
  if (status === 'partial') return <Minus className="h-4 w-4 text-yellow-500" />
  if (status === 'plugin') return <Package className="h-4 w-4 text-blue-500" />
  return null
}

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('comparison.title', language)}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('comparison.subtitle', language)}</p>
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
                      <th className="text-left p-4 font-medium">{t('comparison.feature', language)}</th>
                      <th className="p-4 font-medium text-primary">{t('comparison.quillstack', language)}</th>
                      <th className="p-4 font-medium text-muted-foreground">{t('comparison.wordpress', language)}</th>
                      <th className="p-4 font-medium text-muted-foreground">{t('comparison.notion', language)}</th>
                      <th className="p-4 font-medium text-muted-foreground">{t('comparison.medium', language)}</th>
                      <th className="p-4 font-medium text-muted-foreground">{t('comparison.ghost', language)}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((feature, index) => (
                      <tr
                        key={index}
                        className={`border-b border-border/30 ${index % 2 === 0 ? 'bg-muted/10' : ''} hover:bg-muted/20 transition-colors`}
                      >
                        <td className="p-4 font-medium">{t(feature.key, language)}</td>
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
              <span>{t('comparison.legend.supported', language)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <X className="h-3.5 w-3.5 text-red-500" />
              <span>{t('comparison.legend.unsupported', language)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Minus className="h-3.5 w-3.5 text-yellow-500" />
              <span>{t('comparison.legend.partial', language)}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
