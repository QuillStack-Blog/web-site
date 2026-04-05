"use client"

import React from 'react'
import { useApp } from '@/contexts/AppContext'
import { t } from '@/lib/i18n'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { FileJson, Eye, ExternalLink } from 'lucide-react'

export function ConfigPreview() {
  const { language } = useApp()

  // Dynamic config code based on language
  const configCode = `{
    "siteTitle": "${t('config.example.siteTitle', language)}",
    "author": {
      "name": "${t('config.example.authorName', language)}",
      "avatar": "/avatar.png",
      "bio": "${t('config.example.bio', language)}"
    },
    "theme": {
      "primaryColor": "#f97316",
      "fontFamily": "Inter"
    },
    "social": {
      "github": "yourname",
      "twitter": "@yourname"
    }
}`

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('config.title', language)}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('config.subtitle', language)}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Code block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur border-border/50 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/50">
                <FileJson className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{t('config.filename', language)}</span>
              </div>
              <CardContent className="p-0">
                <pre className="p-6 text-sm overflow-x-auto bg-muted/30">
                  <code className="text-muted-foreground">
                    {configCode.split('\n').map((line, i) => (
                      <div key={i} className="flex">
                        <span className="w-8 text-muted-foreground/50 select-none text-right mr-4">{i + 1}</span>
                        <span className="text-foreground">{line}</span>
                      </div>
                    ))}
                  </code>
                </pre>
              </CardContent>
              <div className="px-6 py-3 border-t border-border/50">
                <span className="text-xs text-muted-foreground">{t('config.highlight', language)}</span>
              </div>
            </Card>
          </motion.div>

          {/* Preview card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur border-border/50 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/50">
                <Eye className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{t('config.preview', language)}</span>
                <span className="ml-auto text-xs text-muted-foreground">500 × 400</span>
              </div>
              <CardContent className="p-6">
                {/* Simulated blog preview */}
                <div className="rounded-lg border border-border/50 overflow-hidden bg-background">
                  {/* Blog header */}
                  <div className="p-4 border-b border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent-gradient flex items-center justify-center">
                        <span className="text-white font-bold text-sm">Q</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{t('config.example.preview.title', language)}</h4>
                        <p className="text-xs text-muted-foreground">{t('config.example.preview.bio', language)}</p>
                      </div>
                    </div>
                  </div>
                  {/* Blog content */}
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-muted rounded w-3/4" />
                    <div className="h-3 bg-muted/50 rounded w-full" />
                    <div className="h-3 bg-muted/50 rounded w-5/6" />
                    <div className="h-3 bg-muted/50 rounded w-2/3" />
                  </div>
                </div>
              </CardContent>
              <div className="px-6 py-3 border-t border-border/50 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{t('config.live', language)}</span>
                <Button variant="ghost" size="sm" className="gap-1 text-xs">
                  <ExternalLink className="h-3 w-3" />
                  {t('config.docs', language)}
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
