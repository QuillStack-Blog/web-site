"use client"

import React from 'react'
import { useApp } from '@/contexts/AppContext'
import { t } from '@/lib/i18n'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Code, BookOpen, Briefcase, FileCode, Camera, Music } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  code: Code,
  book: BookOpen,
  briefcase: Briefcase,
  filecode: FileCode,
  camera: Camera,
  music: Music,
}

export function UseCases() {
  const { language } = useApp()

  const useCases = [
    { icon: 'code', title: t('usecases.tech', language), desc: t('usecases.tech.desc', language), img: 'https://placehold.co/400x250/1f2937/f97316?text=Tech+Blog' },
    { icon: 'book', title: t('usecases.life', language), desc: t('usecases.life.desc', language), img: 'https://placehold.co/400x250/fff7ed/f97316?text=Lifestyle' },
    { icon: 'briefcase', title: t('usecases.portfolio', language), desc: t('usecases.portfolio.desc', language), img: 'https://placehold.co/400x250/f0fdf4/22c55e?text=Portfolio' },
    { icon: 'filecode', title: t('usecases.docs', language), desc: t('usecases.docs.desc', language), img: 'https://placehold.co/400x250/0f172a/38bdf8?text=Documentation' },
    { icon: 'camera', title: t('usecases.photo', language), desc: t('usecases.photo.desc', language), img: 'https://placehold.co/400x250/fdf4ff/a855f7?text=Photography' },
    { icon: 'music', title: t('usecases.creative', language), desc: t('usecases.creative.desc', language), img: 'https://placehold.co/400x250/fff1f2/f43f5e?text=Creative' },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('usecases.title', language)}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('usecases.subtitle', language)}</p>
        </motion.div>

        {/* Use case cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {useCases.map((item, index) => {
            const Icon = iconMap[item.icon]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 transition-all duration-300 group">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/50 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
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
