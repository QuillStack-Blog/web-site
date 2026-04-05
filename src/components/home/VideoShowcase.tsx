"use client"

import React, { useState } from 'react'
import { useApp } from '@/contexts/AppContext'
import { t } from '@/lib/i18n'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { Play, Clock, ListVideo } from 'lucide-react'

export function VideoShowcase() {
  const { language } = useApp()
  const [activeVideo, setActiveVideo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const videos = [
    { titleKey: 'video.quickstart.title', descKey: 'video.quickstart.desc', duration: '05:23', thumb: 'https://placehold.co/800x450/1f2937/f97316?text=Quick+Start+Tutorial' },
    { titleKey: 'video.theme.title', descKey: 'video.theme.desc', duration: '08:15', thumb: 'https://placehold.co/800x450/fed7aa/f97316?text=Theme+Customization' },
    { titleKey: 'video.markdown.title', descKey: 'video.markdown.desc', duration: '06:42', thumb: 'https://placehold.co/800x450/fff7ed/f97316?text=Markdown+Tips' },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('video.title', language)}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('video.subtitle', language)}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="overflow-hidden bg-card/50 backdrop-blur border-border/50">
              <div className="relative aspect-video bg-muted/50">
                <img
                  src={videos[activeVideo].thumb}
                  alt={t(videos[activeVideo].titleKey, language)}
                  className="w-full h-full object-cover"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary transition-colors hover:scale-110 transform duration-200"
                  >
                    <Play className="h-8 w-8 text-white ml-1" fill="white" />
                  </button>
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-4 right-4 bg-black/70 rounded-md px-2 py-1 text-sm flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {isPlaying ? '02:15' : videos[activeVideo].duration}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t(videos[activeVideo].titleKey, language)}</h3>
                <p className="text-muted-foreground">{t(videos[activeVideo].descKey, language)}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Playlist */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-4">
                  <ListVideo className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">{t('video.playlist', language)}</h4>
                </div>
                <div className="space-y-2">
                  {videos.map((video, index) => (
                    <button
                      key={index}
                      onClick={() => { setActiveVideo(index); setIsPlaying(false) }}
                      className={`w-full text-left p-3 rounded-lg transition-all ${
                        activeVideo === index
                          ? 'bg-primary/10 border border-primary/30'
                          : 'hover:bg-accent/50 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative w-20 aspect-video rounded overflow-hidden bg-muted/50 flex-shrink-0">
                          <img src={video.thumb} alt={t(video.titleKey, language)} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <Play className="h-4 w-4 text-white" fill="white" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{t(video.titleKey, language)}</p>
                          <p className="text-xs text-muted-foreground">{video.duration}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
