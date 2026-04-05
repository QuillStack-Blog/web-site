"use client"

import React from 'react'
import { useApp } from '@/contexts/AppContext'
import { t } from '@/lib/i18n'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { Star, GitFork, Users, Download } from 'lucide-react'

export function Stats() {
  const { language } = useApp()

  const stats = [
    { icon: Star, value: '1.2k+', label: t('stats.stars', language) },
    { icon: GitFork, value: '180', label: t('stats.forks', language) },
    { icon: Users, value: '5.0k+', label: t('stats.users', language) },
    { icon: Download, value: '15k+', label: t('stats.downloads', language) },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* GitHub banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <Button variant="outline" className="gap-2" asChild>
            <a href="https://github.com/QuillStack-Blog/QuillStack" target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-4 w-4" />
              {t('stats.github', language)}
            </a>
          </Button>
        </motion.div>

        {/* Stats grid - flat style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-card">
                <CardContent className="p-5 text-center">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}