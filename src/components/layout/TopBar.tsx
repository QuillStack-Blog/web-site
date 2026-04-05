"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useApp } from '@/contexts/AppContext'
import { t } from '@/lib/i18n'
import { Moon, Sun, Monitor, Rss, ChevronDown, Globe, Menu, X } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

export function TopBar() {
  const { language, setLanguage, theme, setTheme } = useApp()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { href: '/', label: t('nav.home', language) },
    { href: '/deploy', label: t('nav.deploy', language) },
    { href: '/about', label: t('nav.about', language) },
  ]

  const themeIcon = theme === 'light' ? <Sun className="h-4 w-4" /> : theme === 'dark' ? <Moon className="h-4 w-4" /> : <Monitor className="h-4 w-4" />
  const themeTitle = theme === 'system' ? t('theme.current.system', language) : theme === 'light' ? t('theme.current.light', language) : t('theme.current.dark', language)

  if (!mounted) {
    return (
      <div className="fixed top-0 left-0 right-0 z-50 h-14 bg-background border-b border-border flex items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-4">
          <div className="w-7 h-7 bg-muted rounded" />
          <div className="hidden md:flex gap-2">
            <div className="w-12 h-5 bg-muted rounded" />
            <div className="w-12 h-5 bg-muted rounded" />
            <div className="w-12 h-5 bg-muted rounded" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-muted rounded" />
          <div className="w-8 h-8 bg-muted rounded" />
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Unified TopBar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-14 bg-background border-b border-border">
        <div className="max-w-[90rem] mx-auto px-4 lg:px-8 h-full grid grid-cols-3 items-center">
          {/* Left section: Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <img src="/images/logo/91EA14E227EFF29C0F8D5532F97DAE6B-removebg-preview1 1.png" alt="QuillStack Logo" className="w-7 h-7 object-contain" />
              <span className="font-medium text-sm hidden sm:inline">QuillStack</span>
            </Link>
          </div>

          {/* Center section: Navigation */}
          <div className="flex justify-center">
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

          {/* Right section: Tools */}
          <div className="flex items-center justify-end gap-1">
            {/* Theme dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="p-2 rounded-md hover:bg-muted transition-colors" title={themeTitle}>
                {themeIcon}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')} className="gap-2">
                  <Sun className="h-4 w-4" />
                  {t('theme.light', language)}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')} className="gap-2">
                  <Moon className="h-4 w-4" />
                  {t('theme.dark', language)}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')} className="gap-2">
                  <Monitor className="h-4 w-4" />
                  {t('theme.system', language)}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* GitHub */}
            <a href="https://github.com/QuillStack-Blog/QuillStack" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-muted transition-colors" title="GitHub">
              <FaGithub className="h-4 w-4" />
            </a>


            {/* Divider */}
            <div className="w-px h-5 bg-border mx-1 hidden sm:block" />

            {/* Version tag */}
            <span className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground font-medium hidden sm:block">v2026.03.17</span>

            {/* Language switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger className="p-2 rounded-md hover:bg-muted transition-colors" title={t('language', language)}>
                <Globe className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('zh')} className={language === 'zh' ? 'bg-muted' : ''}>
                  {t('lang.zh', language)}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')} className={language === 'en' ? 'bg-muted' : ''}>
                  {t('lang.en', language)}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('tw')} className={language === 'tw' ? 'bg-muted' : ''}>
                  {t('lang.tw', language)}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-md hover:bg-muted transition-colors ml-1"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-14 left-0 right-0 z-40 bg-background border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block py-2.5 px-3 rounded text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="pt-2 border-t border-border mt-2"
              >
                <a
                  href="https://github.com/QuillStack-Blog/QuillStack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2.5 px-3 rounded text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <FaGithub className="h-4 w-4" />
                  GitHub
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}