"use client"

import React from 'react'
import Link from 'next/link'
import { useApp } from '@/contexts/AppContext'
import { FaGithub, FaEnvelope } from 'react-icons/fa'
import { Rss, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

export function Footer() {
  const { language } = useApp()
  const year = new Date().getFullYear()

  const footerLinks = {
    product: [
      { label: language === 'en' ? 'Features' : language === 'tw' ? '功能特性' : '功能特性', href: '/#features' },
      { label: language === 'en' ? 'Themes' : language === 'tw' ? '主題' : '主题', href: '/#themes' },
      { label: language === 'en' ? 'Deploy' : language === 'tw' ? '部署' : '部署', href: '/deploy' },
    ],
    resources: [
      { label: "SnowBall's Blog", href: 'https://static-blog.bqiu.top' },
      { label: 'SnowBall README', href: 'https://github.com/SnowBall-Bqiu' },
    ],
    community: [
      { label: 'GitHub', href: 'https://github.com/QuillStack-Blog/QuillStack' },
      { label: language === 'en' ? 'Discussions' : language === 'tw' ? '討論' : '讨论', href: 'https://github.com/QuillStack-Blog/QuillStack/discussions' },
      { label: language === 'en' ? 'Issues' : language === 'tw' ? '問題' : '问题', href: 'https://github.com/QuillStack-Blog/QuillStack/issues' },
    ],
  }

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-background border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <img src="/images/logo/91EA14E227EFF29C0F8D5532F97DAE6B-removebg-preview1 1.png" alt="QuillStack Logo" className="w-7 h-7 object-contain" />
              <span className="font-medium">QuillStack</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs leading-relaxed">
              {language === 'en' ? 'Lighter, Faster, More Beautiful. A blog builder born for writing.' : language === 'tw' ? '更輕、更快、更美。為寫作而生的部落格構建工具。' : '更轻、更快、更美。为写作而生的博客构建工具。'}
            </p>
            {/* Social links - flat */}
            <div className="flex gap-2">
              <a href="https://github.com/QuillStack-Blog/QuillStack" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors text-muted-foreground hover:text-foreground">
                <FaGithub className="h-4 w-4" />
              </a>
              <a href="mailto:quillstack@outlook.com" className="w-9 h-9 rounded-md bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors text-muted-foreground hover:text-foreground">
                <FaEnvelope className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-sm mb-3">{language === 'en' ? 'Product' : language === 'tw' ? '產品' : '产品'}</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-3">{language === 'en' ? 'Resources' : language === 'tw' ? '資源' : '资源'}</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-3">{language === 'en' ? 'Community' : language === 'tw' ? '社區' : '社区'}</h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar - flat separator */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            © {year} QuillStack. {language === 'en' ? 'All rights reserved.' : language === 'tw' ? '版權所有。' : '版权所有。'}
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            {language === 'en' ? 'Made with' : language === 'tw' ? '用心製作' : '用心制作'} <Heart className="h-3.5 w-3.5 text-primary fill-primary" /> {language === 'en' ? 'by the community' : language === 'tw' ? '由社區' : '由社区'}
          </p>
        </div>
      </div>
    </motion.footer>
  )
}