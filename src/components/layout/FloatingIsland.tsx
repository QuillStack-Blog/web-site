"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useApp } from '@/contexts/AppContext'
import { t } from '@/lib/i18n'
import { Menu, X } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

export function FloatingIsland() {
  const { language } = useApp()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: t('nav.home', language) },
    { href: '/deploy', label: t('nav.deploy', language) },
    { href: '/about', label: t('nav.about', language) },
  ]

  return (
    <>
      {/* Desktop navigation - flat style */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.2 }}
        className={cn(
          "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
          isScrolled ? "top-3" : "top-14"
        )}
      >
        <div className="bg-background border border-border rounded-lg px-1.5 py-1.5 flex items-center gap-0.5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 px-3 py-1.5">
            <img src="/images/logo/91EA14E227EFF29C0F8D5532F97DAE6B-removebg-preview1 1.png" alt="QuillStack Logo" className="w-7 h-7 object-contain" />
            <span className="font-medium text-sm hidden sm:inline">QuillStack</span>
          </Link>

          {/* Nav items - flat */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-1.5 rounded text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Mobile menu button - flat */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden fixed bottom-5 right-5 z-50 w-11 h-11 rounded-lg bg-primary text-primary-foreground flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {mobileOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-5 w-5" />
            </motion.div>
          ) : (
            <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <Menu className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Mobile menu - flat */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="md:hidden fixed inset-0 z-40 bg-background pt-20"
          >
            <nav className="flex flex-col items-center gap-2 p-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "text-xl font-medium py-3 px-6 rounded-md transition-colors block",
                      pathname === item.href
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="https://github.com/QuillStack-Blog/QuillStack"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 text-lg py-3 px-6 text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaGithub className="h-5 w-5" />
                GitHub
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}