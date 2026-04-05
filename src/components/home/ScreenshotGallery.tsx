"use client"

import React, { useState, useEffect } from 'react'
import { useApp } from '@/contexts/AppContext'
import { t } from '@/lib/i18n'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface SlideData {
  title: string
  desc: string
  image: string
}

export function ScreenshotGallery() {
  const { language } = useApp()
  const [current, setCurrent] = useState(0)

  const slides: SlideData[] = [
    { title: t('gallery.home', language), desc: t('gallery.home.desc', language), image: 'https://quillstack.js.org/images/home/e9781d3fccfa655655b5861b64457d958dfcce2e.png' },
    { title: t('gallery.article', language), desc: t('gallery.article.desc', language), image: 'https://quillstack.js.org/images/home/9e08e8fa7df325ccb556d2cf4cc420abf708b46e.png' },
    { title: t('gallery.category', language), desc: t('gallery.category.desc', language), image: 'https://quillstack.js.org/images/home/6ccb60071be8f00760a3824d9f7d0fad57de789f.png' },
    { title: t('gallery.friends', language), desc: t('gallery.friends.desc', language), image: 'https://quillstack.js.org/images/home/ba34b28aa06852bf23d5d30a4742113d49a166dc.png' },
    { title: t('gallery.dark', language), desc: t('gallery.dark.desc', language), image: 'https://quillstack.js.org/images/home/e7f8b9dcdb12a0a6d3253383f4b684272906ae03.png' },
  ]

  const next = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [])

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
          <Badge variant="outline" className="mb-4 text-primary border-primary/50">{t('gallery.badge', language)}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('gallery.title', language)}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('gallery.subtitle', language)}</p>
        </motion.div>

        {/* Gallery */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-muted/30">
                  <img
                    src={slides[current].image}
                    alt={slides[current].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Overlay info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">{slides[current].title}</h3>
                  <p className="text-muted-foreground">{slides[current].desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors shadow-lg">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors shadow-lg">
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-primary w-6' : 'bg-muted-foreground/30'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
