"use client"

import React from 'react'
import { useApp } from '@/contexts/AppContext'
import { t } from '@/lib/i18n'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

interface Testimonial {
  nameKey: string
  roleKey: string
  quoteKey: string
  avatar: string
}

export function Testimonials() {
  const { language } = useApp()

  const testimonials: Testimonial[] = [
    { nameKey: 'testimonials.user1.name', roleKey: 'testimonials.user1.role.dev', quoteKey: 'testimonials.user1.quote.dev', avatar: 'https://placehold.co/100x100/fed7aa/f97316?text=Li' },
    { nameKey: 'testimonials.user1.name', roleKey: 'testimonials.user1.role.pm', quoteKey: 'testimonials.user1.quote.pm', avatar: 'https://placehold.co/100x100/fff7ed/f97316?text=SC' },
    { nameKey: 'testimonials.user2.name', roleKey: 'testimonials.user2.role', quoteKey: 'testimonials.user2.quote', avatar: 'https://placehold.co/100x100/f97316/ffffff?text=Zhang' },
    { nameKey: 'testimonials.user3.name', roleKey: 'testimonials.user3.role', quoteKey: 'testimonials.user3.quote', avatar: 'https://placehold.co/100x100/fdbA74/f97316?text=EW' },
    { nameKey: 'testimonials.user4.name', roleKey: 'testimonials.user4.role', quoteKey: 'testimonials.user4.quote', avatar: 'https://placehold.co/100x100/ea580c/ffffff?text=Wang' },
    { nameKey: 'testimonials.user5.name', roleKey: 'testimonials.user5.role', quoteKey: 'testimonials.user5.quote', avatar: 'https://placehold.co/100x100/c2410c/ffffff?text=Liu' },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('testimonials.title', language)}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('testimonials.subtitle', language)}</p>
        </motion.div>

        {/* Testimonial cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <Quote className="h-6 w-6 text-primary/30 mb-4" />
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{t(item.quoteKey, language)}</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={item.avatar} alt={t(item.nameKey, language)} />
                      <AvatarFallback>{t(item.nameKey, language).charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{t(item.nameKey, language)}</p>
                      <p className="text-xs text-muted-foreground">{t(item.roleKey, language)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">{t('testimonials.cta', language)}</p>
          <Button className="bg-gradient-to-r from-primary to-orange-500 hover:opacity-90" size="lg">{t('testimonials.cta.btn', language)}</Button>
        </motion.div>
      </div>
    </section>
  )
}
