"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import type { Language } from '@/lib/i18n'

interface AppContextType {
  language: Language
  setLanguage: (lang: Language) => void
  theme: string
  setTheme: (theme: string) => void
}

const AppContext = createContext<AppContextType>({
  language: 'zh',
  setLanguage: () => {},
  theme: 'dark',
  setTheme: () => {},
})

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh')
  const [theme, setTheme] = useState<string>('dark')

  useEffect(() => {
    const savedLang = localStorage.getItem('quillstack-language') as Language
    if (savedLang) setLanguage(savedLang)
    
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  useEffect(() => {
    localStorage.setItem('quillstack-language', language)
  }, [language])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}
