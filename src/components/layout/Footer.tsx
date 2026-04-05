"use client"

import React from 'react'
import Link from 'next/link'
import { useApp } from '@/contexts/AppContext'
import { t } from '@/lib/i18n'
import { FaGithub, FaEnvelope } from 'react-icons/fa'
import { Heart } from 'lucide-react'
import { motion } from 'framer-motion'

export function Footer() {
  const { language } = useApp()
  const year = new Date().getFullYear()

  const footerLinks = {
    product: [
      { labelKey: 'footer.features', href: '/#features' },
      { labelKey: 'footer.themes', href: '/#themes' },
      { labelKey: 'footer.deploy', href: '/deploy' },
    ],
    resources: [
      { label: "SnowBall's Blog", href: 'https://static-blog.bqiu.top' },
      { label: 'SnowBall README', href: 'https://github.com/SnowBall-Bqiu' },
    ],
    community: [
      { labelKey: 'nav.github', href: 'https://github.com/QuillStack-Blog/QuillStack' },
      { labelKey: 'footer.discussions', href: 'https://github.com/QuillStack-Blog/QuillStack/discussions' },
      { labelKey: 'footer.issues', href: 'https://github.com/QuillStack-Blog/QuillStack/issues' },
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
              {t('footer.tagline', language)}
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
            <h4 className="font-medium text-sm mb-3">{t('footer.product', language)}</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {t(link.labelKey, language)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-3">{t('footer.resources', language)}</h4>
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
            <h4 className="font-medium text-sm mb-3">{t('footer.community', language)}</h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {t(link.labelKey, language)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar - flat separator */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            © {year} QuillStack. {t('footer.copyright', language)}
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            {t('footer.made_with', language)} <Heart className="h-3.5 w-3.5 text-primary fill-primary" /> {t('footer.by_community', language)}
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
