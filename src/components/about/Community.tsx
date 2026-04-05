"use client"

import React from 'react'
import { useApp } from '@/contexts/AppContext'
import { t } from '@/lib/i18n'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { Bug, Lightbulb, Heart } from 'lucide-react'

export function Community() {
  const { language } = useApp()

  const links = language === 'en' ? [
    { icon: FaGithub, title: 'GitHub', desc: '⭐ Star' },
    { icon: Bug, title: 'Feedback', desc: '🐛 Issues' },
    { icon: Lightbulb, title: 'Suggestions', desc: '💡 Discussions' },
  ] : [
    { icon: FaGithub, title: 'GitHub', desc: '⭐ Star' },
    { icon: Bug, title: language === 'zh' ? '问题反馈' : '問題反饋', desc: '🐛 Issues' },
    { icon: Lightbulb, title: language === 'zh' ? '功能建议' : '功能建議', desc: '💡 Discussions' },
  ]

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.community', language)}</h2>
          <p className="text-muted-foreground">{t('about.community.subtitle', language)}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {links.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-accent/50 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <link.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{link.title}</h3>
                  <p className="text-sm text-muted-foreground">{link.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground flex items-center justify-center gap-1"
        >
          <Heart className="h-4 w-4 text-red-500 fill-red-500" />
          {t('about.community.made', language)}
        </motion.p>
      </div>
    </section>
  )
}
