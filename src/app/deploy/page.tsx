"use client"

import React, { useState } from 'react'
import { useApp } from '@/contexts/AppContext'
import { t } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, ChevronRight, ChevronLeft, RotateCcw } from 'lucide-react'

export default function DeployPage() {
  const { language } = useApp()
  const [step, setStep] = useState(1)

  const steps = [
    { label: t('deploy.step1', language), key: 'step1' },
    { label: t('deploy.step2', language), key: 'step2' },
    { label: t('deploy.step3', language), key: 'step3' },
  ]

  return (
    <section className="py-24 px-4 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('deploy.title', language)}</h1>
          <p className="text-xl text-muted-foreground">{t('deploy.subtitle', language)}</p>
        </motion.div>

        {/* Step indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center gap-0">
            {steps.map((s, i) => (
              <React.Fragment key={i}>
                <button
                  onClick={() => setStep(i + 1)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    step === i + 1
                      ? 'bg-primary text-primary-foreground'
                      : step > i + 1
                      ? 'bg-primary/20 text-primary'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    step > i + 1 ? 'bg-primary text-primary-foreground' : 'bg-muted-foreground/20'
                  }`}>
                    {step > i + 1 ? '✓' : i + 1}
                  </span>
                  {s.label}
                </button>
                {i < steps.length - 1 && (
                  <div className={`w-8 h-0.5 ${step > i + 1 ? 'bg-primary' : 'bg-muted'}`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Step content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardContent className="p-8">
                {step === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">{t('deploy.step1.title', language)}</h2>
                    <p className="text-muted-foreground mb-4">{t('deploy.step1.hint', language)}</p>
                    <ul className="space-y-2 mb-8">
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <ChevronRight className="h-4 w-4 text-primary" />
                        Node.js 18+
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <ChevronRight className="h-4 w-4 text-primary" />
                        Git
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <ChevronRight className="h-4 w-4 text-primary" />
                        {t('deploy.step1.github', language)}
                      </li>
                    </ul>
                    <p className="text-muted-foreground mb-4">{t('deploy.step1.quick', language)}</p>
                    <div className="bg-muted/50 rounded-lg overflow-hidden mb-8">
                      <div className="flex items-center gap-2 px-4 py-2 bg-muted/80 border-b border-border/50">
                        <Terminal className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {t('deploy.step1.terminal', language)}
                        </span>
                      </div>
                      <pre className="p-4 text-sm overflow-x-auto">
                        <code className="text-foreground">
{`# 克隆模板仓库
git clone https://github.com/QuillStack-Blog/QuillStack.git
cd QuillStack`}
                        </code>
                      </pre>
                    </div>
                    <div className="flex justify-end">
                      <Button onClick={() => setStep(2)} className="gap-2">
                        {t('deploy.next', language)}
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">{t('deploy.step2.title', language)}</h2>
                    <div className="bg-muted/30 rounded-lg p-8 text-center mb-8">
                      <p className="text-muted-foreground">{t('deploy.step2.hint', language)}</p>
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setStep(1)} className="gap-2">
                        <ChevronLeft className="h-4 w-4" />
                        {t('deploy.prev', language)}
                      </Button>
                      <Button onClick={() => setStep(3)} className="gap-2">
                        {t('deploy.next', language)}
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">{t('deploy.step3.title', language)}</h2>
                    <div className="bg-muted/30 rounded-lg p-8 text-center mb-8">
                      <p className="text-muted-foreground">{t('deploy.step3.hint', language)}</p>
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setStep(2)} className="gap-2">
                        <ChevronLeft className="h-4 w-4" />
                        {t('deploy.prev', language)}
                      </Button>
                      <Button variant="outline" onClick={() => setStep(1)} className="gap-2">
                        <RotateCcw className="h-4 w-4" />
                        {t('deploy.restart', language)}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
