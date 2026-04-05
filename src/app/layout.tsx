import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AppProvider } from '@/contexts/AppContext'
import { TopBar } from '@/components/layout/TopBar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QuillStack - 更轻 · 更快 · 更美',
  description: '几分钟搭建，一辈子受益的个人博客',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <AppProvider>
          <TopBar />
          <main className="pt-14 min-h-screen">
            {children}
          </main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
}
