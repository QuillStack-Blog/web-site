"use client"

import React from 'react'
import { useApp } from '@/contexts/AppContext'
import { t } from '@/lib/i18n'
import { motion } from 'framer-motion'

const techLogos: Record<string, string> = {
  'Next.js': 'https://cdn.simpleicons.org/nextdotjs/000000',
  'React': 'https://cdn.simpleicons.org/react/61DAFB',
  'TypeScript': 'https://cdn.simpleicons.org/typescript/3178C6',
  'Tailwind': 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  'Markdown': 'https://cdn.simpleicons.org/markdown/000000',
  'Radix UI': 'https://cdn.simpleicons.org/radixui/161718',
  'Framer Motion': 'https://cdn.simpleicons.org/framer/0055FF',
}

export function TechStack() {
  const { language } = useApp()

  const techs = ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Markdown', 'Radix UI', 'Framer Motion']

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('techstack.title', language)}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('techstack.subtitle', language)}</p>
        </motion.div>

        {/* Tech stack grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="w-32 h-32 rounded-2xl bg-card/50 backdrop-blur border border-border/50 flex flex-col items-center justify-center gap-3 hover:border-primary/30 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/50 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <img src={techLogos[tech]} alt={tech} className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium text-center">{tech}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
