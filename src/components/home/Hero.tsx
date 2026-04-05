"use client"

import React, { useRef, useEffect, useState } from 'react'
import { useApp } from '@/contexts/AppContext'
import { t } from '@/lib/i18n'
import { motion } from 'framer-motion'

export function Hero() {
  const { language } = useApp()
  const [mounted, setMounted] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animFrameRef = useRef<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    const drawWaves = (time: number) => {
      if (!ctx || !canvas) return

      const width = canvas.width
      const height = canvas.height
      const isDark = document.documentElement.classList.contains('dark')
      const waveCount = 3
      const baseY = height * 0.7

      for (let i = 0; i < waveCount; i++) {
        ctx.beginPath()

        const amplitude = 30 - i * 8
        const frequency = 0.008 + i * 0.002
        const speed = 0.0008 + i * 0.0003
        const yOffset = i * 40
        const opacity = isDark ? 0.08 - i * 0.02 : 0.06 - i * 0.015
        const waveColor = isDark ? `rgba(59, 130, 246, ${opacity})` : `rgba(37, 99, 235, ${opacity})`

        for (let x = 0; x <= width; x += 2) {
          const dx = x - mouseRef.current.x
          const mouseInfluence = mouseRef.current.x > 0 ? Math.max(0, 1 - Math.abs(dx) / 400) * 20 : 0
          const y = baseY + yOffset +
            Math.sin(x * frequency + time * speed) * amplitude +
            Math.sin(x * frequency * 1.5 + time * speed * 0.7) * amplitude * 0.5 +
            mouseInfluence * Math.sin(x * 0.02 + time * 0.001)

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.lineTo(width, height)
        ctx.lineTo(0, height)
        ctx.closePath()
        ctx.fillStyle = waveColor
        ctx.fill()
      }
    }

    const drawGrid = (time: number = 0) => {
      if (!ctx || !canvas) return

      const width = canvas.width
      const height = canvas.height
      const gridSize = 50
      const mouseRadius = 300
      const maxDistort = 25

      const mouseX = mouseRef.current.x
      const mouseY = mouseRef.current.y
      const isMouseActive = mouseX > 0 && mouseY > 0

      ctx.clearRect(0, 0, width, height)

      // Draw waves first
      drawWaves(time)

      const isDark = document.documentElement.classList.contains('dark')
      const baseOpacity = isDark ? 0.15 : 0.1

      // Mouse glow
      if (isMouseActive) {
        const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, mouseRadius)
        const glowColor = isDark ? '59, 130, 246' : '37, 99, 235'
        gradient.addColorStop(0, `rgba(${glowColor}, 0.15)`)
        gradient.addColorStop(0.5, `rgba(${glowColor}, 0.05)`)
        gradient.addColorStop(1, `rgba(${glowColor}, 0)`)
        ctx.fillStyle = gradient
        ctx.fillRect(mouseX - mouseRadius, mouseY - mouseRadius, mouseRadius * 2, mouseRadius * 2)
      }

      ctx.lineWidth = 1

      // Vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath()
        for (let y = 0; y <= height; y += 2) {
          const dx = x - mouseX
          const dy = y - mouseY
          const dist = Math.sqrt(dx * dx + dy * dy)

          let offsetX = 0
          let opacityBoost = 0
          if (isMouseActive && dist < mouseRadius && dist > 0) {
            const force = Math.pow(1 - dist / mouseRadius, 1.5) * maxDistort
            offsetX = (dx / dist) * force
            opacityBoost = Math.pow(1 - dist / mouseRadius, 1.5) * 0.3
          }

          const drawX = x + offsetX
          const opacity = Math.min(baseOpacity + opacityBoost, 0.6)
          const lineColor = isDark ? `rgba(148, 163, 184, ${opacity})` : `rgba(71, 85, 105, ${opacity})`
          ctx.strokeStyle = lineColor

          if (y === 0) {
            ctx.moveTo(drawX, y)
          } else {
            ctx.lineTo(drawX, y)
          }
        }
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath()
        for (let x = 0; x <= width; x += 2) {
          const dx = x - mouseX
          const dy = y - mouseY
          const dist = Math.sqrt(dx * dx + dy * dy)

          let offsetY = 0
          let opacityBoost = 0
          if (isMouseActive && dist < mouseRadius && dist > 0) {
            const force = Math.pow(1 - dist / mouseRadius, 1.5) * maxDistort
            offsetY = (dy / dist) * force
            opacityBoost = Math.pow(1 - dist / mouseRadius, 1.5) * 0.3
          }

          const drawY = y + offsetY
          const opacity = Math.min(baseOpacity + opacityBoost, 0.6)
          const lineColor = isDark ? `rgba(148, 163, 184, ${opacity})` : `rgba(71, 85, 105, ${opacity})`
          ctx.strokeStyle = lineColor

          if (x === 0) {
            ctx.moveTo(x, drawY)
          } else {
            ctx.lineTo(x, drawY)
          }
        }
        ctx.stroke()
      }

      animFrameRef.current = requestAnimationFrame((timestamp) => drawGrid(timestamp))
    }

    animFrameRef.current = requestAnimationFrame(drawGrid)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animFrameRef.current)
    }
  }, [mounted])

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-background pt-14">
        <div className="text-center px-4 max-w-4xl mx-auto pt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-primary">QuillStack</span>
          </h1>
        </div>
      </section>
    )
  }

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center bg-background pt-14 relative overflow-hidden">
      {/* Interactive Grid Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: 'none' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge 
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-3 py-1 rounded-md bg-primary/10 text-primary text-sm font-medium mb-8"
          >
            v1.0.0
          </motion.div>
            */}
          {/* Main title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            QuillStack
          </h1>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-4 font-normal"
          >
            {t('hero.slogan', language)}
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base md:text-lg text-muted-foreground/70 mb-12"
          >
            {t('hero.subtitle', language)}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <button className="px-6 py-2.5 bg-primary text-primary-foreground rounded-md font-medium text-sm hover:opacity-90 transition-opacity">
              {t('hero.cta.primary', language)}
            </button>
            <button className="px-6 py-2.5 border border-border bg-background rounded-md font-medium text-sm hover:bg-muted transition-colors">
              {t('hero.cta.secondary', language)}
            </button>
          </motion.div>
        </motion.div>

        {/* Browser mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative mx-auto max-w-3xl mt-16"
        >
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-background border border-border rounded px-3 py-1.5 text-sm text-muted-foreground text-center">
                  {t('hero.browser', language)}
                </div>
              </div>
            </div>
            <div className="aspect-[16/10] bg-muted/20 flex items-center justify-center p-8">
              <div className="text-center w-full max-w-md">
                <div className="w-12 h-12 rounded-md bg-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary-foreground">Q</span>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-muted rounded w-3/4 mx-auto" />
                  <div className="h-2 bg-muted/50 rounded w-1/2 mx-auto" />
                </div>
                <div className="mt-6 space-y-2 text-left">
                  <div className="h-2 bg-muted/30 rounded w-full" />
                  <div className="h-2 bg-muted/30 rounded w-5/6" />
                  <div className="h-2 bg-muted/30 rounded w-4/6" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border border-muted-foreground/30 rounded-full flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1 rounded-full bg-muted-foreground/50"
          />
        </div>
      </motion.div>
    </section>
  )
}